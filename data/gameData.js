export const gameBoard = new Array(5).fill(0).map(() => new Array(5).fill(0));
export let isStarted = false;
export const used = new Array(26).fill(false);
export const errorData = new Array(5).fill(0).map(() => new Array(5).fill(""));

/* 

    Game Data Contents;
    1) Game Board 5x5
    2) Row Cutted similarly Column Cutted also Diagonal
    3) Used Numbers => 26 length array show status of used in the board or not
    4) Errors Board
*/

export const gameData = new Object();
