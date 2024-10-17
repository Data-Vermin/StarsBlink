let starsX= [];

let starsY= [];

let starblink = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < 150; i++){
    starsX[i] = random(width);
    starsY[i] = random(height);
    starblink[i] = Math.floor(random(0,10));
  }
}

function draw() {
  background(42, 1, 52);

  if(frameCount % 15 ==0){
    for (let i = 0; i < 150; i++){
      starblink[i] = Math.floor(random(0,10));
    }
  }
  drawStars();
}

function drawStars(){
  //Drawing The Stars And The If Statent For The Blinking
  push();
  translate(-width/2, -height/2);
  for (let i = 0; i < 150; i++){
    if(starblink[i] ==1){
      fill(255);
    } else{
      fill(255,255,153);
    }
    ellipse(starsX[i], starsY[i], 5, 5);
  }
  pop();
}
