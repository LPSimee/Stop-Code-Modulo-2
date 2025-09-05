// For this game, I used "defer" instead of an event listener for "DOMContentLoaded" and didn't use any event listeners

const choiceBtn = document.querySelector("#inizia");
const choicesCtn = document.querySelector("#gioco #scelta");
const playerCtn = document.querySelector("#you");
const cpuCtn = document.querySelector("#cpu");

let playerPoints = document.querySelector("#punteggioYou");
let cpuPoints = document.querySelector("#punteggioCpu");
let message = document.querySelector("#risultato");

// Player's choices
const paper = document.querySelector("#foglia");
const scissors = document.querySelector("#forbice");
const rock = document.querySelector("#sasso");

// Click event of "FAI LA TUA SCELTA" button
choiceBtn.onclick = function () {
    choicesCtn.style.display = "block";
};

// Click events of player's choices
paper.onclick = function () {
    playRound("foglia");
};

scissors.onclick = function () {
    playRound("forbice");
};

rock.onclick = function () {
    playRound("sasso");
};

function playRound(playerChoice) {
    console.log(playerChoice);
    const cpuChoice = Math.floor(Math.random() * 3) + 1;

    console.log(cpuChoice);

    choicesCtn.style.display = "none";
    showChoice(playerCtn, playerChoice);

    if (cpuChoice == 1) {
        showChoice(cpuCtn, "forbice");
    } else if (cpuChoice == 2) {
        showChoice(cpuCtn, "sasso");
    } else if (cpuChoice == 3) {
        showChoice(cpuCtn, "foglia");
    }
}

function showChoice(container, choice) {
    container.style.backgroundImage = "url('immagini/" + choice + ".png')";
}
