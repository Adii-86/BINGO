import { isStarted } from "../data/gameData.js";
import { renderPage } from "./afterStart.js";
import { renderBeforeStartPage } from "./Before Game/page.js";

if (isStarted) {
  renderPage();
} else {
  renderBeforeStartPage();
}
