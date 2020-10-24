const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world
var ball_options = {
  restitution: 0.9
}
var ground_options = {
  isStatic: true
}
ball = Bodies.circle (500,250,20,ball_options)
World.add (world,ball)
ground = Bodies.rectangle (600,380,800,10,ground_options)
World.add (world,ground)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  rectMode (CENTER)
  rect(ground.position.x, ground.position.y,800,10)
  ellipseMode (RADIUS) 
  ellipse(ball.position.x, ball.position.y,20,20)
  drawSprites();
}