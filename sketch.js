
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  
  roof = new Ground(400, 160, 400,20);

  bob1 = new Bob(400,450,30);
  chain1=new Slingshot(bob1.body,roof.body, 0, 0);

  bob2=new Bob(340,450,30);
  chain2=new Slingshot(bob2.body,roof.body,-60,0);

  bob3=new Bob(280,450,30);
  chain3=new Slingshot(bob3.body,roof.body,-120,0);

  bob4=new Bob(460,450,30);
  chain4=new Slingshot(bob4.body,roof.body,60,0);

  bob5=new Bob(520,450,30);
  chain5=new Slingshot(bob5.body,roof.body,120,0);
  //Engine.run(engine);
}


function draw() {

  Engine.update(engine);
  background("green");

  roof.display();
  chain1.display();
  bob1.display();

 chain2.display();
  bob2.display();
 
  chain3.display();
  bob3.display();

  chain4.display();
  bob4.display();

  chain5.display();
  bob5.display();
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
      Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-20,y:20});
  }
}