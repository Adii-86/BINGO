import { postGameData, updateGameData } from "../../data/postGameData.js";

export function renderError(cell, i, j, errorElem) {
  const msg = postGameData.errorBoard[i][j];
  if (msg === "") {
    cell.classList.remove("error-cell");
  } else {
    cell.classList.add("error-cell");
  }
  errorElem.innerHTML = msg;
}

export function validateInput(rawVal, i, j) {
  let hasError = false;
  let errorMsg = "";
  if (rawVal === "") {
    postGameData.errorBoard[i][j] = errorMsg;
    return hasError;
  }

  const inputVal = Number(rawVal);
  console.log(inputVal);
  if (isNaN(inputVal)) {
    hasError = true;
    errorMsg = `<span class="material-symbols-outlined">error</span>Entered value must be a valid integer.`;
  } else if (inputVal > 25) {
    hasError = true;
    errorMsg = `<span class="material-symbols-outlined">error</span>Entered value must be less than or equal to 25.`;
  } else if (inputVal < 1) {
    hasError = true;
    errorMsg = `<span class="material-symbols-outlined">error</span>Entered value must be greater than or equal to 1.`;
  } else if (postGameData.usedVals[inputVal]) {
    hasError = true;
    errorMsg = `<span class="material-symbols-outlined">error</span>All entries in the cell must be unique.`;
  }

  if (hasError) {
    updateGameData(0, i, j);
  }
  postGameData.errorBoard[i][j] = errorMsg;
  return hasError;
}
