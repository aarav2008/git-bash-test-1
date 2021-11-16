var box
function setup() {
  createCanvas(400,400);
   box= createSprite(200,200,30,30)
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
    background("blue")
  }
  if (keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5
    background("yellow")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("red")
    box.position.y=box.position.y+5  
  }
  if(keyIsDown(UP_ARROW)){
    background("green")
    box.position.y=box.position.y-5
  }
  
  drawSprites()
}




