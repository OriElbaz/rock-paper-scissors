
// ** GLOBAL VARIABLES **
let game = 1;
let humanScore = 0;
let computerScore = 0;
let drawMatches = 0;
const youScore = document.querySelector('.score-player');
const pcScore = document.querySelector('.score-pc');

// ** PLAY CHOICE FUNCTIONS **
let humanChoiceRock = function rock(){
    const test = 'ROCK';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    const pcOutcome = computersChoice.textContent;
    evaluateRoundResult(test, pcOutcome)
}
let humanChoicePaper = function paper(){
    const test = 'PAPER';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    const pcOutcome = computersChoice.textContent
    evaluateRoundResult(test, pcOutcome)
}
let humanChoiceScissors = function scissors(){
    const test = 'SCISSORS';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    const pcOutcome = computersChoice.textContent
    evaluateRoundResult(test, pcOutcome)
    
}

// ** PC's CHOICE RANDOMISER **
function randomRPS(){
    let randomNum = Math.random();
    let answer = '';
    if (randomNum <= 0.333){
        return 'Rock';
    } else if (randomNum <= 0.666){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// ** SUB FUNCTIONS **
let evaluateRoundResult = (test, pcOutcome)=>{
    const result = playRound(test, pcOutcome)
    if (result === 'Win'){
        playRoundWin()
    } else if (result === 'Lose'){
        playRoundLose()
    } else {
        drawMatches++
    }
}
function playRound(human, computer){  
    if (human === 'ROCK'){
        if (computer === 'Rock'){
            return outcome = 'Draw';
        } else if (computer === 'Scissors'){
            return outcome = 'Win';
        } else {
            return outcome = 'Lose';
        }
    } else if (human === 'SCISSORS'){
        if (computer === 'Rock'){
            return outcome = 'Lose';
        } else if (computer === 'Scissors'){
            return outcome = 'Draw';
        } else {
            return outcome = 'Win';
        } 
    } else if (human === 'PAPER'){
        if (computer === 'Rock'){
            return outcome = 'Win';
        } else if (computer === 'Scissors'){
            return outcome = 'Lose';
        } else {
            return outcome = 'Draw';
        } 
    }
    
}
let playGame = ()=>{
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    pcOutcome = computersChoice.textContent
    if (playRound(test, pcOutcome) === 'Win'){
        playRoundWin()
    } else if (playRound(test, pcOutcome) === 'Lose'){
        playRoundLose()
    } else {
        drawMatches++
    }
}
let playRoundWin = ()=>{
    humanScore++
        youScore.textContent = humanScore;
        // if scores reach 5
        if (humanScore === 5){
            gameEndPlayer()
        } else if (computerScore === 5){
            gameEndPC()
        }
}
let playRoundLose = ()=>{
    computerScore++
    pcScore.textContent = computerScore;
    if (humanScore === 5){
        gameEndPlayer()
    } else if (computerScore === 5){
        gameEndPC()
    }
}
let gameEndPC = ()=>{
    alert("PC WINS! GAMES OVER!")
    humanScore = 0;
    computerScore = 0;
    pcScore.textContent = '0';
    youScore.textContent = '0';
    const pcChoiceText = document.querySelector('.pc-choice-text')
    pcChoiceText.textContent = '';
}
let gameEndPlayer = ()=>{
    alert("YOU WIN! GAMES OVER!")
    humanScore = 0;
    computerScore = 0;
    pcScore.textContent = '0';
    youScore.textContent = '0';
}

// ** BUTTON VARIABLES **
const buttonClickRock = document.querySelector('.rock-button');
    buttonClickRock.addEventListener('click', humanChoiceRock);
const buttonClickPaper = document.querySelector('.paper-button');
    buttonClickPaper.addEventListener('click', humanChoicePaper);
const buttonClickScissors = document.querySelector('.scissors-button');
    buttonClickScissors.addEventListener('click', humanChoiceScissors);