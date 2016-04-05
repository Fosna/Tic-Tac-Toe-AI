import * as interfaces from "../interfaces";
import * as angular from "angular";

class GameStatusVm implements interfaces.IGameStatusVm {
    intialControlsVisible: boolean;
    
    isHuman: boolean;
    isAi: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;
    
    private $scope: angular.IScope;
    
    constructor($scope: angular.IScope) {
        this.$scope = $scope;
        this.intialControlsVisible = true;
    }
    
    // TODO: Rename to show game status.
    showCurrentView(turn) {
        this.isHuman = turn === "human";
        this.isWon = turn === "won";
        this.isLost = turn === "lost";
        this.isDraw = turn === "draw";
                
        // TODO: Remove after jQuery is removed.
        this.$scope.$evalAsync();
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