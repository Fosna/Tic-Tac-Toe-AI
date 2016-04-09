interface ICellVm {
    classes: string;
    symbol: string;
    setSymbol(symbol: string): void;
    isOccupied(): boolean;
}

class CellVm {
    classes: string;
    symbol: string;
    
    private static cellClass = "cell";
    private static redClass = "red";
    private static greenClass = "green"
    private static noSymbol = "";
    private static symbolToColorClass = {
        "X": CellVm.greenClass,
        "O": CellVm.redClass,
    };
    
    constructor() {
        this.classes = CellVm.cellClass;
        this.symbol = CellVm.noSymbol;
    }
    
    setSymbol(symbol) {
        this.classes = [CellVm.cellClass, CellVm.symbolToColorClass[symbol]].join(" ");
        this.symbol = symbol;
    }
    
    isOccupied() {
        const isOccupied = this.symbol !== CellVm.noSymbol;
        return isOccupied;
    }
}

export {
    CellVm as default,
    CellVm,
    ICellVm
}