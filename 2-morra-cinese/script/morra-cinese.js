// For this game, I used "defer" instead of an event listener for "DOMContentLoaded" and didn't use any event listeners

const choiceBtn = document.querySelector("#inizia");
const choicesCtn = document.querySelector("#gioco #scelta");
const playerCtn = document.querySelector("#you");
const cpuCtn = document.querySelector("#cpu");

let playerPoints = document.querySelector("#punteggioYou");
let cpuPoints = document.querySelector("#punteggioCpu");
let message = document.querySelector("#risultato");

playerPoints.innerHTML = 0;
cpuPoints.innerHTML = 0;

// Player's choices
const paper = document.querySelector("#foglia");
const scissors = document.querySelector("#forbice");
const rock = document.querySelector("#sasso");

// Click event of "FAI LA TUA SCELTA" button
choiceBtn.onclick = function () {
    choicesCtn.style.display = "block";
    playerCtn.style.backgroundImage = "none";
    cpuCtn.style.backgroundImage = "none";
    message.style.display = "none";
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

// Function that plays a round of the game
function playRound(playerChoice) {
    console.log(playerChoice);
    const cpuChoiceNum = Math.floor(Math.random() * 3) + 1;

    choicesCtn.style.display = "none";
    showChoice(playerCtn, playerChoice);

    if (cpuChoiceNum == 1) {
        showChoice(cpuCtn, "forbice");
    } else if (cpuChoiceNum == 2) {
        showChoice(cpuCtn, "sasso");
    } else if (cpuChoiceNum == 3) {
        showChoice(cpuCtn, "foglia");
    }

    compareChoices(playerChoice, cpuChoiceNum, message);
}

// Function that shows the player's and cpu's choices as background images
function showChoice(container, choice) {
    container.style.backgroundImage = "url('immagini/" + choice + ".png')";
}

function compareChoices(playerChoice, cpuChoice, message) {
    if (cpuChoice == 1) {
        cpuChoice = "forbice";
    } else if (cpuChoice == 2) {
        cpuChoice = "sasso";
    } else if (cpuChoice == 3) {
        cpuChoice = "foglia";
    }

    if (playerChoice === cpuChoice) {
        message.innerHTML = "<span class='patta'>Partita patta!</span>";
    } else if (
        (playerChoice == "forbice" && cpuChoice == "foglia") ||
        (playerChoice == "sasso" && cpuChoice == "forbice") ||
        (playerChoice == "foglia" && cpuChoice == "sasso")
    ) {
        message.innerHTML = "<span class='vinta'>:) Hai vinto</span>";
        playerPoints.innerHTML = parseInt(playerPoints.innerHTML) + 1;
    } else {
        message.innerHTML = "<span class='persa'>:( Hai perso</span>";
        cpuPoints.innerHTML = parseInt(cpuPoints.innerHTML) + 1;
    }

    message.style.display = "block";
}
