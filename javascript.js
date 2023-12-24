/*
getComputerChoice, randomly chooses a value between 1 and 3
use switch case to determine which is rock, paper and scissors.
Use console.log() to check if this is outputting the correct output
playerSelection() - get input from player
determine who wins and print it
*/

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

function playRound(playerSel, computerSel){
    playerSel = playerSel.toLowerCase();
    
    if(!playerSel){
        alert("please enter valid input, options are rock, paper, or scissors")
        return "replay"
    }
    if(playerSel === computerSel){
        return "replay";
    }

    console.log(playerSel + " " + computerSel);

    if(playerSel === "rock"){
        if(computerSel === "scissors"){
            return "win";
        }else if(computerSel === "paper"){
            return "lose";
        }
    }else if(playerSel === "paper"){
        if(computerSel === "scissors"){
            return "lose";
        }else if(computerSel === "rock"){
            return "win";
        }
    }else if(playerSel === "scissors"){
        if(computerSel === "paper"){
            return "win";
        }else if(computerSel === "rock"){
            return "lose";
        }
    }else{
        alert("please enter valid input next time");
        return "replay";
    }

}

// button.addEventListener(click)
const para = document.querySelector("p");

function game(){
    
    let playerWins = 0;
    let compWins = 0;
    let outcome = "";

    while(playerWins < 3 && compWins < 3){
        let playerSel = prompt("enter input")
        
        outcome = playRound(playerSel, getComputerChoice())
        if(outcome === "win"){
            playerWins += 1;
        }else if(outcome === "lose"){
            compWins += 1;
        }else{
            continue;
        }
        
        
    }
    let msg = "";
    if(playerWins === 3){
        msg = "Congratulations! You beat the computer with a score of " + playerWins.toString() + " to " + compWins.toString();
        console.log(msg);
        para.textContent = msg;

    }else{
        msg = "Sorry, you lost to the computer with a score of " + playerWins.toString() + " to " + compWins.toString();
        console.log(msg);
        para.textContent = msg;

    }
    
}

game();




