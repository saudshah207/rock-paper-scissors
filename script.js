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

function playRound(computerChoice, humanChoice) {
  /* Following are only possible pairs in a
    game of Rock, Paper and Scissors :

    Rock > Scissors
    Scissors > Paper
    Paper > Rock
    Rock === Rock
    Scissors === Scissors
    Paper === Paper
    
  */

  // Out of Rock & Scissors, the player with Rock wins
  if (
    (computerChoice.toUpperCase() === "ROCK" ||
      humanChoice.toUpperCase() === "ROCK") &&
    (computerChoice.toUpperCase() === "SCISSORS" ||
      humanChoice.toUpperCase() === "SCISSORS")
  ) {
    if (humanChoice.toUpperCase() === "ROCK") {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You win! Rock beats Scissors");
      humanScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    } else {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You lose! Rock beats Scissors");
      computerScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    }
  }

  // Out of Scissors & Paper, the player with Scissors wins
  else if (
    (computerChoice.toUpperCase() === "SCISSORS" ||
      humanChoice.toUpperCase() === "SCISSORS") &&
    (computerChoice.toUpperCase() === "PAPER" ||
      humanChoice.toUpperCase() === "PAPER")
  ) {
    if (humanChoice.toUpperCase() === "SCISSORS") {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You win! Scissors beat Paper");
      humanScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    } else {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You lose! Scissors beat Paper");
      computerScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    }
  }

  // Out of Paper & Rock, the player with Paper wins
  else if (
    (computerChoice.toUpperCase() === "PAPER" ||
      humanChoice.toUpperCase() === "PAPER") &&
    (computerChoice.toUpperCase() === "ROCK" ||
      humanChoice.toUpperCase() === "ROCK")
  ) {
    if (humanChoice.toUpperCase() === "PAPER") {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You win! Paper beats Rock");
      humanScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    } else {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("You lose! Paper beats Rock");
      computerScore++;
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    }
  }

  // Otherwise, the players have chosen same object & it's a tie
  else {
    console.log(`You chose ${humanChoice} | Computer chose ${computerChoice}`);
    console.log("It's a tie!");
    console.log(`You : ${humanScore} | Computer : ${computerScore}`);
  }
}

playRound(getComputerChoice(), getHumanChoice());
