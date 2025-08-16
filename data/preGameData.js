export const preGameData = new Object();

preGameData.gameBoard = new Array(5).fill(0).map(() => new Array(5).fill(0));
preGameData.errorBoard = new Array(5).fill(0).map(() => new Array(5).fill(""));
preGameData.usedVals = new Array(26).fill(false);
preGameData.filled = 0;

function updateUsedVals() {
  let filled = 0;
  preGameData.usedVals.fill(false);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const val = preGameData.gameBoard[i][j];
      if (val !== 0) {
        preGameData.usedVals[val] = true;
        filled++;
      }
    }
  }
  return filled;
}

export function updateGameData(val, i, j) {
  preGameData.gameBoard[i][j] = val;
  let filled = updateUsedVals();
  preGameData.filled = filled;
  console.log(preGameData.filled);
}

// export function transferData() {

// }
