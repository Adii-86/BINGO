export function renderPage() {
  let headerHTML = "";
  const header = document.querySelector(".js-header");
  const headerElems = ["B", "I", "N", "G", "O"];
  headerElems.forEach((elem) => {
    headerHTML += `<div class="header-cell">${elem}</div>`;
  });

  header.innerHTML = headerHTML;

  let gameContainerHTML = "";
  const gameContainer = document.querySelector(".js-game-container");
  for (let i = 0; i < 25; i++) {
    gameContainerHTML += `
      <div class="cell">
      ${i + 1}
      <img src="Images/xmark.svg" class="x-mark"/>
      </div>`;
  }

  gameContainer.innerHTML = gameContainerHTML;

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.querySelector(".x-mark").classList.add("visible");
      cell.classList.add("clicked");
    });
  });
}
