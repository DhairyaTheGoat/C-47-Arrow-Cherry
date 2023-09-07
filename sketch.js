var jim,jimImg
var ground
var obstacles,obstacleImg
var platform
var score = 0
var obstacleGroup
function preload(){
obstaclesImg = loadImage("Obstacles.png")
jimImg = loadImage("Stickman.png")
}

function setup(){
createCanvas(600,500)
jim = createSprite(140,200,80,80)
jim.addImage("Useless",jimImg)
jim.scale = 0.5
ground = createSprite(300,490,700,10)
platform = createSprite(150,250,70,10)
platform.shapeColor = 'red'
obstacleGroup = new Group()
}

function draw(){
background("gray")
fill(0);
textSize(32);
text("Score: " + score, 10, 30);

if(obstacleGroup.x<=10){
    score = score + 1
}

spawnObstacles()

if(keyDown("UP_ARROW")){
platform.y = platform.y + 3 
jim.y = jim.y + 3 
}

if(keyDown("DOWN_ARROW")){
platform.y = platform.y - 3
jim.y = jim.y - 3
}
jim.collide(platform)

drawSprites()
}

function spawnObstacles(){
if(frameCount%80===0){
obstacles = createSprite(600,random(0,500),30,50)
obstacles.addImage("obstacle",obstaclesImg)
obstacles.scale = 0.2
obstacles.velocityX = -2;
obstacleGroup.add(obstacles)
obstacles.lifetime = 300
}
}