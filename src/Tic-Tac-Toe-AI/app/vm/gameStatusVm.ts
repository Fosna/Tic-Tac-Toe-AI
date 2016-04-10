import * as angular from "angular";

interface IGameStatusUi {
    switchViewTo(turn: string); 
}

interface IGameStatusVm extends IGameStatusUi {
    intialControlsVisible: boolean;
    
    isHuman: boolean;
    isAi: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;   
}


class GameStatusVm implements IGameStatusVm {
    intialControlsVisible: boolean;
    
    isHuman: boolean;
    isAi: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;
    
    constructor() {
        this.intialControlsVisible = true;
    }
    
    private showGameStatus(turn) {
        this.isHuman = turn === "human";
        this.isWon = turn === "won";
        this.isLost = turn === "lost";
        this.isDraw = turn === "draw";
    };
    
    switchViewTo(turn: string) {
        if(this.intialControlsVisible) {
            // If the game is just starting.
            this.intialControlsVisible = false;
        }
        
        this.showGameStatus(turn);
    };
}

export {
    GameStatusVm as default,
    IGameStatusUi,
    IGameStatusVm
}