///////////////
// EXERCISES //
///////////////

////// Sum Until \\\\\\
// Start counting and sum every number.
// Stop at [num]

function sumUntil(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

////// Tests \\\\\\
// console.log(sumUntil(4)); // 1 + 2 + 3 + 4 > 10
// console.log(sumUntil(6)); // 1 + 2 + 3 + 4 + 5 + 6 > 21
// console.log(sumUntil(70)); // 1 + 2 + ... + 69 + 70 > 2485

////// Max \\\\\\
/*
Return the highest number
 */
function max(numOne, numTwo) {
    if (numOne > numTwo) {
        return numOne;
    } else {
        return numTwo;
    }
}

////// Tests \\\\\\
// console.log(max(2, 7)); // > 7
// console.log(max(55, 3)); // 55
// console.log(max(-44, 4)); // 4

////// Calculate \\\\\\
/*
Write a function that does the correct calculation
[operator] has following possible values:
'min', 'plus', 'multiply', 'divide'
 */

function calculate(operator, numOne, numTwo) {
    if (operator === 'min') {
        return numOne - numTwo;
    } else if (operator === 'plus') {
        return numOne + numTwo;
    } else if (operator === 'multiply') {
        return numOne * numTwo;
    } else if (operator === 'divide') {
        return numOne / numTwo;
    }

    // switch (operator) {
    //     case 'min':
    //         return numOne - numTwo;
    //     case 'plus':
    //         return numOne + numTwo;
    //     case 'multiply':
    //         return numOne * numTwo;
    //     case 'divide':
    //         return numOne / numTwo;
    // }
}

////// Tests \\\\\\
// console.log(calculate('min', 5, 3)); // > 2
// console.log(calculate('plus', 5, 3)); // > 8
// console.log(calculate('multiply', 5, 3)); // > 15
// console.log(calculate('divide', 6, 3)); // > 2

/////// Count Words \\\\\\
/*
Count all the words in [text]
 */

function countWords(text) {
    let numberOfWords = 1;

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === ' ') {
            numberOfWords += 1;
        }
    }

    return numberOfWords;
}

////// Tests \\\\\\
console.log(countWords('United suns, to the holodeck.')); // > 5
console.log(
    countWords(
        'When one traps bliss and joy, one is able to facilitate totality.'
    )
); // > 12
console.log(countWords('Captains are the bung holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung holes of the salty madness.')); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness.')
); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness . ')
); // > 9

////// First Letters \\\\\\
/*
Return a string containing all the first letters of the words in [text]
 */

function firstLetters(text) {}

////// Tests \\\\\\
console.log(firstLetters('United suns, to the holodeck.')); // > 'Ustth'
console.log(
    firstLetters(
        'When one traps bliss and joy, one is able to facilitate totality.'
    )
); // > 'Wotbajoiatft'
console.log(firstLetters('Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(firstLetters(' Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness.')
); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness . ')
); // > 'Catbhotsm'
