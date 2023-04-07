let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('.btn');
let result = document.body.querySelector('.results > #result');
let computer = document.body.querySelector('.results > #computer');
let score = document.body.querySelector('.results > #score');
let playerSelection;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playerSelection = e.target.textContent;
    playGame();
  });
});

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
    return "Invalid input. Please choose between 'Rock', 'Paper', and 'Scissors'.";
  }
}

function playGame() {
  let computerSelection = getComputerChoice();
  let roundResult = playRound(computerSelection, playerSelection);
  if (roundResult === 'draw') {
    result.textContent = 'A draw!';
    computer.textContent = `Computer picked ${computerSelection}`;
    score.textContent = `Your score is: ${playerScore}, computer score is: ${computerScore}`;
  } else if (roundResult === 'computer-wins') {
    computerScore++;
    result.textContent = 'You lose this one!';
    computer.textContent = `Computer picked ${computerSelection}`;
    score.textContent = `Your score is: ${playerScore}, computer score is: ${computerScore}`;
  } else if (roundResult === 'player-wins') {
    playerScore++;
    result.textContent = 'Good work!';
    computer.textContent = `Computer picked ${computerSelection}`;
    score.textContent = `Your score is: ${playerScore}, computer score is: ${computerScore}`;
  } else {
    result.textContent = roundResult;
  }
  if (computerScore >= 5 || playerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    result.textContent = 'We have a winner!';
  }
}
