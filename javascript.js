
let outcome = '';
let game = 1;
let humanScore = 0;
let computerScore = 0;
let drawMatches = 0;
let letterS = '';


// computers choice
function randomRPS(){
    let randomNum = Math.random();
    let answer = '';
    if (randomNum <= 0.333){
        return comAnswer = 'Rock';
    } else if (randomNum <= 0.666){
        return comAnswer = 'Paper';
    } else {
        return comAnswer = 'Scissors';
    }
}

// receive input from player
function getHumanChoice(){
    let userAns = prompt("Rock, Paper or Scissors? ")
    return newUserAns = userAns.toUpperCase()
}

// game logic
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
function nothing(){
    return 0;
}

function playGame(){
    
    while (game <= 5){
        getHumanChoice()
        randomRPS()
        playRound()
        if (playRound(newUserAns, comAnswer) === 'Draw'){
            drawMatches++
        } else if (playRound(newUserAns, comAnswer) === 'Win'){
            humanScore++
        } else {
            computerScore++
        }
        game++
    }
    if (drawMatches > 1){
            letterS = 's';
        }

    console.log(`After all 5 games the scores are:`)
    console.log(`You: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
    console.log(`With ${drawMatches} draw${letterS}.`)
}



// playGame()