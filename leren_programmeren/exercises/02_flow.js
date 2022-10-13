// Exercises

// return 'adult' if the age is higher than 17
// return 'child' if the age is lower then 18
function adultOrNot(age) {
    if (age >= 18) {
        return 'adult';
    } else {
        return 'child';
    }
}

console.log(adultOrNot(15)); // -> 'child'

// return 'what a long name' when the name is longer than 8 characters
// return 'what a sad short name' when the name is shorter than 9 characters
function longName(name) {
    if (name.length > 8) {
        return 'what a long name';
    } else {
        return 'what a sad short name';
    }
}

console.log(longName('Korneel')); // -> 'what a sad short name'

// return 'odd' when number is odd
// return 'even' when number is even
function oddOrEven(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(oddOrEven(44)); // -> 'even'

// return 'tof [word]' when the word rimes with tof
// return 'that doesn't rime' when it does not
function rimesWithTof(word) {
    let endOfWord = word.substring(word.length - 3);
    if (endOfWord === 'of') {
        return 'tof ' + word;
    } else {
        return "that doesn't rime";
    }
}

console.log(rimesWithTof('plof')); // -> 'tof plof'
console.log(rimesWithTof('boem')); // -> "that doesn't rime" || 'that doesn\'t rime'

// return true if word is already capitalised
// return false if it is not
function isCapitalised(word) {
    let firstLetter = word.charAt(0);
    let otherLetters = word.substring(1);
    let capitalisedWord =
        firstLetter.toUpperCase() + otherLetters.toLowerCase();

    return capitalisedWord === word;
}

console.log(isCapitalised('Gert')); // -> true
console.log(isCapitalised('gert')); // -> false
