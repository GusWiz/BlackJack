let firstCard = 6
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
    cardsEl.textContent += " " + firstCard + ", " + secondCard 
    sumEl.textContent += " " + sum
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
    sum += newCard
    startGame()
}

