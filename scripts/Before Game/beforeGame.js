import { renderError, validateInput } from "./inputValidation.js";
import {
  preGameData,
  updateGameData,
  transferData,
  startTheGame,
} from "../../data/preGameData.js";
import { renderPage } from "../game.js";

export function renderBeforeStart() {
  // HTML Generating before game
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

      if (preGameData.filled === 25) {
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

  // Implementing Navigation using arrow keys
  const parent = document.querySelector(".js-game-container");
  const ips = Array.from(parent.children);
  const inputs = new Array(5).fill(0).map(() => new Array(5).fill(0));
  let idx = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      inputs[i][j] = ips[idx];
      idx++;
    }
  }

  console.log(inputs);
  parent.addEventListener("keydown", (key) => {
    let r = Number(document.activeElement.dataset.row),
      c = Number(document.activeElement.dataset.col);
    switch (key.key) {
      case "ArrowUp":
        r = Math.max(0, r - 1);
        break;
      case "ArrowRight":
        c = Math.min(4, c + 1);
        break;
      case "ArrowDown":
        r = Math.min(4, r + 1);
        break;
      case "ArrowLeft":
        c = Math.max(0, c - 1);
        break;
      default:
        return;
    }
    key.preventDefault();
    inputs[r][c].focus();
  });

  // Event Listner for start button;
  document.querySelector("#start-button").addEventListener("click", () => {
    transferData(); // Transferring the data from before start to after start
    preGameData.isStarted = true;
    startTheGame();
    renderPage();
  });
}
