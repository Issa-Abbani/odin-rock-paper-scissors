function getHumanChoice(){
  let playerChoice;
  do{
   playerChoice = window.prompt("rock, paper, or scissors");
  }while(playerChoice !== "rock" &&  playerChoice !== "paper" && playerChoice !== "scissors");
  return playerChoice;
}

