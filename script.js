function getComputerChoice() {
  // Get random number between 0 and 2 (both inclusive)
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

function getHumanChoice(currentRound) {
  // Ask user/human for their choice
  let humanChoice = prompt(
    `Round ${currentRound} :\nEnter either Rock, Paper or Scissors`
  );

  // Only proceed if human's choice is not null
  if (humanChoice !== null) {
    // Standardize human input so that only first character is capital
    humanChoice =
      humanChoice.slice(0, 1).toUpperCase() +
      humanChoice.slice(1).toLowerCase();

    /* If human choice is valid according to game, return human's choice
    or else notify human that their input is invalid */
    return humanChoice === "Rock" ||
      humanChoice === "Paper" ||
      humanChoice === "Scissors"
      ? humanChoice
      : alert("Sorry, only Rock, Paper or Scissors is accepted in this game");
  } else {
    alert(":(");
  }
}

function playGame() {
  let computerScore = 0,
    humanScore = 0,
    gameRound,
    continueGame = true;

  // Each game should consist of 5 rounds
  for (gameRound = 1; gameRound <= 5; gameRound++) {
    // If user cancels input prompt, stop
    if (continueGame) {
      playRound(getComputerChoice(), getHumanChoice(gameRound));
      if (gameRound === 5) {
        if (computerScore > humanScore) {
          console.log("Computer wins this game! 🖥🎉");
        } else if (computerScore === humanScore) {
          console.log("This game is a tie! 🏳");
        } else {
          console.log("Human wins this game! 👤🎊");
        }
      }
    } else {
      break;
    }
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

    // Abort if humanChoice contains undefined
    if (!humanChoice) {
      continueGame = false;
      return continueGame;
    }

    // Declare Round number
    console.log(`%cRound ${gameRound} : `, "font-weight: bold; font-size: 13px");

    // Out of Rock & Scissors, the player with Rock wins
    if (
      (computerChoice === "Rock" || humanChoice === "Rock") &&
      (computerChoice === "Scissors" || humanChoice === "Scissors")
    ) {
      if (humanChoice === "Rock") {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      } else {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      }
    }

    // Out of Scissors & Paper, the player with Scissors wins
    else if (
      (computerChoice === "Scissors" || humanChoice === "Scissors") &&
      (computerChoice === "Paper" || humanChoice === "Paper")
    ) {
      if (humanChoice === "Scissors") {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You win! ${humanChoice} beat ${computerChoice}`);
        humanScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      } else {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
        computerScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      }
    }

    // Out of Paper & Rock, the player with Paper wins
    else if (
      (computerChoice === "Paper" || humanChoice === "Paper") &&
      (computerChoice === "Rock" || humanChoice === "Rock")
    ) {
      if (humanChoice === "Paper") {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      } else {
        console.log(
          `You chose ${humanChoice} | Computer chose ${computerChoice}`
        );
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`You : ${humanScore} | Computer : ${computerScore}`);
      }
    }

    // Otherwise, the players have chosen same object & it's a tie
    else {
      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );
      console.log("It's a tie!");
      console.log(`You : ${humanScore} | Computer : ${computerScore}`);
    }
  }
}

playGame();
