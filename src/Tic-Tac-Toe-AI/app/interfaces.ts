import * as angular from "angular";
import BoxFactory from "./factory/boxFactory";

export interface IMainScope extends angular.IScope {
    difficultyBox: BoxFactory;
    startGame();
}

export interface IDifficultyVm {
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    setDifficulty(difficultyLevel: string);
}

export interface IGameStatusUi {
    switchViewTo(turn: string); 
}

export interface IGameStatusVm extends IGameStatusUi {
    // TODO: Remove properties. Should be private. 
    // Leave only switchViewTo.
    intialControlsVisible: boolean;
    
    isHuman: boolean;
    isAi: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;   
}