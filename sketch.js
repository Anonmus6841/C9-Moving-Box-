
// declare all variables here
var box;



//all the images are to be loaded in here before using in the code
function preload(){
//picture1 = loadImage("assets/img.jpg")
//picture2 = loadImage("assets/img2.jpg")

}

//create sprites 
function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,50,50)
  box.shapeColor="yellow"

}

function draw() 
{
  background(30);

  if(keyDown("right")){
    box.x = box.x+5;
  }
  if(keyDown("left")){
    box.x = box.x-5
  }
  if(keyDown("up")){
    box.y = box.y-5
  }
  if(keyDown("down")){
    box.y = box.y+5
  }
  if(keyDown("space")){
    box.shapeColor="blue"
  }

  drawSprites()
}













