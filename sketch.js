const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowImg, snowFlake,snowFlake2,snowFlake3,snowFlake4,snowFlake5;
var bg;


function preload() {
 backgroundImg=loadImage("snow3.jpg")   
 
  
}

function setup() {
  var canvas = createCanvas(1400,1200);
  //snowFlake= new Snow(200,400,50)
  
  engine = Engine.create();
    world = engine.world;
    snow1= new Snow(120,200,10)
    snow2= new Snow(240,200,50)
    snow3= new Snow(200,300,50)
    snow4= new Snow(200,400,50)
    snow5= new Snow(200,400,50)
    

}

function draw() {
 
  if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine); 
    snow1.display();
    snow2.display();

    snow3.display();


    snow4.display();

    snow5.display();


}
