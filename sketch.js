
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var dustbin,dustbin2,dustbin3;
var ground;
var dustbin4;




function setup() {
		createCanvas(800, 700);

		var options = {
			isStatic : true,
		}


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		ball = new Paper(100,200,50,50);
		

		var options = {
			isStatic : true,
		}
   

		
		fill("green");
		ground = Bodies.rectangle(400,600,800,20,options);

		dustbin = Bodies.rectangle(600,580,150,20,{isStatic : true});
		World.add(world,dustbin);

		dustbin2 = Bodies.rectangle(515,500,20,170,{isStatic : true});
		World.add(world,dustbin2);

		dustbin3 = Bodies.rectangle(685,500,20,170,{isStatic : true});
		World.add(world,dustbin3);

		dustbin4 = new Dustbin(600,490,149,150);
		
		
		World.add(world,ground);

		Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  rect(ground.position.x,ground.position.y,800,20);
 


 fill("white");
 rect(dustbin.position.x,dustbin.position.y,150,20);

 rect(dustbin2.position.x,dustbin2.position.y,20,170);

 rect(dustbin3.position.x,dustbin3.position.y,20,170);



 ball.display();
 dustbin4.display();
 

 keyPressed();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-10});
	}
}

