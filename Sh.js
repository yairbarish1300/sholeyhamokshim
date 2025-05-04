class Shoola {
  board = [];
  active = false;
  win = false;

  constructor(height, width, boombsNum) {
    this.init(width, height, boombsNum);
  }

  init(width, height, boombsNum) {
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill(0));
    }

    for (let i = 0; i < boombsNum; i++) {
      let rndA = Math.floor(Math.random() * 10);
      let rndB = Math.floor(Math.random() * 10);
      if (this.board[rndA][rndB] !== -1) {
        this.board[rndA][rndB] = -1;
      } else {
        i--;
      }
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] !== -1) {
          this.board[i][j] = 1;
        }
      }
    }

    this.active = true;
    this.win = false;
    this.render();
  }

  checkWin() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] === 1) return false;
      }
    }
    return true;
  }

  calculateMine(x, y) {
    let sum = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && j >= 0 && i < 10 && j < 10 && this.board[i][j] < 0) {
          sum++;
        }
      }
    }
    return sum;
  }

  reveal(x, y) {
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && j >= 0 && i < 10 && j < 10 && this.board[i][j] === 1) {
          this.clickCell(i, j);
        }
      }
    }
  }

  clickCell(i, j) {
    if (!this.active) return;

    this.board[i][j] *= 2;

    if (this.board[i][j] === -2) {
      this.renderLoss();
      this.active = false;
      this.win = false;
    } else if (this.board[i][j] === 2) {
      let numOfBombs = this.calculateMine(i, j);
      this.showCell(numOfBombs, i, j);
      if (numOfBombs === 0) {
        this.reveal(i, j);
      }
    }

    if (this.checkWin()) {
      this.active = false;
      this.win = true;
      this.renderWin()
      // אפשר להוסיף הודעת ניצחון כאן
    }
  }

  render() {
    const bord = document.getElementById("bord");
    bord.innerHTML = "";
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("click", () =>
        this.clickCell(Math.floor(i / 10), i % 10)
      );
      bord.appendChild(cell);
    }
  }

  renderLoss() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      let row = Math.floor(i / 10);
      let col = i % 10;
      if (this.board[row][col] <0) {
        cells[i].innerHTML = "💣";
        cells[i].classList.add("revealed");
      }
    }
    mes.innerHTML= "game over!"
    mes.style.color='red'
  }

  showCell(num, i, j) {
    let cells = document.getElementsByClassName("cell");
    let cell = cells[i * 10 + j];
    cell.classList.add("revealed");
    if (num !== 0) {
      cell.innerHTML = num;
      const colors = {
        1: "blue",
        2: "green",
        3: "red",
        4: "purple",
        5: "black",
        6: "blue",
        7: "blue",
        8: "blue",
      };
      cell.style.color = colors[num] || "black";
    }
  }
  renderWin(){
    mes.innerHTML= "you won!"
    mes.style.color='green' 
  }
}

// התחלת המשחק:
const shoolaGame = new Shoola(0, 0, 1);
const newGame=()=>{
  mes.innerHTML=""

  shoolaGame.init(0, 0, 1);
}
