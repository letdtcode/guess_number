'use strict';

const secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {
        document.querySelector('.message').textContent = 'Vui lòng nhập số vào ô trống !';
    }
    else if (guessNumber === secretNumber) {
        document.querySelector('.message').textContent = 'Bạn đã đoán đúng !';
    }
    else if (guessNumber > secretNumber) {
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Số lớn quá !';
        }
        else {
        document.querySelector('.message').textContent = 'Thua mẹ nó rồi bạn ơi !';
        }
    }
    else if (guessNumber < secretNumber) {
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Số bé quá !';
        }
        else {
            document.querySelector('.message').textContent = 'Thua mẹ nó rồi bạn ơi !';
        }
    }
});

