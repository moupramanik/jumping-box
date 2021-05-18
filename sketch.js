var canvas;
var music;
var surface1,surface2,surface3,surface4;
var movingbox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(0,580,360,30);
surface1.shapeColor="red";
surface2=createSprite(295,580,200,30);
surface2.shapeColor="green";
surface3=createSprite(515,580,200,30);
surface3.shapeColor="blue";
surface4=createSprite(740,580,200,30);
surface4.shapeColor="yellow";

    //create box sprite and give velocity
movingbox=createSprite(random(20,750),100,40,40);
movingbox.shapeColor="white";
movingbox.velocityX=3;
movingbox.velocityY=8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingbox.bounceOff(edges);
 
    //add condition to check if box touching surface and make it box
if(movingbox.isTouching(surface1) && movingbox.bounceOff(surface1)){
    movingbox.shapeColor="red";
    music.play();
}

if(movingbox.isTouching(surface2) && movingbox.bounceOff(surface2)){
    movingbox.shapeColor="green";
    music.stop();
    movingbox.velocityX=0;
    movingbox.velocityY=0;
}
if(movingbox.isTouching(surface3) && movingbox.bounceOff(surface3)){
    movingbox.shapeColor="blue";
    music.play();
}
    if(movingbox.isTouching(surface4) && movingbox.bounceOff(surface4)){
        movingbox.shapeColor="yellow";
        music.play();
    }    
    
    





drawSprites();
}
