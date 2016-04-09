import CellVm from "./cellVm";

// TODO: Game should depend on IBoardUi
export interface IBoardUi {
    insertAt(indx: number, turn: string): void;
}

export interface IBoardVm extends IBoardUi {
    cells: Array<CellVm>;    
}

export default class BoardVm implements IBoardVm {
    cells: Array<CellVm>;
    
    constructor() {
        this.cells = [];
        
        for(let i = 0; i < 9; i++) {
            this.cells.push(new CellVm());
        }
    }
    
    insertAt(indx, turn) {
        this.cells[indx].setSymbol(turn);
    }
}

