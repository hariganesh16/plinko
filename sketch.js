const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bodies, world
var ball = [];
function setup(){
    var canvas = createCanvas(1400,620);
    engine = Engine.create();
    world = engine.world;

division = new Division(200,438,10,300);
division1 = new Division(1,438,10,300);
division2 = new Division(400,438,10,300);
division3 = new Division(600,438,10,300);
division4 = new Division(800,438,10,300);
division5 = new Division(1000,438,10,300);
division6 = new Division(1200,438,10,300);
division7 = new Division(1365,438,10,300);

ground = new Ground(670,600,1400,20);

//plinko group1(top);
plinko = new Plinko(10,35,15,15);
plinko1 = new Plinko(70,35,15,15);
plinko2 = new Plinko(130,35,15,15);
plinko3 = new Plinko(190,35,15,15);
plinko4 = new Plinko(250,35,15,15);
plinko5 = new Plinko(310,35,15,15);
plinko6 = new Plinko(370,35,15,15);
plinko7 = new Plinko(430,35,15,15);
plinko8 = new Plinko(490,35,15,15);
plinko9 = new Plinko(550,35,15,15);
plinko10 = new Plinko(610,35,15,15);
plinko11 = new Plinko(670,35,15,15);
plinko12 = new Plinko(730,35,15,15);
plinko13 = new Plinko(790,35,15,15);
plinko14 = new Plinko(850,35,15,15);
plinko15 = new Plinko(910,35,15,15);
plinko16 = new Plinko(970,35,15,15);
plinko17 = new Plinko(1030,35,15,15);
plinko18 = new Plinko(1090,35,15,15);
plinko19 = new Plinko(1150,35,15,15);
plinko20 = new Plinko(1210,35,15,15);
plinko21 = new Plinko(1270,35,15,15);
plinko22 = new Plinko(1330,35,15,15);
plinko23 = new Plinko(1390,35,15,15);
plinko24 = new Plinko(1450,35,15,15);
plinko25 = new Plinko(1510,35,15,15);

//plinko group2(midddle);
plinko26 = new Plinko(40,100,15,15);
plinko27 = new Plinko(100,100,15,15);
plinko28 = new Plinko(160,100,15,15);
plinko29 = new Plinko(220,100,15,15);
plinko30 = new Plinko(280,100,15,15);
plinko31 = new Plinko(340,100,15,15);
plinko32 = new Plinko(400,100,15,15);
plinko33 = new Plinko(460,100,15,15);
plinko34 = new Plinko(520,100,15,15);
plinko35 = new Plinko(580,100,15,15);
plinko36 = new Plinko(640,100,15,15);
plinko37 = new Plinko(700,100,15,15);
plinko38 = new Plinko(760,100,15,15);
plinko39 = new Plinko(820,100,15,15);
plinko40 = new Plinko(880,100,15,15);
plinko41 = new Plinko(940,100,15,15);
plinko42 = new Plinko(1000,100,15,15);
plinko43 = new Plinko(1060,100,15,15);
plinko44 = new Plinko(1120,100,15,15);
plinko45 = new Plinko(1180,100,15,15);
plinko46 = new Plinko(1240,100,15,15);
plinko47 = new Plinko(1300,100,15,15);
plinko48 = new Plinko(1360,100,15,15);
plinko49 = new Plinko(1420,100,15,15);
plinko50 = new Plinko(1480,100,15,15);

//plinko group3(middle);
plinko51 = new Plinko(10,165,15,15);
plinko52 = new Plinko(70,165,15,15);
plinko53 = new Plinko(130,165,15,15);
plinko54 = new Plinko(190,165,15,15);
plinko55 = new Plinko(250,165,15,15);
plinko56 = new Plinko(310,165,15,15);
plinko57 = new Plinko(370,165,15,15);
plinko58 = new Plinko(430,165,15,15);
plinko59 = new Plinko(490,165,15,15);
plinko60 = new Plinko(550,165,15,15);
plinko61 = new Plinko(610,165,15,15);
plinko62 = new Plinko(670,165,15,15);
plinko63 = new Plinko(730,165,15,15);
plinko64 = new Plinko(790,165,15,15);
plinko65 = new Plinko(850,165,15,15);
plinko66 = new Plinko(910,165,15,15);
plinko67 = new Plinko(970,165,15,15);
plinko68 = new Plinko(1030,165,15,15);
plinko69 = new Plinko(1090,165,15,15);
plinko70 = new Plinko(1150,165,15,15);
plinko71 = new Plinko(1210,165,15,15);
plinko72 = new Plinko(1270,165,15,15);
plinko73 = new Plinko(1330,165,15,15);
plinko74 = new Plinko(1390,165,15,15);

//plinko group4(bottom);
plinko75 = new Plinko(40,230,15,15);
plinko76 = new Plinko(100,230,15,15);
plinko77 = new Plinko(160,230,15,15);
plinko78 = new Plinko(220,230,15,15);
plinko79 = new Plinko(280,230,15,15);
plinko80 = new Plinko(340,230,15,15);
plinko81 = new Plinko(400,230,15,15);
plinko82 = new Plinko(460,230,15,15);
plinko83 = new Plinko(520,230,15,15);
plinko84 = new Plinko(580,230,15,15);
plinko85 = new Plinko(640,230,15,15);
plinko86 = new Plinko(700,230,15,15);
plinko87 = new Plinko(760,230,15,15);
plinko88 = new Plinko(820,230,15,15);
plinko89 = new Plinko(880,230,15,15);
plinko90 = new Plinko(940,230,15,15);
plinko91 = new Plinko(1000,230,15,15);
plinko92 = new Plinko(1060,230,15,15);
plinko93 = new Plinko(1120,230,15,15);
plinko94 = new Plinko(1180,230,15,15);
plinko95 = new Plinko(1240,230,15,15);
plinko96 = new Plinko(1300,230,15,15);
plinko97 = new Plinko(1360,230,15,15);
plinko98 = new Plinko(1420,230,15,15);
plinko99 = new Plinko(1480,230,15,15);
plinko100 = new Plinko(1560,230,15,15);

}

function draw(){
    background("yellow");
    ground.display();

    division.display();
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();

//plinko group1(top);
    plinko.display();
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

//plinko group2(middle);
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

//plinko group3(middle);
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
plinko63.display();
plinko64.display();
plinko65.display();
plinko66.display();
plinko67.display();
plinko68.display();
plinko69.display();
plinko70.display();
plinko71.display();
plinko72.display();
plinko73.display();
plinko74.display();

//plink group4(bottom);
plinko75.display();
plinko76.display();
plinko77.display();
plinko78.display();
plinko79.display();
plinko80.display();
plinko81.display();
plinko82.display();
plinko83.display();
plinko84.display();
plinko85.display();
plinko86.display();
plinko87.display();
plinko88.display();
plinko89.display();
plinko90.display();
plinko91.display();
plinko92.display();
plinko93.display();
plinko94.display();
plinko95.display();
plinko96.display();
plinko97.display();
plinko98.display();
plinko99.display();
plinko100.display();

    Engine.update(engine);
    spawnBall();

     drawSprites();
}
function spawnBall(){
    if(frameCount%66===0){
  ball.push(new Ball(random(10,1190),10,10));
    }
    for(var k=0;k <ball.length; k++){
ball[k].display();
    }
  }

