var canvas;
var music;
var block1,block2,block3,block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
block1 = createSprite(100,780,200,20);
block1.shapeColor=("red");
block2 = createSprite(300,780,200,20);
block2.shapeColor=("green");
block3 = createSprite(500,780,200,20);
block3.shapeColor=("pink");
block4 = createSprite(700,780,200,20);
block4.shapeColor=("blue");
    //create box sprite and give velocity
box=createSprite(random(20,750),250,50,50);
box.shapeColor=("white");

box.velocityY=3;

}

function draw() {
    background("yellow");
    //create edgeSprite
    box.y=mouseY;
box.x=mouseX

    
    //add condition to check if box touching surface and make it box

if (box.isTouching(block1) && box.bounceOff(block1)){
    box.shapeColor=("red");
}
else if (box.isTouching(block2)&& box.bounceOff(block2)){
    box.shapeColor=("green");
}
else if (box.isTouching(block3) && box.bounceOff(block3)){
    box.shapeColor=("pink");
}
else if (box.isTouching(block4) && box.bounceOff(block4)){
    box.shapeColor=("blue");
}
else box.shapeColor = ("white")


    drawSprites();
}
