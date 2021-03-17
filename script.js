'use strict';

let randomNumber = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number between 1 and 20!'
        document.querySelector('.message').style.color = 'red';


    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '💎 WOW! Great shot! 💎';
        document.querySelector('.message').style.color = 'blue';
        document.body.style.backgroundColor = 'orange';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

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


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = '❤️';
    randomNumber = Math.floor((Math.random() * 20) + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.message').style.color = 'white';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})