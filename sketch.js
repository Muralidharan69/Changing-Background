
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  
  
  if(mouseX >= 800){
    background("green");
  }
  // change the value of Red based on the mouse movement about the X axis
  if(mouseX > 400 && mouseX < 800){
    background("red");
  }
  // change the value of Green based on the mouse movement about the X axis
  if(mouseX <= 400){
    background("blue");
  }
  circle(mouseX,100,70);
  fill("white");
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}