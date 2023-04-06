let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'Rock';
  } else if (number === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return 'draw';
  } else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    return 'computer-wins';
  } else if (
    (computerSelection === 'Rock' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Rock')
  ) {
    return 'player-wins';
  } else {
    return 'ERROR, pick only between "Rock", "Paper" and "Scissors"';
  }
}

function playGame() {
  let roundResult = playRound(
    (computerSelection = getComputerChoice()),
    (playerSelection = prompt('Pick "Rock", "Paper" or "Scissors"', '...'))
  );
  if (roundResult === 'draw') {
    playerScore + 0;
    computerScore + 0;
    console.log(
      `A draw! Computer picked ${computerSelection}, 
				Your score is: ${playerScore}, 
				computer score is: ${computerScore}`
    );
    if (playerScore < 5 && computerScore < 5) {
      playGame();
    } else {
      console.log('We have a winner!');
    }
  } else if (roundResult === 'computer-wins') {
    playerScore + 0;
    computerScore++;
    console.log(
      `You lose this one! Computer picked ${computerSelection}, 
				Your score is: ${playerScore}, 
				computer score is: ${computerScore}`
    );
    if (playerScore < 5 && computerScore < 5) {
      playGame();
    } else {
      console.log('We have a winner!');
    }
  } else if (roundResult === 'player-wins') {
    playerScore++;
    computerScore + 0;
    console.log(
      `Good work! Computer picked ${computerSelection}, 
				Your score is: ${playerScore}, 
				computer score is: ${computerScore}`
    );
    if (playerScore < 5 && computerScore < 5) {
      playGame();
    } else {
      playerScore = 0;
      computerScore = 0;
      console.log('We have a winner!');
    }
  } else {
    console.log(roundResult);
  }
}
