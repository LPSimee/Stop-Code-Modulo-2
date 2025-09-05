// For this simple game, it's not required to use an event listener for the "GIOCA" button

let cardYou = document.querySelector("#you > span");
let cardCPU = document.querySelector("#cpu > span");
let message = document.querySelector("#messaggio");
const btnGioca = document.querySelector("#gioca");

// Mouse click event of "GIOCA" button
btnGioca.onclick = function () {
    cardYou.innerHTML = randomCard();
    cardCPU.innerHTML = randomCard();

    compareCards();
};

function randomCard() {
    // It returns a random integer between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
}

function compareCards() {
    // If the cards are equal, it returns a message of "parita patta"
    // NOTE: the innerHTML values are strings, so we need to cast them to integers before comparing them.
    if (parseInt(cardYou.innerHTML) == parseInt(cardCPU.innerHTML)) {
        message.innerHTML = "Partita patta!";
        return;
    }

    // If the player's card is higher than the CPU's card, it returns a message of "hai vinto", otherwise "hai perso"
    if (parseInt(cardYou.innerHTML) > parseInt(cardCPU.innerHTML)) {
        message.innerHTML = "Complimenti, hai vinto!";
    } else {
        message.innerHTML = "Mi dispiace, hai perso";
    }
}
