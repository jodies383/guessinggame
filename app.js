const GuessingGame = () => {
    let count = 0
    let message
    let newGameMsg
    let regex = /^[1-9][0-9]?$|^100$/;

    const newGame = (userGuess, randomNumber) => {
        if (!regex.test(userGuess)) {
            newGameMsg = ""
            message = "Please enter a number between 1 and 100"
        }
        else if (userGuess > randomNumber) {
            count++
            newGameMsg = ""
            message = "Your guess is too high"
        }
        else if (userGuess < randomNumber) {
            count++
            newGameMsg = ""
            message = "Your guess is too low"
        }
        else if (userGuess == randomNumber) {
            count = 0
            message = `Correct, the secret number is ${userGuess}!`
            newGameMsg = "New game started"
            randomNumber = Math.ceil((Math.random() * 100),
                setTimeout(() => { randomNumber }, 5000))

        }
        if (count >= 8) {
            if (userGuess != randomNumber) {
                count = 0
                message = `Oh no! the number was ${randomNumber}`
                newGameMsg = "New game started"
                randomNumber = Math.ceil((Math.random() * 100),
                    setTimeout(() => { randomNumber }, 5000))
            }
        }
    }
    const returnMessage = () => message
    const returnNewGameMessage = () => newGameMsg
    const returnCount = () => count

    return {
        newGame,
        returnMessage,
        returnNewGameMessage,
        returnCount
    }
}