let numberInput = document.getElementById('number-input');
let guessBtn = document.getElementById('guess-btn');
let messageContainer = document.getElementById('message-container');

function genRandomNumber() {
    return Math.floor(Math.random() * 11);
}

let randomNumber = genRandomNumber();

function btnClicked() {
    console.log('click');
    let guess = Number(numberInput.value);
    
    if (guess >= 0 && guess <= 10) {
        if (randomNumber === guess) {
            messageContainer.innerText = 'You won';
        } else if (randomNumber < guess) {
            messageContainer.innerText = 'Too high'
        } else if (randomNumber > guess) {
            messageContainer.innerText = 'Too low';
            
        }
    } else {
        messageContainer.innerText = 'Not a valid number, try again';
    }
}

guessBtn.addEventListener('click', btnClicked);
