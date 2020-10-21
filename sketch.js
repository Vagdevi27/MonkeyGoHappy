
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var stime = 0;
var bananaGroup;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,500,30,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(300,560,600,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.scale  = 2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
   background("lightgreen")
   drawSprites();
   textSize(20);
   text("Survival Time: " + stime,10,50);
   stime = stime+ Math.round(getFrameRate()/30);
  
   textSize(20);
   text("Score: " + score,500,50);

  if(ground.x <0)
  {
    ground.x = ground.width/2;
  }

  if(keyDown("space")){
    monkey.velocityY = -10;
  }
   // gravity
   monkey.velocityY = monkey.velocityY + 0.5;

   monkey.collide(ground);
  
   bananas();
   obstacles();
}



function bananas(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,50,30,30);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(320,450));
    banana.scale = 0.2;
    banana.velocityX = -8;
    banana.lifetime =100;
    bananaGroup.add(banana);
  }
  
}


function obstacles(){
   if(frameCount % 300 === 0){
    obstacle = createSprite(600,500,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    obstacle.lifetime =100;
    obstacleGroup.add(obstacle);
  }
  
  
}
