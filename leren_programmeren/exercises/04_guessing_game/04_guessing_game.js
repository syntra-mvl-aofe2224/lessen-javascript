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

console.log('hello world');

// alert
// alert('hello world');

// confirm
// let yesOrNo = confirm('Are you hungry?');
// console.log(yesOrNo);

// prompt
// let name = prompt('What is your name?');
// console.log(name);

console.log(Math.floor(Math.random() * 11));

// Math.floor(Math.random() * 11) -> random getal tussen 0 en 10

let number = prompt('Guess a number between 0 and 10?');
console.log(Number.parseInt(number));
