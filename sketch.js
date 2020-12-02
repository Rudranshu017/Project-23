
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var paper1;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = createSprite(780,600,20,150);
	dustbin2 = createSprite(580,600,20,150);
	dustbin3 = createSprite(680,670,210,20);


  
 
	Engine.run(engine);
  
}
function draw() {
	background(0);
  ellipseMode(CENTER);
 

  drawSprites();
 
}



