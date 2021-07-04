const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function setup() {
  createCanvas(800,480);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(1,469,1200,10);
    divisions1 = new Division(4,237,10,240);
    divisions2 = new Division(85,237,10,240);
    divisions3 = new Division(165,237,10,240);
    divisions4 = new Division(245,237,10,240);
    divisions5 = new Division(325,237,10,240);
    divisions6 = new Division(405,237,10,240);
    divisions7 = new Division(485,237,10,240);

    divisions8 = new Division(565,237,10,240);
    divisions9 = new Division(485,237,10,240);
    divisions10 = new Division(645,237,10,240);
    divisions11= new Division(725,237,10,240);
    divisions12= new Division(790,237,10,240);

   plinko1= new Plinkos(40,28,15);
   plinko2= new Plinkos(90,28,15);
   plinko3= new Plinkos(140,28,15);
  plinko4= new Plinkos(190,28,15);
  plinko5= new Plinkos(240,28,15);
  plinko6= new Plinkos(290,28,15);
  plinko7= new Plinkos(340,28,15);
  plinko8= new Plinkos(390,28,15);
  plinko9= new Plinkos(440,28,15);
  plinko10= new Plinkos(490,28,15);
  plinko11= new Plinkos(540,28,15);
  plinko12= new Plinkos(590,28,15);
  plinko13= new Plinkos(640,28,15);
  plinko14= new Plinkos(690,28,15);
  plinko15= new Plinkos(740,28,15);
  
  plinko16= new Plinkos(24,75,15);
  plinko17= new Plinkos(74,75,15);
  plinko18= new Plinkos(124,75,15);
  plinko19= new Plinkos(174,75,15);
  plinko20= new Plinkos(224,75,15);
  plinko21= new Plinkos(274,75,15);
  plinko22= new Plinkos(324,75,15);
  plinko23= new Plinkos(374,75,15);
  plinko24= new Plinkos(424,75,15);
  plinko25= new Plinkos(474,75,15);
  plinko26= new Plinkos(524,75,15);
  plinko27= new Plinkos(574,75,15);
  plinko28= new Plinkos(624,75,15);
  plinko29= new Plinkos(674,75,15);
  plinko30= new Plinkos(724,75,15);
  plinko31= new Plinkos(774,75,15);

  plinko32= new Plinkos(40,122,15);
   plinko33= new Plinkos(90,122,15);
   plinko34= new Plinkos(140,122,15);
  plinko35= new Plinkos(190,122,15);
  plinko36= new Plinkos(240,122,15);
  plinko37= new Plinkos(290,122,15);
  plinko38= new Plinkos(340,122,15);
  plinko39= new Plinkos(390,122,15);
  plinko40= new Plinkos(440,122,15);
  plinko41= new Plinkos(490,122,15);
  plinko42= new Plinkos(540,122,15);
  plinko43= new Plinkos(590,122,15);
  plinko44= new Plinkos(640,122,15);
  plinko45= new Plinkos(690,122,15);
  plinko46= new Plinkos(740,122,15);

  plinko47= new Plinkos(18,157,15);
  plinko48= new Plinkos(74,157,15);
  plinko49= new Plinkos(124,157,15);
  plinko50= new Plinkos(174,157,15);
  plinko51= new Plinkos(224,157,15);
  plinko52= new Plinkos(274,157,15);
  plinko53= new Plinkos(324,157,15);
  plinko54= new Plinkos(374,157,15);
  plinko55= new Plinkos(424,157,15);
  plinko56= new Plinkos(474,157,15);
  plinko57= new Plinkos(524,157,15);
  plinko58= new Plinkos(574,157,15);
  plinko59= new Plinkos(624,157,15);
  plinko60= new Plinkos(674,157,15);
  plinko61= new Plinkos(724,157,15);
  plinko62= new Plinkos(774,157,15);

  
  particle3 = new Particles(150,200,15);
  particle4 = new Particles(200,200,15);
  particle5 = new Particles(250,200,15);
  particle6 = new Particles(300,200,15);
  particle7 = new Particles(350,200,15);
  particle8 = new Particles(400,200,15);
  particle9 = new Particles(450,200,15);
  particle10 = new Particles(500,200,15);
  particle11 = new Particles(550,200,15);
  particle12 = new Particles(600,200,15);
  particle13 = new Particles(650,200,15);

  particle14 = new Particles(56,48,15);
  particle15 = new Particles(206,83,15);
  particle16 = new Particles(299,92,15);
  particle17= new Particles(365,45,15);
  particle18= new Particles(605,95,15);
 

  //particle13 = new Particles(650,200,15);
 
}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,30,50);
  Engine.update(engine);
  // if(frameCount%60===0){
  //   particles.push(new Particles(random(width/2-10),10,10));
  //     }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10),10,10));
      }

ground.display();
  particle14.display();
  particle17.display();
  particle18.display();
  particle16.display();
  particle15.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  

divisions1.display();
divisions2.display();
divisions3.display();
divisions4.display();
divisions5.display();
divisions6.display();
divisions7.display();

divisions8.display();
divisions9.display();
divisions10.display();
divisions11.display();
divisions12.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();

plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();
plinko30.display();
plinko31.display();

plinko32.display();
plinko33.display();
plinko34.display();
plinko35.display();
plinko36.display();
plinko37.display();
plinko38.display();
plinko39.display();
plinko40.display();
plinko41.display();
plinko42.display();
plinko43.display();
plinko44.display();
plinko45.display();
plinko46.display();

plinko47.display();
plinko48.display();
plinko49.display();
plinko50.display();
plinko51.display();
plinko52.display();
plinko53.display();
plinko54.display();
plinko55.display();
plinko56.display();
plinko57.display();
plinko58.display();
plinko59.display();
plinko60.display();
plinko61.display();
plinko62.display();
  drawSprites();
}