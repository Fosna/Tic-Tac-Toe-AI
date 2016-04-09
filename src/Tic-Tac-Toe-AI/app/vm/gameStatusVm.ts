import * as angular from "angular";
import {IBoxService} from "../service/boxService";

interface IGameStatusUi {
    switchViewTo(turn: string); 
}

interface IGameStatusVm extends IGameStatusUi {
    intialControlsVisible: boolean;
    
    // TODO: ng-class binding should be smarter
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
    
    private gameStatusScopeBox : IBoxService<angular.IScope>
    
    constructor(gameStatusScopeBox : IBoxService<angular.IScope>) {
        this.intialControlsVisible = true;
        this.gameStatusScopeBox = gameStatusScopeBox;
    }
    
    // TODO: Rename to show game status.
    showCurrentView(turn) {
        this.isHuman = turn === "human";
        this.isWon = turn === "won";
        this.isLost = turn === "lost";
        this.isDraw = turn === "draw";
                
        // TODO: Remove after jQuery is removed.
        // TODO: Remove gameStatusScopeBox. 
        // this.gameStatusScopeBox.getValue().$evalAsync();
    };
    
    switchViewTo(turn: string) {
        if(this.intialControlsVisible) {
            // If the game is just starting.
            this.intialControlsVisible = false;
        }
        
        this.showCurrentView(turn);
    };
}

export {
    GameStatusVm as default,
    IGameStatusUi,
    IGameStatusVm
}