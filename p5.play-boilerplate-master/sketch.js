var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 20, 20);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 20, 20);
  movingRect.shapeColor = "brown";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  }

  else {
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  drawSprites();
}