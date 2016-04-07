import * as interfaces from "../interfaces";
import * as angular from "angular";
import {IBoxService} from "../service/boxService";

class GameStatusVm implements interfaces.IGameStatusVm {
    intialControlsVisible: boolean;
    
    isHuman: boolean;
    isAi: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;
    
    private gameStatusScopeBox : IBoxService<angular.IScope>
    
    constructor(gameStatusScopeBox : IBoxService<angular.IScope>) {
        this.intialControlsVisible = true;
        this.gameStatusScopeBox = gameStatusScopeBox
        
        console.log("GameStatusVm.constructor()", gameStatusScopeBox);
    }
    
    // TODO: Rename to show game status.
    showCurrentView(turn) {
        this.isHuman = turn === "human";
        this.isWon = turn === "won";
        this.isLost = turn === "lost";
        this.isDraw = turn === "draw";
                
        // TODO: Remove after jQuery is removed.
        this.gameStatusScopeBox.getValue().$evalAsync();
    };
    
    switchViewTo(turn: string) {
        if(this.intialControlsVisible) {
            //if the game is just starting
            this.intialControlsVisible = false;
        }
        
        this.showCurrentView(turn);
    };
}

export default GameStatusVm;