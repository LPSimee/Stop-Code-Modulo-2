let cardYou = document.querySelector("#you > span");
let cardCPU = document.querySelector("#cpu > span");
let message = document.querySelector("#messaggio");
const btnGioca = document.querySelector("#gioca");

// Mouse click event of "GIOCA" button
btnGioca.addEventListener("click", () => {
    cardYou.innerHTML = randomCard();
    cardCPU.innerHTML = randomCard();
});

function randomCard() {
    // It returns a random integer between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
}

function compareCards() {}
