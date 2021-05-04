var gardenImg, garden;
var tom, tomImg, tomImg2, tomImg3, tomImg4;
var jerry, jerryImg, jerryImg2, jerryImg3,jerryImg4;
function preload() {
    //load the images here
    //gardenImg = loadAnimation("garden.png");
    //tomImg = loadAnimation("cat1.png");
    //tomImg2 = loadAnimation("cat2.png","cat3.png");
    //tomImg3 = loadAnimation("cat4.png");
    //jerryImg = loadImage("mouse1.png");
    //jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
    //jerryImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,990,790);
    garden.shapeColor = "green";
    //garden.addAnimation("garden",gardenImg);

    //create tom and jerry sprites here
    tom = createSprite(600,500,50,50);
    //tom.shapeColor = rbg(158, 158, 158);
    //tom.addAnimation("tom",tomImg);

    jerry = createSprite(400,500,50,50);
    jerry.shapeColor = rgb(110, 59, 20);
    //jerry.addAnimation("jerry",jerryImg);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    stroke("red");
    fill("red");
    textSize(30);
    textAlign(CENTER);
    text("If I tried adding images to the sprites the 200 Ok would not load",500,200);
    text("I have written the code for the animations but I have commented them",500,250);
    text("because I wasn't able to run the code with them there",500,300);
    keyPressed();

    if (tom.x - jerry.x < jerry.width/2 + tom.width/2 
        && jerry.x - tom.x < jerry.width/2 + tom.width/2
        && tom.y - jerry.y < jerry.height/2 + tom.height/2 
        && jerry.y - tom.y < jerry.height/2 + tom.height/2){
            //jerry.changeAnimation("jerry",jerryImg3);
            tom.velocityX = 0;
        }
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    //tom.changeAnimation(tTmImg2);
    tom.velocityX = -2;
} else {
    //tom.changeAnimation(tomImg);
    tom.velocityX = 0;
}

}
