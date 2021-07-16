
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  
  if(keyIsDown(RIGHT_ARROW))
  {
    background("red")
  }
  
  if(keyIsDown(LEFT_ARROW))
  {
    background("BLUE")
  }
  if(keyIsDown(UP_ARROW))
  {
    background("YELLOW")
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background("GREEN")
  } 
}




