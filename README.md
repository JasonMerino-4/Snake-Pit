Hello this a basic snake sim build using WebGPU with two modes.  

**Pit Mode:** The snakes will attack eachother until one is left.  
**Follow Mode:** The snakes will follow your cursor.  

**Parameters:**  
Number of Snakes: Increases the number of snakes. This effects the chasing as they attack the closest node but only get eliminated when the head disappears.  
Length: Length of Snake.  

**Why Web GPU?**  
Rendering the snakes can be done and parallel and so can calculating their movement. Natively using the GPU to this isn't possible but WebGPU allows me to.
