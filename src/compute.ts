import move from "./move.wgsl";

export class computeDirection {
    private computePipeline: GPUComputePipeline | null = null;
    private bindGroup: GPUBindGroup | null = null;
    private nodeCount: number = 0;
    private device: GPUDevice;
    private nodebuffer: GPUBuffer;
    private mouseBuffer: GPUBuffer;
    private snakeMetaBuffer: GPUBuffer;

    constructor(device: GPUDevice, nodebuffer: GPUBuffer, mouseBuffer: GPUBuffer, snakeMetaBuffer: GPUBuffer, nodeCount: number) {
        this.device = device;
        this.nodebuffer = nodebuffer;
        this.mouseBuffer = mouseBuffer;
        this.snakeMetaBuffer = snakeMetaBuffer;
        this.nodeCount = nodeCount;

        // Create compute pipeline
        this.computePipeline = this.device.createComputePipeline({
            layout: "auto",
            compute: {
                module: device.createShaderModule({
                    code: move
                }),
                entryPoint: "main",
            },
        });
        
        // Create bind group
        this.bindGroup = this.device.createBindGroup({
            layout: this.computePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.nodebuffer,
                    }
                },
                {
                    binding: 1,
                    resource: {
                       buffer: this.mouseBuffer 
                    }
                },
                {
                    binding: 2,
                    resource: {
                       buffer: this.snakeMetaBuffer 
                    }
                }
            ]
        });
    }

    public chase(commandEncoder: GPUCommandEncoder): void {
        const pass = commandEncoder.beginComputePass();

        pass.setBindGroup(0, this.bindGroup);
        pass.setPipeline(this.computePipeline);

        pass.dispatchWorkgroups(
            Math.ceil(this.nodeCount / 64),
            1,
            1
        );

        pass.end();
    }
}