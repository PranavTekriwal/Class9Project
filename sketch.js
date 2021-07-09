
var Player

function setup() {
  createCanvas(400,400);
  Player = createSprite(200,200,20,20);
}

function draw() 
{
  
  background(30);
  
  if (keyIsDown(UP_ARROW)) {

    background('red');
    Player.y = Player.y - 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {

    background('yellow');
    Player.x = Player.x + 4;
  }

  if (keyIsDown(DOWN_ARROW)) {

    background('green');
    Player.y = Player.y + 4;
  }

  if (keyIsDown(LEFT_ARROW)) {

    background('blue');
    Player.x = Player.x - 4;
  }

  drawSprites();

}




