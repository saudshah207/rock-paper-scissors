function setUpRockPaperScissors() {
  function playGame() {
    let computerScore = 0,
      humanScore = 0,
      gameRound = 0,
      continueGame = true;

    const choiceSelectionButtonsWrapper = document.querySelector(
      "div.choice-selection-buttons"
    );

    choiceSelectionButtonsWrapper.addEventListener(
      "click",
      checkPreRoundConditions
    );

    function checkPreRoundConditions(event) {
      if (!event.target.matches("button")) return;

      if (hasMaxScoreReached()) {
        gameRound = 0;
        continueGame = true;
        computerScore = 0;
        humanScore = 0;
      }

      gameRound++;

      if (continueGame) {
        playRound(getComputerChoice(), getHumanChoice(event.target));
        if (!continueGame) announceWinner(humanScore, computerScore);
      }
    }

    function hasMaxScoreReached(maxScore = 5) {
      return humanScore === maxScore || computerScore === maxScore;
    }

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

    function getHumanChoice(clickTarget) {
      return clickTarget.dataset.choice;
    }

    function announceWinner(humanScore, computerScore) {
      if (computerScore > humanScore) {
        console.log("Computer wins this game! 🖥🎉");
      } else if (computerScore === humanScore) {
        console.log("This game is a tie! 🏳");
      } else {
        console.log("You win this game! 👤🎊");
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

      console.log(
        `%cRound ${gameRound} : `,
        "font-weight: bold; font-size: 13px"
      );

      console.log(
        `You chose ${humanChoice} | Computer chose ${computerChoice}`
      );

      // Out of Rock & Scissors, the player with Rock wins
      if (
        (computerChoice === "Rock" || humanChoice === "Rock") &&
        (computerChoice === "Scissors" || humanChoice === "Scissors")
      ) {
        if (humanChoice === "Rock") {
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++;
        } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }
      }

      // Out of Scissors & Paper, the player with Scissors wins
      else if (
        (computerChoice === "Scissors" || humanChoice === "Scissors") &&
        (computerChoice === "Paper" || humanChoice === "Paper")
      ) {
        if (humanChoice === "Scissors") {
          console.log(`You win! ${humanChoice} beat ${computerChoice}`);
          humanScore++;
        } else {
          console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
          computerScore++;
        }
      }

      // Out of Paper & Rock, the player with Paper wins
      else if (
        (computerChoice === "Paper" || humanChoice === "Paper") &&
        (computerChoice === "Rock" || humanChoice === "Rock")
      ) {
        if (humanChoice === "Paper") {
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++;
        } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }
      }

      // Otherwise, the players have chosen same object & it's a tie
      else {
        console.log("It's a tie!");
      }

      console.log(`You : ${humanScore} | Computer : ${computerScore}`);

      if (hasMaxScoreReached()) {
        continueGame = false;
      }
    }
  }

  function prepareUiAndPlayGame(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      console.log(
        "%cKeep the console open for rest of the game.",
        "font-weight: bold; font-size: 16px"
      );

      let text = document.querySelector("h1");

      text.textContent =
        "Use the buttons below to start playing. Player to get to 5 points first wins.";

      window.removeEventListener("keydown", prepareUiAndPlayGame);

      enableChoiceSelectionButtons(
        document.querySelectorAll(".choice-selection-buttons > button")
      );

      playGame();
    }

    function enableChoiceSelectionButtons(choiceSelectionButtons) {
      for (const button of choiceSelectionButtons)
        button.removeAttribute("disabled");
    }
  }

  window.addEventListener("keydown", prepareUiAndPlayGame);
}

setUpRockPaperScissors();
