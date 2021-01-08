var PLAY;
var END;
var gameState=PLAY;
var ball;
var redWall,blueWall,greenWall,yellowWall;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(800,600);
  ball=createSprite(400,50,30,30);
  ball.shapeColor="white";
  ball.velocityX=Math.round(random(5,25));
  ball.velocityY=Math.round(random(5,25));

  
    //create 4 different surfaces

    redWall=createSprite(100,570,170,30);
    redWall.shapeColor="red";

    blueWall=createSprite(300,570,170,30);
    blueWall.shapeColor="blue";

    greenWall=createSprite(500,570,170,30);
    greenWall.shapeColor="green";

    yellowWall=createSprite(700,570,170,30);
    yellowWall.shapeColor="yellow";
    //create box sprite and give velocity

}



function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

  
  
    
    if(redWall.isTouching(ball) && ball.bounceOff(redWall)){
      ball.shapeColor="red";
      ball.velocityY=0;
      ball.velocityX=0;
    }

    if(blueWall.isTouching(ball) && ball.bounceOff(blueWall)){
      ball.shapeColor="blue";
      ball.velocityY=0;
      ball.velocityX=0;
    }

    if(greenWall.isTouching(ball) && ball.bounceOff(greenWall)){
      ball.shapeColor="green";
      ball.velocityY=0;
      ball.velocityX=0;
    }

    if(yellowWall.isTouching(ball) && ball.bounceOff(yellowWall)){
      ball.shapeColor="Yellow";
      ball.velocityY=0;
      ball.velocityX=0;
    }
   
    drawSprites();
}
 