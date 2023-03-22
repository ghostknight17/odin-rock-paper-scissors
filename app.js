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
        return 'player-win'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'computer-win'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'draw'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'computer-win'
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'draw'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'player-win'
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'draw'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'player-win'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'computer-win'
    } else {
        return 'ERROR'
    }
}
function game () {
    let playerScore = 0;
    let computerScore = 0;
    let result1;
    result1 = playRound(playerSelection = prompt('Pick', '...'), computerSelection = getComputerChoice());
    if (result1 === 'player-win') {
        playerScore ++;
    } else if (result1 === 'computer-win') {
        computerScore ++;
    } else if (result1 === 'draw') {
        playerScore ++;
        computerScore ++;
    } else {result1 = 'ERROR'}
    console.log(`computer pick: ${computerSelection}`, result1, playerScore, computerScore)
    let result2;
    result2 = playRound(playerSelection = prompt('Pick', '...'), computerSelection = getComputerChoice());
    if (result2 === 'player-win') {
        playerScore ++;
    } else if (result2 === 'computer-win') {
        computerScore ++;
    } else if (result2 === 'draw') {
        playerScore ++;
        computerScore ++;
    } else {result2 = 'ERROR'}
    console.log(`computer pick: ${computerSelection}`, result2, playerScore, computerScore)
    let result3;
    result3 = playRound(playerSelection = prompt('Pick', '...'), computerSelection = getComputerChoice());
    if (result3 === 'player-win') {
        playerScore ++;
    } else if (result3 === 'computer-win') {
        computerScore ++;
    } else if (result3 === 'draw') {
        playerScore ++;
        computerScore ++;
    } else {result3 = 'ERROR'}
    console.log(`computer pick: ${computerSelection}`, result3, playerScore, computerScore)
     if (playerScore >= 3) {
        console.log('player wins')
    } else if (computerScore >= 3) {
        console.log('computer wins')
    } else {
    let result4;
    result4 = playRound(playerSelection = prompt('Pick', '...'), computerSelection = getComputerChoice());
    if (result4 === 'player-win') {
        playerScore ++;
    } else if (result4 === 'computer-win') {
        computerScore ++;
    } else if (result4 === 'draw') {
        playerScore ++;
        computerScore ++;
    } else {result4 = 'ERROR'}
    console.log(`computer pick: ${computerSelection}`, result4, playerScore, computerScore)
    } 
    if (playerScore >= 3) {
    console.log('player wins')
    } else if (computerScore >= 3) {
    console.log('computer wins')
    } else {
    let result5;
    result5 = playRound(playerSelection = prompt('Pick', '...'), computerSelection = getComputerChoice());
    if (result5 === 'player-win') {
        playerScore ++;
    } else if (result5 === 'computer-win') {
        playerScore ++;
        computerScore ++;
    } else if (result5 === 'draw') {
        playerScore ++;
        computerScore ++;
    } else {result5 = 'ERROR'}
    console.log(`computer pick: ${computerSelection}`, result5, playerScore, computerScore)
    } if (playerScore >= 3) {
    console.log('player wins')
    } else if (computerScore >= 3) {
    console.log('computer wins')
    }}