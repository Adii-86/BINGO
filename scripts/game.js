// import { isStarted } from "../data/gameData.js";
// import { renderPage } from "./afterStart.js";
// import { renderPageBeforeStart } from "./Before Game/page.js";

// if (isStarted) {
//   renderPage();
// } else {
//   renderPageBeforeStart();
// }
import { used, gameBoard } from "../data/gameData.js";

let headerHTML = "";
const header = document.querySelector(".js-header");
const headerElems = ["B", "I", "N", "G", "O"];
headerElems.forEach((elem) => {
  headerHTML += `<div class="header-cell">${elem}</div>`;
});

header.innerHTML = headerHTML;

let gameContainerHTML = "";
const gameContainer = document.querySelector(".js-game-container");

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    gameContainerHTML += `
    <input class="input-cell" maxlength="2" data-row="${i}" data-col="${j}">`;
  }
}

gameContainer.innerHTML = gameContainerHTML;

const errorElem = document.querySelector(".error-msg");
document.querySelectorAll(".input-cell").forEach((cell) => {
  cell.addEventListener("input", () => {
    const rawVal = cell.value;
    const inputVal = Number(rawVal);
    let errorMessage = "";

    if (rawVal == "") {
      errorMessage = `<span class="material-symbols-outlined">error</span>Entry should not be empty.`;
    } else if (isNaN(inputVal)) {
      errorMessage = `<span class="material-symbols-outlined">error</span>Entered value must be a valid integer.`;
    } else if (inputVal < 1) {
      errorMessage = `<span class="material-symbols-outlined">error</span>Entered value must be greater than or equal to 1.`;
    } else if (inputVal > 25) {
      errorMessage = `<span class="material-symbols-outlined">error</span>Entered value must be less than or equal to 25.`;
    } else if (used[inputVal]) {
      errorMessage = `<span class="material-symbols-outlined">error</span>All entries in the cell must be unique.`;
    } else {
      const row = Number(cell.dataset.row),
        col = Number(cell.dataset.col);
      used[inputVal] = true;
      gameBoard[row][col] = inputVal; // updating the gameBoard here;
    }
    console.log(inputVal);
    console.log(gameBoard);
    if (errorMessage) {
      errorElem.innerHTML = errorMessage;
    }
  });
});
