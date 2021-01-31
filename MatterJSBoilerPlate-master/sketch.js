
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,rubber,ground,stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rubber =  new Rubber(100,150,50,50);
	ground = new Ground(400,680,800,50)
	stone = new Stone(330,150,80,80)
	hammer = new Hammer(mouseX,mouseY,200,50);
	
	
	Engine.run(engine);
	

}


function draw() {
 
 
	
	rectMode(CENTER);
  background("blue");
 rubber.display();
 ground.display();
 stone.display();
 hammer.display();
 drawSprites();

}

