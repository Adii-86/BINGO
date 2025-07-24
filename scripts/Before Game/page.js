export function renderBeforeStartPage() {
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
      <input class="input-cell" maxlength="2">`;
  }

  gameContainer.innerHTML = gameContainerHTML;
}
