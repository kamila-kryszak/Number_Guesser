'use strict';

let randomNumber = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

const showMessage = (message) => document.querySelector('.message').textContent = message;
const messageColor = (color) => document.querySelector('.message').style.color = color;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        showMessage('Please enter a number between 1 and 20!');
        messageColor('red');

    } else if (guess === randomNumber) {
        showMessage('💎 WOW! Great shot! 💎');
        messageColor('blue');
        document.body.style.backgroundColor = 'orange';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== randomNumber) {

        if (score > 1) {
            showMessage(guess > randomNumber ? 'Sorry! A bit too high!' : 'Sorry! A bit too low!');
            messageColor('white');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            showMessage('Sorry! Game over 😕');
            messageColor('white');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = '❤️';
    randomNumber = Math.floor((Math.random() * 20) + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    showMessage('Start guessing...');
    messageColor('white');
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})