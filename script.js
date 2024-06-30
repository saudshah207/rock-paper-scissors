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

getComputerChoice()
