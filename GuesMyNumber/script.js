'use stricks';

let secretNumber = Math.trunc((Math.random() * 20) + 1)
document.querySelector(`.number`).value = secretNumber;

function displayMessage(message){
    document.querySelector(`.message`).textContent = message;
}

let score = 20;
let highscore = 0;
document.querySelector(`.check`).addEventListener(`click`, () => {
    const guess = document.querySelector(`.guess`).value;
    if(!guess){
        displayMessage(`It's not a Number`);
    }else if(guess == secretNumber){
            displayMessage(`Congratulations you win!!!`);

            document.querySelector('body').style.backgroundColor = `#60b347`;
            document.querySelector(`.number`).style.width = `30rem`;

            if(score > highscore){
                highscore = score;
                document.querySelector(`.highscore`).textContent = `${score}`;
            }
    }else if(guess != secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? `Your number higer than` : `Your number lower than`);
            score--;
            document.querySelector(`.score`).textContent = `${score}`;
        }else if(score < 1){
            displayMessage(`You lost the game`);
        }
    }
})

const again = document.querySelector(`.again`).addEventListener(`click`, () => {
    score = 20;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.score`).textContent = score;
    displayMessage(`Start guessing...`);
    secretNumber = Math.trunc((Math.random() * 20) + 1)
})
