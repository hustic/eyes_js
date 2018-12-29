var x = 447;
var y = 349;
var xi = 64;
var yi = 48;


function setup() {
  createCanvas(1024, 768);
  
  smooth();
  
}

function draw() {
  
   background(0);
  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
        
     background(250);
     stroke(2);
 } else {
    
   stroke(250, 30);
 }

  var v;
  
    
        for (var a = 59; a <= width; a += 151) {
        for (var b=85; b<=height; b += 150) {
          
          v = createVector(a, b);
          
          if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {

          if (a != 512 && b!= 385) {
          line(v.x, v.y, map(2*v.x - mouseX, 0, width, 512-xi, 512+xi), map(2*v.y - mouseY, 0, height, height/2 - height/16, height/2 + height/16));
          }
        } else {
          
          line(v.x, v.y, map(random(v.x - width/8, v.x + width/8) , 0, width, width/2 - width/8, width/2 + width/8), map(random(v.y - height/8, v.y + height/8), 0, height, height/2 - height/8, height/2 + height/8));
        
          
             
      }
     }
   }
   
   if (mouseX < 0 && mouseX > width &&
      mouseY < 0 && mouseY > height) {
  stroke(250, 70);
 
      }
  
  arc(x, y, 70, 70, PI+10.3, TWO_PI-10.2);
  arc(x, y+35, 70, 70, PI+0.5, TWO_PI-0.5);

  arc(x+130, y, 70, 70, PI+10.2, TWO_PI-10.3);
  arc(x+130, y+35, 70, 70, PI+0.5, TWO_PI-0.5);


  fill(50);
  noStroke();
  ellipse(map(x + mouseX, 0, width, x-40, x+40), y+18, 20, 20);
  ellipse(x+130, y+18, 20, 20);
  noFill();
  
 
}
