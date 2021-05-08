var Hour, Second, Minute;


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  

}

function draw() {
  background(0);  
   
   translate(200,200);
   rotate(-90)

   
  Hour = hour();
  Minute = minute();
  Second = second();

  scAngle = map(Second,0,60,0,360);
  mnAngle = map(Minute,0,60,0,360);
  hrAngle = map(Hour % 12,0,12,0,360);


push();
rotate(scAngle);
strokeWeight(3);
stroke(163,125,220);
line(0,0,70,0);
pop();
noFill();
strokeWeight(3);
stroke(163,125,220);
arc(0,0,340,340,0,scAngle);


push();
    rotate(hrAngle); 
    stroke(71, 116, 240);
    strokeWeight(5);
    line(0,0,80,0);
    pop();
    noFill();
    stroke(71, 116, 240);
    strokeWeight(5)
     arc(0,0,250,250,0,hrAngle);

   push();
    rotate(mnAngle);
    strokeWeight(6)
    stroke(63,200,150);
    line(0,0,100,0);
    pop();
    noFill();
   strokeWeight(6);
    stroke(63,200,150);
    arc(0,0,300,300,0,mnAngle);

  drawSprites();
}