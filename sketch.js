var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 400, 50, 300);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(200,300,40,50);
  gameObj1.shapeColor = "yellow";
  gameObj1. velocityX = 7;

  gameObj2 = createSprite(200,400,40,50);
  gameObj2.shapeColor = "yellow";
  gameObj2.velocityX = 5;

  gameObj3 = createSprite(200,100,40,100);
  gameObj3.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect, gameObj3)){
  movingRect.shapeColor = "red";
  gameObj3.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameObj3.shapeColor = "green";
}

bounceOff(gameObj2,fixedRect);
bounceOff(gameObj1,fixedRect);

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
 
      return true;
}
else {
  return false;
}
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2){
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
  else if ( object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {

      object1.velocityY = object1.velocityY*(-1);
      object2.velocityY = object2.velocityY*(-1);
    }
}