const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var balls = [];

persoX = 100;
persoY = 300;

function preload() {
  backgroundImg = loadImage("./img/room.png");
    perso = loadImage("./img/ava.png");
  }
  function setup() {
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    person = new Perso(100, 300, 150, 200);
  }

  function draw() {
    background(backgroundImg, 0, 0, width, height);
  person.display();
  
    Engine.update(engine);
  
  }
  function keyReleased() {
    if (keyCode === DOWN_ARROW) { 
      shoot();
    }
    
    
  }
  function shoot(){
    person = new Perso(400,300, 150, 200);
  }
  
