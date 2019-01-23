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
    this.vx = random(this.maxSpeed);
    this.vy = random(this.maxSpeed);
    this.tx = random(0,25);
    this.ty = random(0,15);
  }

  // update food position randomly to stay on screen
  update(){
      // console.log(frameCount);
    this.x += this.vx;
    this.y += this.vy;

    // Constrain food to be on screen, changes the food's velocity randomly
    // using frameCount and based on its speed
    // this.x = constrain(this.x,this.size,windowWidth-this.size);
    // this.y = constrain(this.y,this.size,windowHeight-this.size);
    if (this.x < this.size || this.x > windowWidth-this.size) {
      this.vx = this.vx *-1;
    }

    if (this.y < this.size || this.y > windowHeight-this.size) {
      this.vy = this.vy *-1;
    }

    if(frameCount%200 == 0){
      this.vx = map(noise(this.tx),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
      this.vy = map(noise(this.ty),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
      this.tx+=0.1;
      this.ty+=0.07;
      console.log(this.tx);
    }
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  // Set the velocity to random velocity
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.vx = random(this.vx);
    this.vy = random(this.vy);
    this.size = random(this.minSize,this.maxSize);
  }

}
