const randomNumer = parseInt(Math.random() * 10 + 1);
console.log(randomNumer)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please Enter a Valid number`);
    } else if(guess < 1) {
        alert('Please Enter a number more than 1');
    } else if (guess > 100) {
        alert('Please Enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. random number was ${randomNumer}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumer){
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumer ) {
        displayMessage(`Number is Too Low`);
    }else if(guess > randomNumer) {
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML =  `${11 - numGuess}`;
}

function displayMessage(message){
     lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disable', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
    randomNumbe =  parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess.innerHTML = 1
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disable');
    startOver.removeChild(p)  
    playGame = true
    })
}
