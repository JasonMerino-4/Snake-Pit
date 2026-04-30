import nodeCode from "./node.wgsl";
import { computeDirection } from "./compute";
import "./styles.css"


async function main() {
    // Request an adapter and device
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter.requestDevice();

    // Configure rendering context
    const canvas = document.getElementById("webgpu-canvas") as HTMLCanvasElement;
    const context = canvas.getContext('webgpu') as unknown as GPUCanvasContext;
    const format = navigator.gpu.getPreferredCanvasFormat();
    const snakeSlider = document.getElementById("amount");
    const lengthSlider = document.getElementById("length");
    const startSim = document.getElementById("start_sim");
    const pitActivate = document.getElementById("pit")
    const followActivate = document.getElementById("follow");
    let simId = 0;

    context.configure({
        device,
        format,
    });

    
    // Create bind group layout (now with camera uniform buffer)
    const bindGroupLayout = device.createBindGroupLayout({
    entries: [
        {
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" },
        },
    ]
    });

    class Node {
        x: number;
        y: number;
        active: number;
        color: [number, number, number, number];
        
        public constructor(x: number, y: number, color: [number, number, number, number]){
            this.x = x;
            this.y = y;
            this.color = color;
        }
    }

    class Snake {
        nodes: Node[];

        public constructor(x: number, y: number, length: number, color: [number, number, number, number]){
            this.nodes = []

            let offset = 0
            for (let i = 0; i < length; i++){
                this.nodes.push(new Node(x, y + offset, color));
                offset += 0.03
            }
        }
    }

    let bindGroup : GPUBindGroup;
    let snakes: Snake[] = [];
    let snakeLength = 4;
    let numSnakes = 3;
    let mode = 0;
    let nodeData: Float32Array;
    let nodeBuffer:GPUBuffer;
    let readBuffer:GPUBuffer;
    let brain : computeDirection;
    let frameCount = 0;
    let start= false;
    const idxToCard = new Map<number, HTMLElement>();

    const mouseData = new Float32Array(4); 
    const mouseBuffer = device.createBuffer({
        size: mouseData.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const snakeMeta = new Uint32Array(4);
    const snakeMetaBuffer = device.createBuffer({
        size: snakeMeta.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    })

    snakeMeta[0] = snakeLength;
    snakeMeta[1] = numSnakes;
    snakeMeta[2] = mode;
    device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);

    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseData[0] = ((event.clientX - rect.left) / canvas.width) * 2 - 1;
        mouseData[1] = (((event.clientY - rect.top) / canvas.height) * 2 - 1) * -1;
        device.queue.writeBuffer(mouseBuffer, 0, mouseData);
    });

    snakeSlider.addEventListener("input", (event) => {
        start = false;
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value);
        document.getElementById("amount_value").textContent = target.value;

        numSnakes = value;
        snakeMeta[1] = numSnakes;

        snakes = [];
        device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
        generateRandomSnakes();
    });

    lengthSlider.addEventListener("input", (event) => {
        start = false;
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value);
        document.getElementById("length_value").textContent = target.value;

        snakeLength = value;
        snakeMeta[0] = value;
        console.log("new snake length", snakeLength);

        snakes = [];
        device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
        generateRandomSnakes();
    });

    startSim.addEventListener("click", (event)=>{
        let prev = start;
        start = true;
    })

    pitActivate.addEventListener("click", (event)=>{
        mode = 1;
        snakeMeta[2] = mode;
        device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
    })

    followActivate.addEventListener("click", (event)=>{
        mode = 0;
        snakeMeta[2] = mode;
        device.queue.writeBuffer(snakeMetaBuffer, 0, snakeMeta);
    })

    function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
        let c = v * s;
        let x = c * (1 - Math.abs(((h * 6) % 2) - 1));
        let m = v - c;

        let [r, g, b] =
            h < 1/6 ? [c, x, 0] :
            h < 2/6 ? [x, c, 0] :
            h < 3/6 ? [0, c, x] :
            h < 4/6 ? [0, x, c] :
            h < 5/6 ? [x, 0, c] :
                    [c, 0, x];

        return [r + m, g + m, b + m];
    }

    document.getElementById("snake_list");
    function createSnakeCard(color:[number, number, number], idx:number) {
        const container = document.getElementById("snake_list");

        const r = Math.floor(color[0] * 255);
        const g = Math.floor(color[1] * 255);
        const b = Math.floor(color[2] * 255);

        const cssColor = `rgba(${r}, ${g}, ${b}`;
        const id = `${r}${g}${b}`;

        const card = document.createElement("div");
        card.className = "snake_card";

        card.addEventListener("click", () => {
            idxToCard.forEach((c) => {
                c.classList.remove("selected");
            });

            card.classList.add("selected");
            
            console.log("Selected snake index:", idx);
        });

        const idText = document.createElement("p");
        idText.textContent = id; // ID = color string

        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = cssColor;

        // Assemble
        card.appendChild(idText);
        card.appendChild(colorDiv);
        container.appendChild(card);
        idxToCard.set(idx, card);
    }

    function addElim(card:HTMLElement){
        const elimList = document.getElementById("eliminated_list")
        const elimHeader = document.getElementById("elim_header");
        elimList!.prepend(card); 
        elimHeader.remove();
        elimList!.prepend(elimHeader);
        reviveTopSnake()
    }

    function clearSnakeList() {
        const container = document.getElementById("snake_list");
        const header = document.getElementById("snake_list_header");
        const elimList = document.getElementById("eliminated_list");
        const elimHeader = document.getElementById("elim_header");

        container.innerHTML = "";          // clear all
        elimList.innerHTML = "";
        container.appendChild(header);     // put header back
        elimList.appendChild(elimHeader);
        idxToCard.clear();
    }
    
    async function reviveTopSnake() {
        const elimList = document.getElementById("eliminated_list");
        const snakeList = document.getElementById("snake_list");
        const header = document.getElementById("snake_list_header");

        // Only revive if the snake list is empty (just the header remains)
        // and there is someone in the elimination list to bring back
        if (snakeList?.children.length === 1 && elimList?.children.length > 1) {
            // The first child is usually the header, so we take the second child
            const topCard = elimList.children[1] as HTMLElement; 
            
            // Find the index of the snake associated with this card
            let snakeIdx = -1;
            for (let [idx, card] of idxToCard.entries()) {
                if (card === topCard) {
                    snakeIdx = idx;
                    break;
                }
            }

            if (snakeIdx !== -1) {
                // 1. Move the card back to the main list
                topCard.remove();
                header?.after(topCard);

                // 2. Prepare the reset data for the GPU
                // We only need to update the segments for THIS specific snake
                const stride = 8; // 8 floats per node
                const snakeStartIdx = snakeIdx * snakeLength * stride;
                const updateData = new Float32Array(snakeLength * stride);

                for (let j = 0; j < snakeLength; j++) {
                    const offset = j * stride;
                    updateData[offset] = 0.0 + (j * 0.04);     // X center
                    updateData[offset + 1] = 0.0 + (j * 0.04); // Y center
                    updateData[offset + 2] = 0.0; // Unmark "hit" (data[i+2] = 0.0)
                    updateData[offset + 3] = 0.0; // padding
                    
                    // Keep the original colors from our local nodeData
                    updateData[offset + 4] = nodeData[snakeStartIdx + offset + 4];
                    updateData[offset + 5] = nodeData[snakeStartIdx + offset + 5];
                    updateData[offset + 6] = nodeData[snakeStartIdx + offset + 6];
                    updateData[offset + 7] = nodeData[snakeStartIdx + offset + 7];
                }

                // 3. Write directly to the GPU storage buffer
                device.queue.writeBuffer(
                    nodeBuffer, 
                    snakeStartIdx * 4, // offset in bytes
                    updateData
                );
            }
        }
    }

    // Function to generate a random graph
    function generateRandomSnakes() {
        start = false;
        simId++;
        
        if (nodeBuffer) nodeBuffer.destroy();
        if (readBuffer) {
            try { readBuffer.unmap(); } catch(e) {}
            readBuffer.destroy();
        }
        clearSnakeList()
        
        // Define 10 high-contrast colors (RGBA)
        const palette: [number, number, number, number][] = [
            [1.0, 0.0, 0.0, 1.0], // Red
            [1.0, 1.0, 0.0, 1.0], // Yellow
            [0.0, 0.0, 1.0, 1.0], // Blue
        ];

        for (let i = 0; i < numSnakes; i++) {
            const hue = i / numSnakes; 
            const [r, g, b] = hsvToRgb(hue, 1.0, 1.0);
            createSnakeCard([r,g,b], i);

            snakes.push(new Snake(
                Math.random() * 2.0 - 1.0,
                Math.random() * 2.0 - 1.0, 
                snakeLength,
                [r, g, b, 1.0]
            ));
        }
        
        // Create node buffer
        nodeData = new Float32Array(numSnakes * snakeLength * 8);
        snakes.forEach((snake, i) => {
            snake.nodes.forEach((node, j) => {
                const offset = (i * snakeLength + j) * 8
                nodeData[offset] = node.x;
                nodeData[offset + 1] = node.y;
                nodeData[offset + 2] = 0.0;
                nodeData[offset + 3] = 0.0; 
                nodeData[offset + 4] = node.color[0];
                nodeData[offset + 5] = node.color[1];
                nodeData[offset + 6] = node.color[2];
                nodeData[offset + 7] = node.color[3];
            })
        });


        
        
        // Create GPU buffers
        nodeBuffer = device.createBuffer({
            size: nodeData.byteLength,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
            mappedAtCreation: true,
        });

        //const readBuffer = device.createBuffer({
        readBuffer = device.createBuffer({
            size: nodeData.byteLength,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
        });
        
        new Float32Array(nodeBuffer.getMappedRange()).set(nodeData);
        nodeBuffer.unmap();
        
        // Create bind group
        bindGroup = device.createBindGroup({
            layout: bindGroupLayout,
            entries: [
                {
                binding: 0,
                resource: { buffer: nodeBuffer }
                },
            ]
        }); 

        brain = new computeDirection(device, nodeBuffer, mouseBuffer, snakeMetaBuffer, (numSnakes * snakeLength));
    }

    let reading = false;

    async function readSnakeResults() {
        if (reading || !readBuffer) return;
        reading = true;
        const currentSimId = simId;

        try {
            await device.queue.onSubmittedWorkDone();
            if (currentSimId !== simId) return;

            await readBuffer.mapAsync(GPUMapMode.READ);
            if (currentSimId !== simId) {
                readBuffer.unmap();
                return;
            }

            const mapped = new Float32Array(readBuffer.getMappedRange());
            const data = new Float32Array(mapped.length);
            data.set(mapped);
            readBuffer.unmap();

            for (let i = 0; i < data.length; i += (8 * snakeLength)) {
                if (data[i + 2] === 1.0) {
                    const snakeIndex = Math.floor(i / (snakeLength * 8));
                    const card = idxToCard.get(snakeIndex);
                    if (card && card.parentElement?.id !== "eliminated_list") {
                        card.remove();
                        addElim(card);
                    }
                }
            }
        } catch (e) {
            console.warn("Read aborted");
        } finally {
            reading = false;
        }
    }

    generateRandomSnakes();

    // Create shader module
    const nodeModule = device.createShaderModule({
        code: nodeCode
    });

    // Create pipeline
    const nodePipeline = device.createRenderPipeline({
        layout: device.createPipelineLayout({
        bindGroupLayouts: [bindGroupLayout]
        }),
        vertex: {
        module: nodeModule,
        entryPoint: "vertexMain"
        },
        fragment: {
        module: nodeModule,
        entryPoint: "fragmentMain",
        targets: [{ format }]
        }
    });
    

    function render(): void {

        const targetTexture = context.getCurrentTexture();
        const commandEncoder = device.createCommandEncoder();

        if (start){
            brain.chase(commandEncoder);

            if (readBuffer.mapState === "unmapped") {
                commandEncoder.copyBufferToBuffer(
                    nodeBuffer, 0, 
                    readBuffer, 0, 
                    nodeData.byteLength
                );
            }
        }

        const pass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: targetTexture.createView(),
                loadOp: "clear",
                storeOp: "store",
                clearValue: { r: 1.0, g: 1.0, b: 1.0, a: 1.0 } // Set to white
            }]
        });

        pass.setPipeline(nodePipeline);
        pass.setBindGroup(0, bindGroup);
        pass.draw(6, numSnakes * snakeLength);
        pass.end();

        device.queue.submit([commandEncoder.finish()]);

        if (frameCount % 8 === 0 && start) {
            readSnakeResults();
        }
        
        frameCount = (frameCount + 1) % 1000;
        requestAnimationFrame(render);
    }

    render();
}

window.addEventListener("load", main);