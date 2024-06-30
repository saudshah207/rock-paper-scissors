let computerScore = 0,
  humanScore = 0;

function getComputerChoice() {
  // get random number between 0 and 2 (both inclusive)
  let randomNum = Math.floor(Math.random() * 3);

  // return computer choice depending on randomNum
  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

getComputerChoice();

function getHumanChoice() {
  // ask user/human for their choice
  let humanChoice = prompt("Enter either Rock, Paper or Scissors");

  /* if human choice is valid according to game, return human's choice
    or else notify human that their input is invalid */
  return humanChoice.toUpperCase() === "ROCK" ||
    humanChoice.toUpperCase() === "PAPER" ||
    humanChoice.toUpperCase() === "SCISSORS"
    ? humanChoice
    : alert("Sorry, only Rock, Paper or Scissors is accepted in this game");
}

getHumanChoice();
