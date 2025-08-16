// export let isStarted = false;
// export const used = new Array(26).fill(false);
// export const errorData = new Array(5).fill(0).map(() => new Array(5).fill(""));

/* 

    Game Data Contents;
    1) Game Board 5x5
    2) Row Cutted similarly Column Cutted also Diagonal
    3) Bingo Cutted Number

*/

export let postGameData = JSON.parse(localStorage.getItem("postGameData"));

if (!postGameData) {
  postGameData = new Object();
  postGameData.gameBoard = new Array(5).fill(0).map(() => new Array(5).fill(0));
  postGameData.rowCutted = new Array(5).fill(0);
  postGameData.colCutted = new Array(5).fill(0);
  postGameData.diaCutted = new Array(2).fill(0);
  postGameData.bingoCutted = 0;
}

export function saveToLocalStg() {
  localStorage.setItem("postGameData", JSON.stringify(postGameData));
}
