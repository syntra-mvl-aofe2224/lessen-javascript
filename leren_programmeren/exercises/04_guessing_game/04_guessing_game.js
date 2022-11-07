/**
 * Generate a random number between 0 and 10 (randomNumber)
 * Prompt for a number between 0 and 10 (userNumber)
 * If userNumber is not a valid number ask again
 * Check userNumber
 *      - userNumber is too low, prompt for new number
 *      - userNumber is too high, prompt for new number
 *      - userNumber is correct
 *          > confirm: 'You won in [x] guesses, want to try again?'
 *              - if true: start over
 *              - if false: alert 'See you next time'
 */

function generateRandomNumberBetween0And10() {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);

    return randomNumber;
}

function askForNumberBetween0And10() {
    let userNumber = prompt('Enter a number between 0 and 10');
    let parsedUserNumber = Number.parseInt(userNumber);

    while (
        Number.isNaN(parsedUserNumber) ||
        parsedUserNumber < 0 ||
        parsedUserNumber > 10
    ) {
        userNumber = prompt(
            userNumber +
                ' is not a valid number. Enter a number between 0 and 10!'
        );

        parsedUserNumber = Number.parseInt(userNumber);
    }

    return parsedUserNumber;
}

function guessingGameRound() {
    let randomNumber = generateRandomNumberBetween0And10();
    let userNumber;
    let guessCount = 0;

    do {
        userNumber = askForNumberBetween0And10();
        guessCount++;

        if (userNumber < randomNumber) {
            alert(userNumber + ' is too low, try again.');
        } else {
            alert(userNumber + ' is too high, try again.');
        }
    } while (randomNumber !== userNumber && guessCount < 5);

    if (randomNumber === userNumber) {
        return confirm('You won in ' + guessCount + ' times. Play again?');
    } else {
        return confirm(
            'You lost, the number was ' + randomNumber + '. Play again?'
        );
    }
}

function guessingGameRoundWhile() {
    let randomNumber = generateRandomNumberBetween0And10();
    let userNumber = askForNumberBetween0And10();
    let guessCount = 1;

    while (randomNumber !== userNumber && guessCount < 5) {
        if (userNumber < randomNumber) {
            alert(userNumber + ' is too low, try again.');
        } else {
            alert(userNumber + ' is too high, try again.');
        }

        userNumber = askForNumberBetween0And10();
        guessCount++;
    }

    if (randomNumber === userNumber) {
        return confirm('You won in ' + guessCount + ' times. Play again?');
    } else {
        return confirm(
            'You lost, the number was ' + randomNumber + '. Play again?'
        );
    }
}

function guessingGame() {
    let playAgain = true;

    while (playAgain) {
        playAgain = guessingGameRoundWhile();
    }

    alert('See you next time!');
}

guessingGame();
