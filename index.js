let firstCard = 6
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo!! You got BlackJack"
    hasBlackJack = true
} else if (sum > 21) {
    message = "You're out of the game!"
    isAlive = false
}

console.log(message)