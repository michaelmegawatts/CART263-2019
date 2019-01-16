"use strict";

/*****************

Circle Eater
Pippin Barr interpreted by Michael Watts

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

// Constants defining key quantities
const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 0;

// Avatar is an object defined by its properties
let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#cccc55'
}

// Constants defining key quantities
const FOOD_MAX_SPEED = 20;

// Food is an object defined by its properties
let food = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 64,
  color: '#55cccc',
  maxSpeed: 64,
  tx:0,
  ty:0
}

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, position the food, remove the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  positionFood();
  noCursor();
}


// draw()
//
// Move the avatar, check for collisions, display avatar and food

function draw() {
  // Make sure the avatar is still alive - if not, we don't run
  // the rest of the draw loop
  if (!avatar.active) {
    // By using "return" the draw() function exits immediately
    return;
  }

  // Otherwise we handle the game
  background(0);
  updateAvatar();
  updateFood();
  checkCollision();
  displayAvatar();
  displayFood();

}

// updateAvatar()
//
// Set the position to the mouse location
// Shrink the avatar
// Set it to inactive if it reaches a size of zero
function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  // Shrink the avatar and use constrain() to keep it to reasonable bounds
  avatar.size = constrain(avatar.size - AVATAR_SIZE_LOSS,0,avatar.maxSize);
  if (avatar.size === 0) {
    avatar.active = false;
  }
}

// checkCollision()
//
// Calculate distance of avatar to food
// Check if the distance is small enough to be an overlap of the two circles
// If so, grow the avatar and reposition the food
function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + AVATAR_SIZE_GAIN,0,avatar.maxSize);
    positionFood();
  }
}

// displayAvatar()
//
// Draw the avatar in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

// Update Food
//
// update food position randomly to stay on screen
function updateFood(){
  food.x += food.vx;
  food.y += food.vy;

  // Constrain y position to be on screen
  food.x = constrain(food.x,food.size,windowWidth-food.size);
  food.y = constrain(food.y,food.size,windowHeight-food.size);
}

// displayFood()
//
// Draw the food in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  pop();
}

// positionFood()
//
// Set the food's position properties to random numbers within the canvas dimensions
function positionFood() {
  food.x = random(0,windowWidth);
  food.y = random(0,windowHeight);
}

// Set the food's speed with a random quality based on the speed
function foodSpeed(){
  food.vx = map(noise(food.tx),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
  food.vy = map(noise(food.ty),0,1,-FOOD_MAX_SPEED,FOOD_MAX_SPEED);
  food.tx+=0.1;
  food.ty+=0.5;
  console.log(food.vx);
}

setInterval(foodSpeed, 500);
