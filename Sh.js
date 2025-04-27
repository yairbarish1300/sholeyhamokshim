class Shoola {
    board = [];
    active = false;
    win = false;
    constructor() {

    }
    clickCell() {

    }
    checkWin() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] == 1) return false;
            }
        }
        return true;
    }
    init(whith, height, boombsNum) {
        this.board = [];
        for (let i = 0; i < 10; i++) {
            this.board.push(new Array(10).fill(0)) // creat 2 dimensions Array

        }
        for (let i = 0; i < boombsNum; i++) {
            let rndA = Math.floor(Math.random() * 10)
            let rndB = Math.floor(Math.random() * 10)
            if (!(this.board[rndA][rndB])) {
                this.board[rndA][rndB] = -1;
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] != -1) {
                    this.board[i][j] == 1
                }
            }
        }
        this.active = true
        this.win = true

    }
    calculateMine(x, y) {
        let sum = 0;
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (i >= 0 && j >= 0 && i < 10 && j < 10 && this.board[i][j] < 0) sum++;
            }
        }
        return Math.abs(sum);
    }
    reveal(x, y) {
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (this.board[i][j] == 1) this.clickCell(i, j);
            }
        }
    }
}