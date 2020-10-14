var back;
var back2;
var shirt;
function preload(){
  back = loadImage("back.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight-111);
  back2 = createSprite(683,377,300,646);
  back2.shapeColor = "black";

  createSprite(683,516,300,15);
  createSprite(683,362,300,15);
  createSprite(683,208,300,15);

  createSprite(533,373,15,646);
  createSprite(833,373,15,646);
  createSprite(683,54,300,15);
  shirt = createSprite(500,500,100,100);
  
}

function draw() {
  background(back);
  text(mouseX+","+mouseY,mouseX,mouseY);
  

  line(50,displayHeight-162,533,displayHeight-162);
  line(50,462,533,462);
  line(50,308,533,308);
  line(50,158,533,158);

  line(833,displayHeight-162,displayWidth-50,displayHeight-162);
  line(833,462,displayWidth-50,462);
  line(833,308,displayWidth-50,308);
  line(833,158,displayWidth-50,158);

  line(533,516,833,516);
  line(533,362,833,362);
  line(533,208,833,208);
  
  strokeWeight(15);
  line(533,54,833,54);
  line(533,54,533,700);
  line(833,54,833,700);
  
  drawSprites();
  
}