// export let isStarted = false;
// export const used = new Array(26).fill(false);
// export const errorData = new Array(5).fill(0).map(() => new Array(5).fill(""));

/* 

    Game Data Contents;
    1) Game Board 5x5
    2) Row Cutted similarly Column Cutted also Diagonal
    3) Bingo Cutted Number
    4) Clicked cell Board

*/

export let postGameData = JSON.parse(localStorage.getItem("postGameData"));

if (!postGameData) {
  postGameData = new Object();
  postGameData.gameBoard = new Array(5).fill(0).map(() => new Array(5).fill(0));
  postGameData.currBoard = new Array(5)
    .fill(0)
    .map(() => new Array(5).fill(""));
  postGameData.rowCutted = new Array(5).fill(0);
  postGameData.colCutted = new Array(5).fill(0);
  postGameData.diaCutted = new Array(2).fill(0);
  postGameData.bingoCutted = 0;
}

export function saveToLocalStg() {
  localStorage.setItem("postGameData", JSON.stringify(postGameData));
}

function updateBingoCut() {
  let cnt = 0;
  for (let i = 0; i < 5; i++) {
    cnt += postGameData.rowCutted[i] === 5 ? 1 : 0;
    cnt += postGameData.colCutted[i] === 5 ? 1 : 0;
  }

  if (postGameData.diaCutted[0] === 5) {
    cnt++;
  }
  if (postGameData.diaCutted[1] === 5) {
    cnt++;
  }
  postGameData.bingoCutted = cnt;
}

export function updateCut(i, j) {
  postGameData.rowCutted[i]++;
  postGameData.colCutted[j]++;
  if (i === j) {
    postGameData.diaCutted[0]++; // backward slash diagonal
  }
  if (i + j === 4) {
    postGameData.diaCutted[1]++; // forward slash diagonal
  }
  updateBingoCut();
  saveToLocalStg();
}
