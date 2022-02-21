let guess = document.querySelector(".guess")
let submitGuessBtn = document.querySelector(".submit")
let message = document.querySelector(".message")
let randomNumber = Math.ceil((Math.random() * 100))

submitGuessBtn.addEventListener('click', guessGame)

function guessGame() {
    let userGuess = guess.value

    if (userGuess > randomNumber) {
        message.innerHTML = "Your guess is too high"
    }
    else if (userGuess < randomNumber) {
        message.innerHTML = "Your guess is too low"
    }
    else if (userGuess == randomNumber) {
        message.innerHTML = `Correct, the secret number is ${userGuess}`
        setTimeout(() => { location.reload(); }, 2000)
    }

    setTimeout(() => { message.innerHTML = "" }, 2000);

}