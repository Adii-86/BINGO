// import { isStarted } from "../data/gameData.js";
// import { renderPage } from "./afterStart.js";
// import { renderPageBeforeStart } from "./Before Game/page.js";

// if (isStarted) {
//   renderPage();
// } else {
//   renderPageBeforeStart();
// }

// import { used, gameBoard } from "../data/gameData.js";
// import { postGameData } from "../data/postGameData.js";
import { renderError, validateInput } from "./Before Game/inputValidation.js";
import { postGameData, updateGameData } from "../data/postGameData.js";

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

// Error handling
const errorElem = document.querySelector(".error-msg"); // Error Element
document.querySelectorAll(".input-cell").forEach((cell) => {
  cell.addEventListener("input", () => {
    const row = Number(cell.dataset.row),
      col = Number(cell.dataset.col);

    const rawVal = cell.value;
    console.log(rawVal);

    if (validateInput(rawVal, row, col)) {
      renderError(cell, row, col, errorElem);
    } else {
      renderError(cell, row, col, errorElem);
      const inputVal = Number(rawVal);
      updateGameData(inputVal, row, col);
    }

    if (postGameData.filled === 25) {
      document.querySelector("#start-button").disabled = false;
    }
  });
});

document.querySelectorAll(".input-cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    const r = Number(cell.dataset.row),
      c = Number(cell.dataset.col);
    renderError(cell, r, c, errorElem);
  });
});
