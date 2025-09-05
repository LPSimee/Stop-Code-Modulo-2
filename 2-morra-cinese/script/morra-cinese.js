// For this game, I used "defer" instead of an event listener for "DOMContentLoaded" and didn't use any event listeners

const choiceBtn = document.querySelector("#inizia");
const choicesCtn = document.querySelector("#gioco #scelta");

// Click event of "FAI LA TUA SCELTA" button
choiceBtn.onclick = function () {
    choicesCtn.style.display = "block";
};
