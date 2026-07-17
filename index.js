let firstCard = 6
let secondCard = 5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')
let newGame = true

function startGame() {
    renderGame()
}

function renderGame() {
    if (newGame) {
        cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1] 
        newGame = false
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo!! You got BlackJack"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let newCard = 3
    cardsEl.textContent += ", " + newCard
    renderGame()
}

