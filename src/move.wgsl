struct Node {
    pos : vec2f,
    hit : vec2f,
    color : vec4f,
};

struct Mouse {
    pos : vec2f,
};

struct SnakeMetaData {
    length: u32,
    numSnakes: u32,
    mode: u32,
};

@group(0) @binding(0) var<storage, read_write> nodes : array<Node>;
@group(0) @binding(1) var<uniform> mouse : Mouse;
@group(0) @binding(2) var<uniform> snakeMeta : SnakeMetaData;

fn run_chase(global_id: vec3<u32>) {    
    var head = global_id.x - (global_id.x % snakeMeta.length);
    var tail = head + snakeMeta.length + 1;
    let mousePos = mouse.pos;

    // safe bounds check
    if (global_id.x >= arrayLength(&nodes)) {
        return;
    }


    let nodePos = nodes[global_id.x].pos;

    var dir: vec2f = vec2f(0.0, 0.0);
    if ((global_id.x % snakeMeta.length == 0)){
        dir = mousePos - nodePos;
    } else {
        dir = nodes[global_id.x-1].pos - nodePos;
    }

    let dist = length(dir);
    
    if (dist > 0.04) {
        let step = normalize(dir) * 0.005;
        nodes[global_id.x].pos += step;
    } else {
        return;
    }


    for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {
        if (j <= tail && j >= head) {
            continue;
        }

        let offset = nodePos - nodes[j].pos;
        let dist = length(offset);

        var minDist = 0.1;

        if (dist > 0.000001 && dist < minDist) {
            let dir = normalize(offset);

            // stronger push when closer
            let strength = (minDist - dist) / minDist;

            nodes[global_id.x].pos += dir * strength * 0.01;
        }
    }
}

fn run_pit(global_id: vec3<u32>) {    
    var head = global_id.x - (global_id.x % snakeMeta.length);
    var tail = head + snakeMeta.length;

    if (global_id.x >= arrayLength(&nodes)) {
        return;
    }

    let nodePos = nodes[global_id.x].pos;

    var poi: vec2f = vec2f(0.0, 0.0);
    var poi_idx = 0u;
    
    if (global_id.x % snakeMeta.length == 0){ 
        var closest = 1e9;

        for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {
            if (j <= tail && j >= head) {
                continue;
            }

            if (nodes[j].hit.x == 1.0){
                continue;
            }

            let offset = nodes[j].pos - nodePos;
            let dist = length(offset);

            if (dist < closest){
                closest = dist;
                poi = offset;
                poi_idx = j;
            }
        }

        if (closest == 1e9){
            poi = vec2f(0.0, 0.0);
        }
    } else {
        poi = nodes[global_id.x-1].pos - nodePos;

        if (nodes[global_id.x-1].hit.x == 1.0){
            nodes[global_id.x].hit.x = 1.0;
        }
    }

    let dist = length(poi);

    if (nodes[global_id.x].hit.x == 1.0){
        nodes[global_id.x].pos = vec2f(-2.0, 1.0);
        nodes[global_id.x].hit.x = 1.0;
    }
    

    if (dist > 0.03 && global_id.x % snakeMeta.length != 0){
        let step = normalize(poi) * 0.003;
        nodes[global_id.x].pos += step;
    } else if (dist > 0.005 && global_id.x % snakeMeta.length == 0){
        let step = normalize(poi) * 0.003;
        nodes[global_id.x].pos += step;
    } else if (global_id.x % snakeMeta.length == 0){
        nodes[poi_idx].hit.x = 1.0;
    }
}

@compute @workgroup_size(64, 1, 1)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
    if (snakeMeta.mode == 0){
        run_chase(global_id);
    } else {
        run_pit(global_id);
    }
}

// Working
// @compute @workgroup_size(64, 1, 1)
// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
//     let tail = global_id.x * snakeMeta.length;
//     let head = tail + snakeMeta.length;
//     let mousePos = mouse.pos;
    
//     for (var i = tail; i < head; i++){

//         // safe bounds check
//         if (i >= arrayLength(&nodes)) {
//             return;
//         }

//         let nodePos = nodes[i].pos;

//         var dir: vec2f = vec2f(0.0, 0.0);
//         if (i == head - 1){
//             dir = mousePos - nodePos;
//         } else {
//             dir = nodes[i+1].pos - nodePos;
//         }

//         let dist = length(dir);
        
//         for (var j: u32 = 0u; j < arrayLength(&nodes); j++) {
//             if (j == i) {
//                 continue;
//             }

//             let offset = nodePos - nodes[j].pos;
//             let dist = length(offset);

//             var minDist = 0.1;

//             if (tail <= j && j < head) {
//                 minDist = 0.08;
//             }

//             if (dist > 0.000001 && dist < minDist) {
//                 let dir = normalize(offset);

//                 // stronger push when closer
//                 let strength = (minDist - dist) / minDist;

//                 nodes[i].pos += dir * strength * 0.01;
//             }
//         }

//         if (dist > 0.0001) {
//             let step = normalize(dir) * 0.005;
//             nodes[i].pos += step;
//         }
//     }
// }

// Big Bang
// @compute @workgroup_size(64, 1, 1)
// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
//     let tail = global_id.x * 10;
//     let head = tail + 10;

//     let mousePos = mouse.pos;
    
//     for (var i = tail; i < head; i++){

//         // safe bounds check
//         if (i >= arrayLength(&nodes)) {
//             return;
//         }

//         let nodePos = nodes[i].pos;

//         var dir: vec2f = vec2f(0.0, 0.0);
//         if (i == head - 1){
//             dir = mousePos - nodePos;
//         } else {
//             dir = nodes[i+1].pos - nodePos;
//         }

//         // normalize (avoid divide by zero)
//         let dist = length(dir);
//         if (dist > 0.0001) {
//             let step = normalize(dir) * 0.005;
//             nodes[i].pos += step;
//         }
//     }

//     for (var i = tail-tail; i < tail; i++){
//         // safe bounds check
//         if (i >= arrayLength(&nodes)) {
//             return;
//         }

//         let nodePos = nodes[i].pos;

//         var dir: vec2f = vec2f(0.0, 0.0);
//         if (i == head - 1){
//             dir = mousePos - nodePos;
//         } else {
//             dir = nodePos - nodes[i+1].pos;
//         }

//         // normalize (avoid divide by zero)
//         let dist = length(dir);

//         if (dist > 0.5){
//             return;
//         }

//         if (dist > 0.00001) {
//             let step = normalize(dir) * 0.01;
//             nodes[i].pos += step;
//         } 
//     }
// }


//Virus Snake
// @compute @workgroup_size(64, 1, 1)
// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
//     let tail = global_id.x * 10;
//     let head = tail + 10;

//     let mousePos = mouse.pos;
    
//     for (var i = tail; i < head; i++){

//         // safe bounds check
//         if (i >= arrayLength(&nodes)) {
//             return;
//         }

//         let nodePos = nodes[i].pos;

//         var dir: vec2f = vec2f(0.0, 0.0);
//         if (i == head - 1){
//             dir = mousePos - nodePos;
//         } else {
//             dir = nodes[i+1].pos - nodePos;
//         }

//         // normalize (avoid divide by zero)
//         let dist = length(dir);
//         if (dist > 0.0001) {
//             let step = normalize(dir) * 0.005;
//             nodes[i].pos += step;
//         }
//     }

//     for (var i = tail-tail; i < tail; i++){
//         // safe bounds check
//         if (i >= arrayLength(&nodes)) {
//             return;
//         }

//         let nodePos = nodes[i].pos;

//         var dir: vec2f = vec2f(0.0, 0.0);
//         if (i == head - 1){
//             dir = mousePos - nodePos;
//         } else {
//             dir = nodes[i+1].pos - nodePos;
//         }

//         // normalize (avoid divide by zero)
//         let dist = length(dir);
//         if (dist > 0.0001) { //increase to increase scatter effect
//             let step = normalize(dir) * 0.01;
//             nodes[i].pos += step;
//         } 
//     }
// }


//tentacle
// @compute @workgroup_size(64, 1, 1)
// fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
//     let tail = global_id.x;
//     let head = (global_id.x * 10) + 10;

//     // safe bounds check
//     if (head >= arrayLength(&nodes)) {
//         return;
//     }

//     let mousePos = mouse.pos;
    
//     for (var i = tail; i < head; i++){
//         let nodePos = nodes[i].pos;

//         // direction toward mouse
        
//         let dir = mousePos - nodePos;

//         // normalize (avoid divide by zero)
//         let dist = length(dir);
//         if (dist > 0.0001) {
//             let step = normalize(dir) * 0.001;
//             nodes[i].pos += step;
//         }
//     }
// }

    // var yForce = 0.0;
    // var xForce = 0.0;
    // if (global_id.x % 2 == 0){
    //     yForce = 0.05;
    // } else {
    //     yForce = -0.05;
    // }


    // nodes[global_id.x].pos.y += yForce;
    // nodes[global_id.x].pos.x += xForce;

    // if (nodes[global_id.x].pos.y >= 1){
    //     nodes[global_id.x].pos.y = -1;
    // } else if (nodes[global_id.x].pos.y <= -1){
    //     nodes[global_id.x].pos.y = 1;
    // }
    

