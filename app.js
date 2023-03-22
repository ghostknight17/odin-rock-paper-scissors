console.log('hello world!');

function getComputerChoice () {
    let number = Math.random() * 100;
    if (number <= 33) {
        return 'Rock'
    } else if (number <= 66) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'A Draw! Play Again'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'A Draw! Play Again'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper'
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'A Draw! Play Again'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock'
    } else {
        return 'You Lose! Rock beats Scissors'
    }
}