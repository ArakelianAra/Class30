//NAME SPACING
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground
var rope
let engine;
let world;
var fruit
var fruitcon
var backgroundImg
var rabbitImg
var melonImg
var bunny
var button
function preload(){
  backgroundImg = loadImage('background.png');
  melonImg=loadImage("melon.png")
  rabbit = loadImage('Rabbit-01.png');
}


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
button=createImg("cut_btn.png")
button.position(190,30)
button.size(50,50)
button.mouseClicked(drop)
  ground=new Ground(200,690,600,20)
 rope=new Rope(6,{x:200,y:30})
 fruit = Bodies.circle(200,300,20)
 Composite.add(rope.body, fruit);
 fruitcon=new Link(rope,fruit)
bunny=createSprite(250,650)
bunny.addImage(rabbit)
 bunny.scale=0.2
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height)

  Engine.update(engine);
   ground.display()
   rope.show()
   image(melonImg,fruit.position.x,fruit.position.y,65,65)
   drawSprites()
}

function drop(){
  rope.break()
  fruitcon.detach()
}



