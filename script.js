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
  let humanChoice = prompt(
    `Round ${currentRound} :\nEnter either Rock, Paper or Scissors`
  );

  // Only proceed if human doesn't cancel prompt
  if (humanChoice !== null) {
    // Standardize human input so that only first character is capital
    humanChoice =
      humanChoice.slice(0, 1).toUpperCase() +
      humanChoice.slice(1).toLowerCase();

    /* Keep asking user for valid input as long as input prompt is not 
    cancelled or valid input is not given, so if user has mistakenly typed 
    invalid input, they can type again */
    while (
      humanChoice !== "Rock" &&
      humanChoice !== "Paper" &&
      humanChoice !== "Scissors" &&
      humanChoice !== null
    ) {
      humanChoice = prompt(
        `Round ${currentRound} :\nSorry, only Rock, Paper or Scissors is accepted in this game`
      );
      humanChoice = (humanChoice === null) ? humanChoice
                  : humanChoice.slice(0, 1).toUpperCase() +
                    humanChoice.slice(1).toLowerCase();
    }
    return humanChoice
  }
}

function playGame() {
  let computerScore = 0,
    humanScore = 0,
    gameRound,
    continueGame = true;

  // Each game should consist of 5 rounds
  for (gameRound = 1; gameRound <= 5; gameRound++) {
    if (continueGame) {
      playRound(getComputerChoice(), getHumanChoice(gameRound));
      if (gameRound === 5) {
        if (computerScore > humanScore) {
          console.log("Computer wins this game! 🖥🎉");
        } else if (computerScore === humanScore) {
          console.log("This game is a tie! 🏳");
        } else {
          console.log("You win this game! 👤🎊");
        }
      }
    } else {
      /* If user cancels before Round 5, declare 
      winner upto number of Rounds played, only 
      if current Round is not first */
      if (gameRound > 2) {
        if (computerScore > humanScore) {
          console.log(`Computer wins upto Round ${gameRound - 2}! 🖥🎉`);
        } else if (computerScore === humanScore) {
          console.log(`It's a tie upto Round ${gameRound - 2}! 🏳`);
        } else {
          console.log(`You win upto Round ${gameRound - 2}! 👤🎊`);
        }
      }
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

    // Abort if humanChoice contains undefined or null
    if (!humanChoice) {
      continueGame = false;
      return continueGame;
    }

    console.log(
      `%cRound ${gameRound} : `,
      "font-weight: bold; font-size: 13px"
    );

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

function removeTextAndAddButton(event) {
  let playGameButton = document.createElement("button");

  if (event.ctrlKey && event.shiftKey && event.key === "J") {
    console.log("Keep the console open for rest of the game.");
    let text = document.querySelector("h1");

    text.insertAdjacentElement("afterend", playGameButton).textContent =
      "Play Game";

    document.body.removeChild(text);

    window.removeEventListener("keydown", removeTextAndAddButton);
  }

  playGameButton.addEventListener("click", playGame);
}

window.addEventListener("keydown", removeTextAndAddButton);