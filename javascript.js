/*
getComputerChoice, randomly chooses a value between 1 and 3
use switch case to determine which is rock, paper and scissors.
Use console.log() to check if this is outputting the correct output
playerSelection() - get input from player
determine who wins and print it
*/
let playerScore = 0;
let computerScore = 0;
let winner = ''

function playRound(playerSel, compSel){
    if(playerSel === compSel){
        winner = 'tie';
    }

    else if(playerSel === 'rock' && compSel === 'scissors' ||
            playerSel === 'paper' && compSel === 'rock' ||
            playerSel === 'scissors' && compSel === 'paper'){
        playerScore++;
        winner = 'player';
    }

    else{
        winner = 'computer';
        computerScore++;
    }
    updateScore(winner);
    updateScoreMessage(winner, playerSel, compSel);

}


function getComputerChoice(){
    let comp_choice = Math.random() * 3;
    comp_choice = Math.floor(comp_choice);
    let res = "";
    switch(comp_choice){
        case 0:
            res = "rock";
            break;
        case 1:
            res = "paper";
            break;
        case 2:
            res = "scissors";
            break;
        default:
            res = "uh oh, not working";
            break;
    }

    return res;
}



const para = document.querySelector("p");
const rockBtn = document.querySelector('#r-button');
const paperBtn = document.querySelector('#p-button');
const scissorsBtn = document.querySelector('#s-button');
const compScore = document.querySelector('#comp-score');
const userScore = document.querySelector('#user-score');
const h1 = document.querySelector('h1');
const restart = document.querySelector('#restart');
const message = document.querySelector('#score-message');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restart.addEventListener('click', () => restartGame());


function handleClick(playerSel){
    const compSel = getComputerChoice();
    playRound(playerSel, compSel);
}

function updateScore(winner){
    switch(winner){
        case 'computer':
            compScore.textContent = `Computer: ${computerScore}`;
            if(computerScore === 3){
                endGame('computer');
            }
            break;
        case 'player':
            userScore.textContent = `Player: ${playerScore}`;
            if(playerScore === 3){
                endGame('player');
            }
            break;
        default:
            break;


    }
}

function updateScoreMessage(winner, playerSel, compSel){
    if(winner === 'player'){
        message.textContent = `Your ${playerSel} beats the computer's ${compSel}!`;
    }else if(winner === 'computer'){
        message.textContent = `Your ${playerSel} loses to the computer's ${compSel}!`;
    }else{
        message.textContent = `You both chose ${playerSel}. It's a tie!`;
    }
}




function endGame(winner){
    if(winner === 'player'){
        winner = 'You';
    }else if(winner === 'computer'){
        winner = 'The computer';
    }
    h1.textContent = `${winner} has won the game!`;
    restart.style.visibility = 'visible';
    rockBtn.style.visibility = 'hidden';
    paperBtn.style.visibility = 'hidden';
    scissorsBtn.style.visibility = 'hidden';

}

function restartGame(){
    location.reload();
}







