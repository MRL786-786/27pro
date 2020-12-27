
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new Paper(300,350,50);
bob2=new Paper(350,350,50);
bob3=new Paper(400,350,50);
bob4=new Paper(450,350,50);
bob5=new Paper(500,350,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
}



