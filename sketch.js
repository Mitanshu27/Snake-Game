var snake;
var scl = 20;
var food;
var score = 0;
var gamestate = "play";
function setup()
{
   createCanvas(400,400);
   snake = new Snake();
   frameRate(10); 
   foodLocation();
}
function foodLocation()
{
    var clos = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(clos)), floor(random(rows)));
    food.mult(scl);

}
function mousePressed()
{
    snake.total++;
}
function draw()
{
    background(220);
    textSize(18);
    text("Score:- "+score,300,20);
    console.log(score);
    if(gamestate === "play")
    {
    if(snake.eat(food))
    {
        foodLocation();
        score = score +1;
    }
    if(snake.endGame())
    {
        gamestate = "end";
    }
    snake.update();
    snake.show();
    fill(255,0,0);
    rect(food.x, food.y, scl, scl);
    }
    if(gamestate === "end")
    {
        background(255,0,0);
        textSize(60);
        stroke(255);
        text("GAME OVER",15,200);
    }
}
function keyPressed()
{
    if(keyCode === 38 || keyCode === 87)
    {
        snake.dir(0,-1);
    }
    else if(keyCode === 40 || keyCode === 83)
    {
        snake.dir(0,1);
    }
    else if(keyCode === 37)
    {
        snake.dir(-1,0);
    }
    else if(keyCode === 39)
    {
        snake.dir(1,0);
    }
}
