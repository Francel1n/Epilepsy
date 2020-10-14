  let xpos,ypos;
  let xspeed = 3.8;
  let yspeed=3.2;
  let xdirection=(-2,-1,1,2);
  let ydirection=(-2,-1,1,2);
function setup() {
  createCanvas(400, 400);
    xpos = width / 2;
    ypos= height/2;
}

function draw() {
  background(220);
    let taille1 = random(30);

stroke(0);
     strokeWeight (2);
     fill (255);
       quad(xpos+10, ypos+31+taille1, xpos+86, ypos+20,xpos+ 69,ypos+ 63+taille1,xpos+ 30,ypos+76);
       quad(xpos+38, ypos+31+taille1, xpos+86, ypos+20,xpos+ 69,ypos+ 63+taille1,xpos+ 30,ypos+76);
       frameRate(60);
}