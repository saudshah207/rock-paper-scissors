function setUpRockPaperScissors() {
  function playGame(choiceSelectionButtonsWrapper, resultsWrapper) {
    let computerScore, humanScore, gameRound, continueGame;

    const roundNoElement = resultsWrapper.querySelector(".round-no"),
      choiceElements = {
        human: resultsWrapper.querySelector(".choice .human"),
        computer: resultsWrapper.querySelector(".choice .computer"),
      },
      roundResultElement = resultsWrapper.querySelector(".round-result"),
      scoreElements = {
        human: resultsWrapper.querySelector(".score .human"),
        computer: resultsWrapper.querySelector(".score .computer"),
      },
      gameResultElement = resultsWrapper.querySelector(".game-result");

    function resetGameVarsAndResult() {
      gameRound = 0;
      continueGame = true;
      computerScore = 0;
      humanScore = 0;
      gameResultElement.textContent = "";
    }

    resetGameVarsAndResult();

    choiceSelectionButtonsWrapper.addEventListener(
      "click",
      checkPreRoundConditions
    );

    function checkPreRoundConditions(event) {
      if (!event.target.matches("button")) return;

      if (hasMaxScoreReached()) {
        resetGameVarsAndResult();
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

      let roundResult;

      // Out of Rock & Scissors, the player with Rock wins
      if (
        (computerChoice === "Rock" || humanChoice === "Rock") &&
        (computerChoice === "Scissors" || humanChoice === "Scissors")
      ) {
        if (humanChoice === "Rock") {
          roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
          humanScore++;
        } else {
          roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
          computerScore++;
        }
      }

      // Out of Scissors & Paper, the player with Scissors wins
      else if (
        (computerChoice === "Scissors" || humanChoice === "Scissors") &&
        (computerChoice === "Paper" || humanChoice === "Paper")
      ) {
        if (humanChoice === "Scissors") {
          roundResult = `You win! ${humanChoice} beat ${computerChoice}`;
          humanScore++;
        } else {
          roundResult = `You lose! ${computerChoice} beat ${humanChoice}`;
          computerScore++;
        }
      }

      // Out of Paper & Rock, the player with Paper wins
      else if (
        (computerChoice === "Paper" || humanChoice === "Paper") &&
        (computerChoice === "Rock" || humanChoice === "Rock")
      ) {
        if (humanChoice === "Paper") {
          roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
          humanScore++;
        } else {
          roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
          computerScore++;
        }
      }

      // Otherwise, the players have chosen same object & it's a tie
      else {
        roundResult = "It's a tie!";
      }

      setResultsTextContent();

      if (hasMaxScoreReached()) {
        continueGame = false;
      }

      function setResultsTextContent() {
        roundNoElement.textContent = gameRound;

        choiceElements.human.textContent = humanChoice;
        choiceElements.computer.textContent = computerChoice;

        roundResultElement.textContent = roundResult;

        scoreElements.human.textContent = humanScore;
        scoreElements.computer.textContent = computerScore;
      }
    }

    function announceWinner(humanScore, computerScore) {
      if (computerScore > humanScore) {
        gameResultElement.textContent = "Computer wins this game! 🖥🎉";
      } else if (computerScore === humanScore) {
        gameResultElement.textContent = "This game is a tie! 🏳";
      } else {
        gameResultElement.textContent = "You win this game! 👤🎊";
      }
    }
  }

  playGame(
    document.querySelector("div.choice-selection-buttons"),
    document.querySelector("div.results")
  );
}

setUpRockPaperScissors();
