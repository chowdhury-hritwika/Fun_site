// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const music = new Audio('music.mp3');
let speed = 8;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];
let hiscoreval = 0
food = {x: 6, y: 7};

//main functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isColide(snake){
    //if snake bumps into itself
    for(let i =1; i<snakeArr.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true
        }
    }           

    //colison with wall
        if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
            return true
        }
    
}



function gameEngine(){
    //part 1: updating the snake var (array) and food

    if(isColide(snakeArr)){
        gameOverSound.play()
        music.pause()
        inputDir = {x:0, y:0}
        alert("Game over. Your current score is: " + score + "press any key to play again")
        snakeArr = 
[
    {x: 13, y:15}
]
        // music.play()
        // score = 0
    }

    //if you have eaten the food incr the score and re generate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x ){
        foodSound.play()
        score+=5;
        if(score > hiscoreval){
            hiscoreval = score
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            HiscoreBox.innerHTML = "High score: " + hiscoreval

        }
        scoreBox.innerHTML = "Score: " + score
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y})
        let a = 2; //grid = 0 - 18 so we generating between 2 and 16
        let b =  16;
        food = {x: Math.round(a+(b-a)* Math.random()), y: Math.round(a+(b-a)* Math.random())} //generating new food in any location between 2 and 16
    }

    //increasing speed
    // if(score>25){
    //     speed += 7
    // }
    // if(score>40){
    //     speed += 10
    // }
    // if(score>60){
    //     speed += 15
    // }

    //moving the snake
    for(let i=snakeArr.length -2; i>=0 ; i--){
        snakeArr[i+1] = {...snakeArr[i]} //creating new object for the i = i+1 element

    }

    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y

    //part 2: Display the snake
    board.innerHTML = "" //clear the board first
    snakeArr.forEach((e, index) =>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }

        board.appendChild(snakeElement)
    })
    // part 2: Display the food
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}





//main logic


let hiscore = localStorage.getItem("hiscore")
if(hiscore === null) {
    hiscoreval = 0
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore)
    HiscoreBox.innerHTML = "High score: " + hiscore
}

window.requestAnimationFrame(main)
window.addEventListener('keydown' , e =>{
    inputDir = {x:0, y:1} //start
    music.play()
    // score = 0 //take a look here
    moveSound.play()

    switch (e.key){
        case "ArrowUp":
            // console.log("arrowup")
            inputDir.x = 0
            inputDir.y = -1
            break;

        case "ArrowDown":
            // console.log("arrowdown")
            inputDir.x = 0
            inputDir.y = 1
            break;

        case "ArrowLeft":
            // console.log("arrowleft")
            inputDir.x = -1
            inputDir.y = 0
            break;

        case "ArrowRight":
            // console.log("arrowright")
            inputDir.x = 1
            inputDir.y = 0
            break;

        default:
            break

    }
})