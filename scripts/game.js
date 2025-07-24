import { isStarted } from "../data/gameData.js";
import { renderPage } from "./afterStart.js";
import { renderPageBeforeStart } from "./Before Game/page.js";

if (isStarted) {
  renderPage();
} else {
  renderPageBeforeStart();
}
