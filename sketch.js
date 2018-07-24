function setup(){
    createCanvas(500,500);
    
    background(0,0,180);
    currentColor = color("black");
function Red(){
  fill(180,0,0);
  rect(65, 5, 55, 55);
} 


function Yellow(){
  fill(180,180,0);
  rect(5, 5, 55, 55);
}


function Green(){
  fill(0,180,0);
  rect(35, 65, 55, 55); 
} 

function Neon(){
  fill(131,234,191);
  rect(125, 5, 55, 55);
}


function Purple(){
  fill(90,22,191);
  rect(95, 65, 55, 55); 
  }
 


function Erase(){
  fill (255);
  rect(5,430,180,65);

}
    Red()
    Yellow()
    Green()
    Neon()
    Purple()
    Erase()
}

// function mouseClicked(){
//   if (mouseX == {
//     value = 255;
//   } else {
//     value = 0;


function mouseDragged() {
    fill(currentColor);
   ellipse(mouseX, mouseY, 10, 10);
}
let currentColor;
function mouseClicked(){
     if(mouseX > 5 && mouseX < 60 && mouseY > 5 && mouseY < 60){
currentColor = color("Yellow")
     }
}
function mouseClicked(){
     if(mouseX > 65 && mouseX < 120 && mouseY > 5 && mouseY < 60){
currentColor = color("Red")
     }
}
function mouseClicked(){
     if(mouseX > 35 && mouseX < 100 && mouseY > 65 && mouseY < 120){
currentColor = color("Green")
     }
}