import { renderBeforeStart } from "./Before Game/beforeGame.js";
import { renderAfterStart } from "./afterGame.js";

export function renderPage() {
  let isStarted = JSON.parse(localStorage.getItem("isStarted")) || false;
  if (!isStarted) {
    renderBeforeStart();
  } else {
    renderAfterStart();
  }
}

renderPage();
