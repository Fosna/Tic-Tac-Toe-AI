import * as angular from "angular";
import DifficultyBoxFactory from "./factory/difficultyBoxFactory";

export interface IMainScope extends angular.IScope {
    intialControlsVisible: boolean;
    difficultyBox: DifficultyBoxFactory;
    
    isHuman: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;
    
    showCurrentView(turn: string);
    startGame();
}

export interface IDifficultyVm {
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    setDifficulty(difficultyLevel: string);
}
