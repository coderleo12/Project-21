
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20);
	left = new Ground(800,600,20,120);
	right = new Ground(1000,600,20,120);


	rectMode(CENTER);
  	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  left.display();
  right.display();
	
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:-70});
	}
}



