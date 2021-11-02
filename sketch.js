const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wallPaper,wallpaperImage;
var snow1,snow2;

function preload(){
wallpaperImage = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(700,400);
 
engine = Engine.create();
world = engine.world;
  wallpaper = createSprite(350,200);
  wallpaper.addImage(wallpaperImage);
  wallpaper.scale = 0.7;

  snow1 = new snowy(100,20);
  snow2 = new snowy(200,30);
}

function draw() {
  background("white");  
Engine.update(engine);
  snow1.display();
  snow2.display();

  drawSprites();
}