let guess = document.querySelector(".guess")
let submitGuessBtn = document.querySelector(".submit")
let message = document.querySelector(".message")
let newGame = document.querySelector(".newGameMsg")
let randomNumber = Math.ceil((Math.random() * 100))
let regex = /^[1-9][0-9]?$|^100$/;

submitGuessBtn.addEventListener('click', guessGame)

function guessGame() {
    let userGuess = guess.value
    if (!regex.test(userGuess)){
        document.getElementById("message").style.color = "red";
        message.innerHTML = "Please enter a number between 1 and 100" 
        setTimeout(() => { message.innerHTML = "" }, 2000);
  
    }
    else if (userGuess > randomNumber) {
        document.getElementById("message").style.color = "red";
        message.innerHTML = "Your guess is too high"
        setTimeout(() => { message.innerHTML = "" }, 2000);

    }
    else if (userGuess < randomNumber) {
        document.getElementById("message").style.color = "#f57542";
        message.innerHTML = "Your guess is too low"
        setTimeout(() => { message.innerHTML = "" }, 2000);

    }
    else if (userGuess == randomNumber) {
        message.innerHTML = `Correct, the secret number is ${userGuess}!`
        document.getElementById("message").style.color = "green";
        setTimeout(() => { message.innerHTML = "New game started" }, 1000)
        setTimeout(() => { message.innerHTML = "" }, 4000);
        setTimeout(() => { location.reload(randomNumber); }, 5000)
        
    }


}