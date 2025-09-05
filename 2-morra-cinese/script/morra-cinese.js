// For this game, I used "defer" instead of an event listener for "DOMContentLoaded" and didn't use any event listeners

const choiceBtn = document.querySelector("#inizia");
const choicesCtn = document.querySelector("#gioco #scelta");

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
