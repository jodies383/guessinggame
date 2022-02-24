let guess = document.querySelector(".guess")
let submitGuessBtn = document.querySelector(".submit")
let message = document.querySelector(".message")
let newGame = document.querySelector(".newGameMsg")
var randomNumber = Math.ceil((Math.random() * 100))
let regex = /^[1-9][0-9]?$|^100$/;
let counter = document.querySelector(".guesses")
let count = 0

submitGuessBtn.addEventListener('click', guessGame)

function guessGame() {
    let userGuess = guess.value
    if (!regex.test(userGuess)) {
        document.getElementById("message").style.color = "red";
        message.innerHTML = "Please enter a number between 1 and 100"
        setTimeout(() => { message.innerHTML = "" }, 2000);
    }
    else if (userGuess > randomNumber) {
        count++
        document.getElementById("message").style.color = "#f57542";
        message.innerHTML = "Your guess is too high"
        setTimeout(() => { message.innerHTML = "" }, 2000);
    }
    else if (userGuess < randomNumber) {
        count++
        document.getElementById("message").style.color = "#f57542";
        message.innerHTML = "Your guess is too low"
        setTimeout(() => { message.innerHTML = "" }, 2000);
    }
    else if (userGuess == randomNumber) {
        count = 0
        guess.value = ''
        message.innerHTML = `Correct, the secret number is ${userGuess}!`
        document.getElementById("message").style.color = "green";
        setTimeout(() => { message.innerHTML = "New game started" }, 1000)
        setTimeout(() => { message.innerHTML = "" }, 4000);
        randomNumber = Math.ceil((Math.random() * 100),
            setTimeout(() => { randomNumber }, 5000))

    }
    if (count >= 8) {
        if (userGuess != randomNumber) {
            count = 0
            guess.value = ''
            message.innerHTML = `Oh no! the number was ${randomNumber}`
            document.getElementById("message").style.color = "#f57542";
            setTimeout(() => { message.innerHTML = "New game started" }, 2000)
            setTimeout(() => { document.getElementById("message").style.color = "green"; }, 2000)
            setTimeout(() => { message.innerHTML = "" }, 5000);
            randomNumber = Math.ceil((Math.random() * 100),
                setTimeout(() => { randomNumber }, 5000))
        }
    }
    counter.innerHTML = count
}
guess.value = '';