let player ={
    name: "player",
    chips: 150
}

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = " ";
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips




function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
    
}

const startGame = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

const renderGame = () => {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = ("Do you want to draw a new card? ")
    } else if (sum === 21) {
        message = ("You've got Blackjack!")
        hasBlackJack = true;
        console.log(hasBlackJack)
    } else {
        message = ("Welp gg u so bad ")
        isAlive = false;
        console.log(isAlive)
    }
    messageEl.textContent = message;
}

const newCard = () => {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



