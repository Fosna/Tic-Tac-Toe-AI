// rename to scopeInterfaces

import * as angular from "angular";

export interface IMainScope extends angular.IScope {
    intialControlsVisible: boolean;
    difficulty: string;
    
    isHuman: boolean;
    isWon: boolean;
    isLost: boolean;
    isDraw: boolean;
    
    showCurrentView(turn: string);
    startGame();
}

export interface IDifficultyScope extends IMainScope {
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    setDifficulty(difficultyLevel: string);
    getDifficultyClass(difficultyLevel: string);
}
