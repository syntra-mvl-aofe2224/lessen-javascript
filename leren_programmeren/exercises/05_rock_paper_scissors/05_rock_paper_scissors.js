/**
 * Prompt for rock, paper of scissors
 * Check if valid input
 *      > if not ask again
 * Convert input to number -> rock = 0, paper = 1, scissors = 2
 * Generate random number between 0 and 2
 * Check if tie
 *      > confirm 'It was a tie, try again?'
 *          > if true > start over
 *          > if false alert score > 'Player 1 - AI 3'
 * Determine winner
 *      > player = 0 - AI = 1 > AI wins
 *      > player = 0 - AI = 2 > Player wins
 *      > player = 1 - AI = 0 > Player wins
 *      > player = 1 - AI = 2 > AI wins
 *      > player = 2 - AI = 0 > AI wins
 *      > player = 2 - AI = 1 > Player wins
 *          > confirm '[winner] won, try again?'
 *              > if true > start over
 *              > if false alert score
 */

// [EXERCISE] - Keep score (see line 79)
// [BONUS EXERCISE] - Make this game a best of 5 game:
// Whenever the AI or the player achieves 3 points he, she or it has won.

function randomNumberBetween0And2() {
    return Math.floor(Math.random() * 3);
}

function rpsToNumber(rps) {
    let rpsNumber;
    switch (rps) {
        case 'rock':
            rpsNumber = 0;
            break;
        case 'paper':
            rpsNumber = 1;
            break;
        case 'scissors':
            rpsNumber = 2;
    }

    return rpsNumber;
}

function askForRPS() {
    let userRPS = prompt('Rock, paper or scissors?').toLowerCase();

    while (
        userRPS !== 'rock' &&
        userRPS !== 'paper' &&
        userRPS !== 'scissors'
    ) {
        userRPS = prompt(
            userRPS + ' is invalid, please enter rock, paper or scissors?'
        ).toLowerCase();
    }

    return rpsToNumber(userRPS);
}

function rpsGameRound() {
    let userRPS = askForRPS();
    let aiRPS = randomNumberBetween0And2();

    if (userRPS === aiRPS) {
        return confirm('It was a tie, play again?');
    } else if (
        (userRPS === 0 && aiRPS === 2) ||
        (userRPS === 1 && aiRPS === 0) ||
        (userRPS === 2 && aiRPS === 1)
    ) {
        return confirm('You won, play again?');
    } else {
        return confirm('You lost, play again?');
    }

    // confirm 'Player: 4 | AI: 2 Play again?'
}

function rpsGame() {
    let playAgain = true;

    while (playAgain) {
        playAgain = rpsGameRound();
    }

    alert('See you next time!');
}

rpsGame();
