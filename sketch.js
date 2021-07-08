const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var piso;
var caja1;
var caja2;
var caja3;
var caja4;
var caja5;
var caja6;
var caja7;
var bola;
var cuerda;

function preload() {

}

function setup(){
 createCanvas(3000,800); 
 engine = Engine.create();
 world = engine.world;
 piso = new Piso(600,400,800,20);
 caja1 = new Caja(600,360,60,60);
 caja2 = new Caja(660,360,60,60);
 caja3 = new Caja(630,300,60,60);
 caja4 = new Caja(630,240,60,60);
 caja5 = new Caja(630,180,60,60);
 caja6 = new Caja(720,360,60,60);
 caja7 = new Caja(690,300,60,60)
 bola = new Bola(200,200,80,80);
 cuerda = new Cuerda(bola.body,{x:500,y:0});
}

function draw(){
    background("gray");
    Engine.update(engine);
    piso.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    caja5.display();
    caja6.display();
    caja7.display();
    bola.display();
    cuerda.display();
}


function mouseDragged(){
    
      
    
    Matter.Body.setPosition(bola.body,{
      x:mouseX,y:mouseY
     
    })
    
  }
