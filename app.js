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