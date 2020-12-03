
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ball1 = new Ball(240,600,70,70)
    ball2 = new Ball(310,600,70,70)
    ball3 = new Ball(380,600,70,70)
    ball4 = new Ball(450,600,70,70)
    ball5 = new Ball (520,600,70,70)
    //ball6 = new Ball(550,600,70,70)
    roof = new Roof (380,100,500,40)
    chain1 = new Chain (ball1.body,roof.body,-135,0)
    chain2 = new Chain (ball2.body,roof.body,-65,0) 
    chain3 = new Chain (ball3.body,roof.body,0,0)
    chain4 = new Chain (ball4.body,roof.body,65,0)
    chain5 = new Chain (ball5.body,roof.body,135,0)
    //chain6 = new Chain (ball6.body,roof.body)
    
  }


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  //ball6.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  //chain6.display();
  
} 

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-95})
  }
}
