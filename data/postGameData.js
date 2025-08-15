export const postGameData = new Object();

postGameData.gameBoard = new Array(5).fill(0).map(() => new Array(5).fill(0));
postGameData.errorBoard = new Array(5).fill(0).map(() => new Array(5).fill(""));
postGameData.usedVals = new Array(26).fill(false);
postGameData.filled = 0;

function updateUsedVals() {
  let filled = 0;
  postGameData.usedVals.fill(false);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const val = postGameData.gameBoard[i][j];
      if (val !== 0) {
        postGameData.usedVals[val] = true;
        filled++;
      }
    }
  }
  return filled;
}

export function updateGameData(val, i, j) {
  postGameData.gameBoard[i][j] = val;
  let filled = updateUsedVals();
  postGameData.filled = filled;
}
