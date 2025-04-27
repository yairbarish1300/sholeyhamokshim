class Shoola{
    board=[];
    Boombs;
    active=false;
    constructor(){

    }
    clickCell(i , j){
        if (this.board[i][j] * 2 == -2) {
            this.renderLoss()
            this.active = false
        }    
        else if(this.board[i][j]*2 == 2)
        {
            const cell = document.querySelector(`.cell[data-i="${i}"][data-j="${j}"]`);
            cell.innerHTML = value;
        }
    }
    checkWin(){

    }
    init(){
        
    }
    calculateMine(){
        
    }

    renderLoss()
    {

    }




}