'use strict';

const randomNumber = Math.floor((Math.random() * 20) + 1);
let score = 20;


document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number between 1 and 20!'
        document.querySelector('.message').style.color = 'red';
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '💎 WOW! Great shot! 💎';
        document.querySelector('.message').style.color = 'blue';
    } else if (guess > randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Sorry! A bit too high!';
            document.querySelector('.message').style.color = 'white';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry! Game over 😕';
            document.querySelector('.message').style.color = 'white';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Sorry! A bit too low!';
            document.querySelector('.message').style.color = 'white';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry! Game over 😕';
            document.querySelector('.message').style.color = 'white';
            document.querySelector('.score').textContent = 0;
        }
    }
});