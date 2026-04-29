struct Node {
    pos: vec2f,
    hit: vec2f,
    color: vec4f,
};

@group(0) @binding(0) var<storage, read> nodes: array<Node>;

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) color: vec4f,
    @location(1) @interpolate(flat) center: vec2f,
    @location(2) world_position: vec2f
};

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32, 
                @builtin(instance_index) instanceIndex: u32) -> VertexOutput {
    
    var output: VertexOutput;
    const radius: f32 = 0.008;

    var positions: array<vec2f, 6> = array<vec2f, 6>(
        vec2f(-radius, -radius), 
        vec2f(-radius, radius), 
        vec2f(radius, radius),
        vec2f(radius, radius), 
        vec2f(radius, -radius), 
        vec2f(-radius, -radius)
    );

    let worldPos = positions[vertexIndex] + nodes[instanceIndex].pos;
    output.position = vec4f(worldPos, 0.0, 1.0);
    output.color = nodes[instanceIndex].color;
    output.center = nodes[instanceIndex].pos;
    output.world_position = worldPos;
    return output;
}

@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
    if (distance(input.world_position, input.center) > 0.008) {
        discard;
    }
    
    return input.color;
}