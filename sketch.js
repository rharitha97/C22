const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);
  Engine.update(engine);
  
}