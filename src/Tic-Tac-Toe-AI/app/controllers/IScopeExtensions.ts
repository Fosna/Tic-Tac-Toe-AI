import * as angular from "angular";

export interface IMainScope extends angular.IScope {
    difficulty: string;
    startGame();
}

export interface IDifficultyScope extends IMainScope {
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    setDifficulty(difficultyLevel: string);
    getDifficultyClass(difficultyLevel: string);
}
