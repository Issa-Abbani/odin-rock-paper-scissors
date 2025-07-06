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

let humanScore = getHumanChoice();
let computerScore = getComputerChoice();
