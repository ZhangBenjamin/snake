let snake;
let rez = 20;
let food;
let w;
let h;
let r = "Press R to restart.";

function setup(){
    createCanvas(400, 400);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(5);
    snake = new Snake();
    foodLocation();
    textSize(2);
      }

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }
  if(keyCode === 82){
    background(120);
    foodLocation();
    snake = new Snake();
    loop();
  }
}
function draw(){
    background(120);
    fill(65, 45, 87);
      scale(rez);

      if (snake.eat(food)) {
         foodLocation();
      }
      snake.update();
      snake.show();

      if (snake.endGame()) {
        background(255)
        fill('black')
        text(r, 1, 5);
        //noLoop();
      }



      noStroke();
      fill(255);
      ellipse(food.x, food.y, 1, 1);

      }

