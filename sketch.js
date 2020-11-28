var bullet,wall; 
var speed,weight,thickness; 


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("gray");  
  drawSprites();

  bullet.velocityX = speed;

  /*
  if (wall.x-bullet.x < (bullet.width+wall.width)) {
      bullet.velocityX = 0;
      var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (deformation < 10) {
      wall.shapeColor = color(0,255,0);
    }
    if (deformation > 10) {
      wall.shapeColor = color(255,0,0);
    }
  }
}
*/

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (deformation < 10) {
      wall.shapeColor = color(0,255,0);
    } 
    if (deformation > 10) {
      wall.shapeColor = color(255,0,0);
    }
  }
}

function hasCollided(ibullet,iwall) {
  bulletRightEdge=ibullet.x+ibullet.width;
  wallLeftEdge=iwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}
