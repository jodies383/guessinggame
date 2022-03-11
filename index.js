const guess = document.querySelector(".guess")
const submitGuessBtn = document.querySelector(".submit")
let message = document.querySelector(".message")
let newGameMsg = document.querySelector(".new-game-msg")
let newGame = document.querySelector(".newGameMsg")
let randomNumber = Math.ceil((Math.random() * 100))
let regex = /^[1-9][0-9]?$|^100$/;
let counter = document.querySelector(".guesses")
let count = 0
let guessInst = GuessingGame();

submitGuessBtn.addEventListener('click', () => {
    let userGuess = guess.value
    guessInst.newGame(userGuess, randomNumber)
    message.innerHTML = guessInst.returnMessage()
    setTimeout(() => { message.innerHTML = "" }, 2000);
    setTimeout(() => { newGameMsg.innerHTML = guessInst.returnNewGameMessage() }, 2000);
    setTimeout(() => { newGameMsg.innerHTML = "" }, 5000);
    if (userGuess == randomNumber) {
        randomNumber = Math.ceil((Math.random() * 100),
            setTimeout(() => { randomNumber }, 5000))
    } else if
        (count >= 8) {
        if (userGuess != randomNumber) {
            count = 0
            guess.value = ''
            randomNumber = Math.ceil((Math.random() * 100),
                setTimeout(() => { randomNumber }, 5000))
        }
    }
    counter.innerHTML = guessInst.returnCount()
})

guess.value = '';