function setup() {
  createCanvas(500,500);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  noStroke();
  micLevel = mic.getLevel();
  adjustedMicLevel = micLevel * 700;
  fill(240,0,0);
  rect(230,250-adjustedMicLevel,40,adjustedMicLevel);
  var x = adjustedMicLevel - 20;
  fill(180,60,0);
  if(x<=0){
    rect(185,270-adjustedMicLevel,40,0)
  }
  else {
    rect(185,270-adjustedMicLevel,40,x);
  }
  var y = adjustedMicLevel - 40;
  fill(120,120,0);
  if(y<=0){
    rect(140,290-adjustedMicLevel,40,0)
  }
  else {
    rect(140,290-adjustedMicLevel,40,y);
  }
  fill(0,240,0);
  rect(50,250-adjustedMicLevel,40,adjustedMicLevel);
  var a = adjustedMicLevel - 20;
  fill(60,180,0);
  if(a<=0){
    rect(95,270-adjustedMicLevel,40,0)
  }
  else {
    rect(95,270-adjustedMicLevel,40,a);
  }
}