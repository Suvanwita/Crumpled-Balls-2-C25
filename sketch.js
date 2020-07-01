
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var paper,ground,Dustbin;


function setup() {
	var canvas = createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
	
	//create the paper
	paper=new Paper(50,50,40,40);
	
	//Create a Ground
	ground = new Ground(750,540,1500,20);
	 
	//Dustbin=new DustbinWall(1300,450,60,100);
	body1=new Support(1250,515,10,20);
    body2=new Support(1350,515,10,20);
    body3=new Support(1300,525,100,10);

	
  }

function draw() {
   background(240);
   Engine.update(engine);
   ground.display();
   
   paper.display();
   body1.display();
   body2.display();
   body3.display();
  
  // Dustbin.display();
    
   
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-60});
}
}

