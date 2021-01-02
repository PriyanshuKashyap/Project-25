
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, ground, paper;
//var count;
//var paperSprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	paper = new Paper();
	dustbin = new Dustbin();

	//paperSprite = createSprite(paper.body.position.x, paper.body.position.y, 50, 50);
	//count = 0;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display();

  /*paperSprite.x = paper.body.position.x;
  paperSprite.y = paper.body.position.y;*/
  
  if (keyCode === UP_ARROW) {
	  //count++;
	  Body.applyForce(paper.body, paper.body.position, {x: 130, y: -145});//Applying force until the ball is in the middle of the canvas
	  
	  /*if (count === 25) {
		  Body.applyForce(paper.body, paper.body.position, {x: 2, y: 6});//Applying force to throw the ball to the dustbin
	  }*/
	  
	  
	  
  }
  /*console.log(count);
  console.log(count === 25);*/
  drawSprites();
 
}
//By Priyanshu
//The down arrow key somehow executes an event.
//This project will look good.
