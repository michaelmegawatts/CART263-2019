// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,minSize,maxSize,maxSpeed) {
    super(x,y,random(minSize,maxSize),'#55cccc');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
    this.vx = random(maxSpeed);
    this.vy = random(maxSpeed);
    this.tx = 0;
    this.ty = 0;
  }

  updateFoodPosition(){
    this.vx = constrain(this.x,this.size,windowWidth-this.size);
    this.vy = constrain(this.y,this.size,windowHeight-this.size);
  }

  updateFoodSpeed(){
    this.vx = map(noise(this.tx),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
    this.vy = map(noise(this.ty),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
    this.tx+=0.1;
    this.ty+=0.5;
    console.log(this.tx);
}

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }
}
