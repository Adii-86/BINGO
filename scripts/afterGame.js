import { postGameData, updateCut } from "../data/postGameData.js";

function generateHTML() {
  const container = document.querySelector(".js-container");
  container.innerHTML = `      
    <div class="header js-header"></div>
    <div class="game-container js-game-container"></div>
  `;

  let headerHTML = "";
  const header = document.querySelector(".js-header");
  const headerElems = ["B", "I", "N", "G", "O"];
  let cutted = postGameData.bingoCutted;
  headerElems.forEach((elem) => {
    const [clicked, visible] = cutted > 0 ? ["clicked", "visible"] : ["", ""];
    headerHTML += `
      <div class="header-cell ${clicked}">
        ${elem}
        <img src="Images/cut.png" class="x-mark ${visible}"/>
      </div>
    `;
    cutted--;
  });

  header.innerHTML = headerHTML;

  const gameBoard = postGameData.gameBoard;
  let gameContainerHTML = "";
  const gameContainer = document.querySelector(".js-game-container");
  const currBoard = postGameData.currBoard;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const [clicked, visible] =
        currBoard[i][j] === "clicked" ? ["clicked", "visible"] : ["", ""];

      gameContainerHTML += `
        <div class="cell ${clicked}" data-row="${i}" data-col="${j}">
        ${gameBoard[i][j]}
        <img src="Images/xmark.svg" class="x-mark ${visible}"/>
        </div>
      `;
    }
  }

  gameContainer.innerHTML = gameContainerHTML;
}

function eventListners() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      const currBoard = postGameData.currBoard;
      const row = Number(cell.dataset.row),
        col = Number(cell.dataset.col);
      if (currBoard[row][col] === "") {
        currBoard[row][col] = "clicked";
        updateCut(row, col);
        renderAfterStart();
        if (endedGame()) {
          showGameEndPopUp();
        }
      }
    });
  });
}

function endedGame() {
  return postGameData.bingoCutted === 5;
}

function showGameEndPopUp() {
  const popupHTML = `
    <div class="popup-overlay">
      <div class="popup">
        <h2>You Win!</h2>
        <button class="restart-btn js-restart-btn">Restart Game</button>
      </div>
    </div>
  `;

  document.body.innerHTML += popupHTML;

  document.querySelector(".js-restart-btn").addEventListener("click", () => {
    localStorage.clear(); // clear prev data for the new game
    location.reload();
  });
}

export function renderAfterStart() {
  // Generating part
  generateHTML();

  // Event Listner Part
  eventListners();
}
