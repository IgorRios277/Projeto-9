var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(250,200,10,15);
  
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 2;
    box.shapeColor = 'blue';
    background('green');
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 2;
    box.shapeColor = 'white';
    background('cyan');
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 2;
    box.shapeColor = 'green';
    background('red');
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 2;
    box.shapeColor = 'purple';
    background('orange');
  }
 

  drawSprites();

}




