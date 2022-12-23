var bg,bgImg;
var catw, catwalking2
var pizza
var invisibleGround

function preload(){
  
  pisoo = loadImage("assets/Piso.png")
  catw = loadAnimation("assets/Cat2.png")
  catwalking2 = loadAnimation("assets/Cat1.png","assets/Cat2.png")
  bgImg = loadImage("assets/cloud2.png")
  pizza = loadImage("assets/pizza.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image

  bg = createSprite(displayWidth/2,displayHeight/3)
bg.addImage(bgImg)
bg.scale = 1.45

cat1 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 cat1.addAnimation("para", catw)
   cat1.scale = 0.3
   cat1.debug = true
   cat1.setCollider("rectangle",0,0,300,300) 
   cat1.addAnimation("corre", catwalking2)

   invisibleGround = createSprite(700, 700, 1500, 100);
  invisibleGround.visible = false;
}

function draw() {
  background(0); 

 

  if(keyDown("UP_ARROW") && cat1.y >= 159) {
    cat1.velocityY = -12;
  }

  cat1.velocityY = cat1.velocityY + 0.8

  cat1.collide(invisibleGround);


  //moving the player up and down and making the game mobile compatible using touches

if(keyDown("LEFT_ARROW")){
  cat1.changeAnimation("corre")
  cat1.x = cat1.x-15
}

if(keyDown("RIGHT_ARROW")){
  cat1.changeAnimation("corre")
  cat1.x = cat1.x+15
}

//release bullets and change the image of shooter to shooting position when space is pressed
/*if(keyWentDown("space")){
 
  cat1.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  cat.addImage(catw)
} */

Piso();

drawSprites();
}

function Piso(){
  if (frameCount % 19  === 0) {
   var piso = createSprite(displayWidth/2 , 760, 30, 100)
    piso.addImage(pisoo)
   piso.velocityX = -10

    piso.depth = cat1.depth;
cat1.depth = piso.depth + 1;

console.log(piso.x)
}
}