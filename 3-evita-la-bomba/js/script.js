// For this game, we will use event listeners to handle user interactions.

let posRandomBmb = Math.floor(Math.random() * 16); // For the bomb position, we generate a random number between 0 and 15 to match the index of the array.
let clickCounter = 0; // This variable will count the number of safe clicks made by the player.

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("#gioco > ul");
    const resultMessage = document.querySelector("#fine");
    const newGameButton = document.querySelector("#new");
}); //DOMContentLoaded

// In this section we will declare the functions we will use in the game.
