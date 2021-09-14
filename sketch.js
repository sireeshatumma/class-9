
// is touching property
// how to detect touching
// horizontal  --- xPosition, width and velocityX
//vertical -- yPosition, height and velocityY
var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 50, 100);
  movingRect=createSprite(100, 200, 100, 50);


  rect1= createSprite(100,100, 50, 100);

  rect2= createSprite(500,100, 50, 100);

}

function draw() {
  background(0,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  // the diff between x positions = half of sum of widths

if(touching(fixedRect,movingRect)){
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  fixedRect.velocityX=1;
}else if(touching(rect1,movingRect)){
  rect1.shapeColor="green";
  movingRect.shapeColor="green";
}
else if(touching(rect2,movingRect)){
  rect2.shapeColor="pink";
  movingRect.shapeColor="pink";
}else {
  rect1.shapeColor="red";
  rect2.shapeColor="red";
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}


  

  

  
  drawSprites();
}


function touching(object1,object2){

  if(object1.x-object2.x < object2.width/2+object1.width/2
    && object2.x-object1.x < object2.width/2+object1.width/2
    && object2.y-object1.y < object2.height/2+object1.height/2
    && object1.y -object2.y < object2.height/2+object1.height/2
    ){
    // object1.shapeColor="blue";
    // object2.shapeColor="blue";

    return true;
  }else{
    // object1.shapeColor="red";
    // object2.shapeColor="red";

    return false;
  }
}