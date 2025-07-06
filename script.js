function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
  let playerChoice;
  do{
   playerChoice = window.prompt("rock, paper, or scissors");
   playerChoice = playerChoice.toLowerCase();
  }while(playerChoice !== "rock" &&  playerChoice !== "paper" && playerChoice !== "scissors");
  return playerChoice;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();

  if(humanChoice == "Rock"){

    if(computerChoice == "Paper"){
      console.log(`You lose!${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    }
    else if(computerChoice == "Scissors"){
      console.log(`You Win!${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    }
    else if(computerChoice == "Rock"){
      console.log(`A Tie!You both picked ${computerChoice}!`);
    }
  }
  else if(humanChoice == "Paper"){

    if(computerChoice == "Paper"){
      console.log(`A Tie!You both picked ${computerChoice}!`);
      humanScore++;
    }
    else if(computerChoice == "Scissors"){
      console.log(`You lose!${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    }
    else if(computerChoice == "Rock"){
      console.log(`You Win!${humanChoice} beats ${computerChoice}!`);
    }
  }
    else if(humanChoice == "Scissors"){

    if(computerChoice == "Paper"){
      console.log(`You Win!${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    }
    else if(computerChoice == "Scissors"){
      console.log(`A Tie!You both picked ${computerChoice}!`);
    }
    else if(computerChoice == "Rock"){
      console.log(`You lose!${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    }
  }
  replayGame();
}
playRound(humanChoice, computerChoice);



function replayGame(){
  let replayChoice;
  do{
     replayChoice = window.prompt("Would you like to replay the game?(Yes/No)");
     replayChoice = replayChoice.toLowerCase();
  }while(replayChoice !== "yes" && replayChoice !== "no");

  if(replayChoice === "yes"){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }else if(replayChoice == "no"){
    console.log("Game Over!");
  }
  
}