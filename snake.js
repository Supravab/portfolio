// snake game , create a snake game...

// when snake head collide with its body, it dies, score 0
// when snake hit the border, it die

// fruit
const canvasHeight = 500;
const canvasWidth = 500;
let currentFruit = null;
let incrementVal = 5;
let directionFunc = snakestill;
function drawSnake(snake) {
    document.querySelectorAll(".snake").forEach(el => el.remove());
    snake.forEach(part => {
        const hey = document.createElement("div");
        hey.classList.add("snake");
        hey.style.left = `${part.x}px`;
        hey.style.top = `${part.y}px`;
        document.body.appendChild(hey);
    })
}
function snakestill(){
    return null;
}
let counter = 0;
function createFruit(){
    if(currentFruit){
        currentFruit.remove();
    }
    const fruit = document.createElement("div");
    fruit.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 65%)`;
    fruit.classList.add("fruit");
    const FruitX = Math.floor(Math.random() * canvasWidth);
    const FruitY = Math.floor(Math.random() * canvasHeight);
    fruit.style.top = `${FruitY}px`;
    fruit.style.left = `${FruitX}px`;
    document.body.appendChild(fruit);
    currentFruit = fruit;
    counter++;
    incrementVal += 0.001;
    return {FruitX, FruitY};
}
let fruitCoordinates = createFruit();
let gameOn = true;
let score = 0;
// code to create a basic score value on the screen
const scoreValue = document.createElement("div");
scoreValue.innerHTML = `Score : ${score}`;
scoreValue.style.color = "#ffffff";
scoreValue.style.fontSize = "1.2rem";
scoreValue.style.position = "absolute";
scoreValue.style.top = "0";
scoreValue.style.left = "10%";
document.body.appendChild(scoreValue);
const endScreen = document.createElement("div");


// game over function
function gameOver() {
    endScreen.innerHTML = `Game Over, score ${score}`;
    endScreen.classList.add("game-over");
    document.body.appendChild(endScreen);
    gameOn = false;
}
//function to update score and place it in the game screen

function updateScore() {
    score += 1;
    scoreValue.innerHTML = `Score : ${score}`;
}
// representing a snake...
const coordinates = [{x:canvasHeight*0.5, y:canvasWidth*0.5}];
let xinit = Math.floor(coordinates[0].x);
let yinit = Math.floor(coordinates[0].y);
let snake = [{x:xinit, y:yinit}];
let dx,dy;
function snaketail(){
        snake.pop();
}
function greatFunction(){
if(fruitEating(snake[0], fruitCoordinates)){
    updateScore();
    fruitCoordinates = createFruit();
}
else{
snaketail();
}
};
function snakeleft(){
    dx = snake[0].x - incrementVal;
    dy = snake[0].y;
    snake.unshift({x: dx, y: dy});
    greatFunction();
}
function snakeright() {
    dx = snake[0].x + incrementVal;         
    dy = snake[0].y; 
    snake.unshift({x: dx, y:dy});
    greatFunction();
}
function snakeup(){
    dx =  snake[0].x;
    dy = snake[0].y - incrementVal; 
    snake.unshift({x: dx, y:dy});
    greatFunction();
}
function snakedown(){
    dx = snake[0].x;
    dy = snake[0].y + incrementVal;
    snake.unshift({x: dx, y:dy});
    greatFunction();
}
//when key is pressed, the snake must change its direction from some place to some place
document.addEventListener("keydown", (e) => {
    if(!gameOn){
        return;
    }
    switch (e.key) {
        case "a":
            if(directionFunc == snakeright){
                return;
            }
            directionFunc = snakeleft;
            break;
        case "s":
            if(directionFunc == snakeup){
                return;
            }
            directionFunc = snakedown;
            break;
        case "d":
            if(directionFunc == snakeleft){
                return;
            }
            directionFunc = snakeright;
            break;
        case "w":
            if(directionFunc == snakedown){
                return;
            }
            directionFunc = snakeup;
            break;
        default:
            break;
        }
    });
    function fruitEating(snuk, fut){
        return(
            Math.abs(snuk.x - fut.FruitX) < 20 && Math.abs(snuk.y - fut.FruitY) < 20
        );
    }
//collision detection function
function collision(snuke){
    for(let i=1; i<snuke.length; i++){
        if(snuke[0].x === snuke[i].x && snuke[0].y === snuke[i].y){
            gameOver();
        }
    }
    if(snuke[0].y > canvasHeight || snuke[0].x > canvasWidth || snuke[0].x < 0 || snuke[0].y < 0){
        gameOver();
    }
}
function gameWon(){
    if(counter >= 70){
    endScreen.innerHTML = `Game Won, score ${score}`;
    endScreen.classList.add("game-won");
    document.body.appendChild(endScreen);
    gameOn = false; 
    }
}
function recurr() {
    //check whether game is on or not
    if(!gameOn){
        return;
    }
    directionFunc();
    //create a snake dom element
    drawSnake(snake);
    // collision detection function
    collision(snake);
    //winning condition
    gameWon();
    //re-request the main loop again.
    requestAnimationFrame(recurr);
}

//start of the main loop
requestAnimationFrame(recurr);


let snakeButton = document.querySelector(".button");
snakeButton.addEventListener("click", () => {
    window.location.href = "index.html";
})