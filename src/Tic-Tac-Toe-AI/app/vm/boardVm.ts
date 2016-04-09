import CellVm from "./cellVm";

// TODO: Game should depend on IBoardUi
interface IBoardUi {
    insertAt(indx: number, turn: string): void;
    humanMove(callback: (indx: number) => void): void;
}

interface IBoardVm extends IBoardUi {
    cells: Array<CellVm>;    
}

class BoardVm implements IBoardVm {
    cells: Array<CellVm>;
    private humanMoveCallback: (indx: number) => void;
    private isHumanMove: boolean;
    
    constructor() {
        this.cells = [];
        
        for(let i = 0; i < 9; i++) {
            this.cells.push(new CellVm());
        }
        
        this.isHumanMove = false;
    }
    
    insertAt(indx, turn) {
        this.cells[indx].setSymbol(turn);
    }
    
    humanMove(callback) {
        this.humanMoveCallback = callback;
        this.isHumanMove = true;
    }
    
    cellClick(indx) {
        if (this.cells[indx].isOccupied() === false && this.isHumanMove) {
            this.humanMoveCallback(indx);
        }
    }
}

export {
    BoardVm as default,
    IBoardUi,
    IBoardVm
};