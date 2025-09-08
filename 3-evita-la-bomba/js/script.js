// For this game, we will use event listeners to handle user interactions.

document.addEventListener("DOMContentLoaded", function () {
    let posRandomBmb = Math.floor(Math.random() * 16); // For the bomb position, we generate a random number between 0 and 15 to match the index of the array.
    let clickCounter = 0; // This variable will count the number of safe clicks made by the player.

    const grid = document.querySelector("#gioco > ul");
    const resultMessage = document.querySelector("#fine");
    const newGameBtn = document.querySelector("#new");
    const gridBlock = document.querySelector("#gioco span");

    generateGrid(posRandomBmb, grid);

    const gridCells = grid.children;

    console.log(gridCells)

    for (let i = 0; i < gridCells.length; i++) {
        
        gridCells[i].addEventListener("click", function () {
            if (isBomb(this)) {
                this.style.backgroundImage = "url('immagini/bomb.png')";

                showResultMessage(resultMessage, clickCounter);

                gridBlock.classList.add("bloccaGioco");
            } else {
                this.style.backgroundImage = "url('immagini/rainbow.png')";
                clickCounter++;
            }

        });
    }


    newGameBtn.addEventListener("click", newGame);
}); // DOMContentLoaded

// In this section we will declare the functions we will use in the game.
function generateGrid(posBomb, grid) {
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("li");
        if (posBomb == i) {
            cell.classList.add("bomba");
        }

        grid.appendChild(cell);
    }
}

function isBomb(cell) {
    return cell.classList.contains("bomba");
}

function showResultMessage(message, numCount) {
    message.style.display = "block";

    let numCountSpan = document.querySelector("#fine > p > span");
    numCountSpan.innerText = numCount;
}

function newGame() {
    window.location.reload();
}
