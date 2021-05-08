const Engine=Matter.Engine
const Bodies=Matter.Bodies 
const World=Matter.World
var snowImg;
var drac;
var edges;
var snow=[]
var maxsnow

function preload (){
  snowImg = loadImage("snow2.jpg");
  dracImg = loadImage("drac.webp");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  drac = createSprite(200, 300, 50, 50);
  drac.addImage(dracImg);
  drac.scale=0.2;
  edges = createEdgeSprites()
  Engine.run(engine)
  if(frameCount%60 === 0){
    for (var p=0;p<maxsnow;p++){
      snow.push(new Snow(random(0,800),random(0,400)))
    }
  }
}

function draw() {
  background(snowImg); 
  if(keyDown("down")){
   drac.velocityY = -5;
  } 
  drac.velocityY = drac.velocityY+0.8;
  drac.collide(edges);
  
  drawSprites();

}