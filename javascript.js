

let game = 1;
let humanScore = 0;
let computerScore = 0;
let drawMatches = 0;
// let letterS = '';

// humans outcome
let test = '';
// pc outcome
let pcOutcome = '';
// outcome of round for player
let outcome = '';

// PC's CHOICE
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

const youScore = document.querySelector('.score-player');
const pcScore = document.querySelector('.score-pc');

let humanChoiceRock = function rock(){
    let test = 'ROCK';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    pcOutcome = computersChoice.textContent
    if (playRound(test, pcOutcome) === 'Win'){
        humanScore++
        youScore.textContent = humanScore;
        if (humanScore === 5){
            alert("YOU WIN! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else if (playRound(test, pcOutcome) === 'Lose'){
        computerScore++
        pcScore.textContent = computerScore;
        if (humanScore === 5){
            alert("YOU WIN! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else {
        drawMatches++
    }
}

let humanChoicePaper = function paper(){
    let test = 'PAPER';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    pcOutcome = computersChoice.textContent
    if (playRound(test, pcOutcome) === 'Win'){
        humanScore++
        youScore.textContent = humanScore;
        if (humanScore === 5){
            alert("YOU WIN! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else if (playRound(test, pcOutcome) === 'Lose'){
        computerScore++
        pcScore.textContent = computerScore;
        if (humanScore === 5){
            alert("YOU WIN! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else {
        drawMatches++
    }
}

let humanChoiceScissors = function scissors(){
    let test = 'SCISSORS';
    const computersChoice = document.querySelector('.pc-choice-text');
    computersChoice.textContent = randomRPS();
    pcOutcome = computersChoice.textContent
    if (playRound(test, pcOutcome) === 'Win'){
        humanScore++
        youScore.textContent = humanScore;
        if (humanScore === 5){
            alert("YOU WIN! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else if (playRound(test, pcOutcome) === 'Lose'){
        computerScore++
        pcScore.textContent = computerScore;
        if (humanScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        } else if (computerScore === 5){
            alert("PC WINS! GAMES OVER!")
            humanScore = 0;
            computerScore = 0;
            pcScore.textContent = '0';
            youScore.textContent = '0';
        }
    } else {
        drawMatches++
    }
    
}

const buttonClickRock = document.querySelector('.rock-button');
buttonClickRock.addEventListener('click', humanChoiceRock);

const buttonClickPaper = document.querySelector('.paper-button');
buttonClickPaper.addEventListener('click', humanChoicePaper);

const buttonClickScissors = document.querySelector('.scissors-button');
buttonClickScissors.addEventListener('click', humanChoiceScissors);

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
 


// blank function
// function nothing(){
//     return 0;
// }

// function playGame(){
    
//     while (game <= 5){
//         getHumanChoice()
//         randomRPS()
//         playRound()
//         if (playRound(newUserAns, comAnswer) === 'Draw'){
//             drawMatches++
//         } else if (playRound(newUserAns, comAnswer) === 'Win'){
//             humanScore++
//         } else {
//             computerScore++
//         }
//         game++
//     }
//     if (drawMatches > 1){
//             letterS = 's';
//         }

//     console.log(`After all 5 games the scores are:`)
//     console.log(`You: ${humanScore}`)
//     console.log(`Computer: ${computerScore}`)
//     console.log(`With ${drawMatches} draw${letterS}.`)
// }



// playGame()