import { postGameData } from "../data/postGameData.js";

export function renderAfterStart() {
  const startBtn = document.querySelector(".button-container");
  startBtn.remove();

  let headerHTML = "";
  const header = document.querySelector(".js-header");
  const headerElems = ["B", "I", "N", "G", "O"];
  headerElems.forEach((elem) => {
    headerHTML += `<div class="header-cell">${elem}</div>`;
  });

  header.innerHTML = headerHTML;

  const gameBoard = postGameData.gameBoard;
  let gameContainerHTML = "";
  const gameContainer = document.querySelector(".js-game-container");

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      gameContainerHTML += `
        <div class="cell">
        ${gameBoard[i][j]}
        <img src="Images/xmark.svg" class="x-mark"/>
        </div>`;
    }
  }

  gameContainer.innerHTML = gameContainerHTML;

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.querySelector(".x-mark").classList.add("visible");
      cell.classList.add("clicked");
    });
  });
}
