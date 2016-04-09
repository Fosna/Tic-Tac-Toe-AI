import * as angular from "angular";
import { IGameService } from "../service/GameService";


interface IStartController {
    setDifficulty(difficulty: string) : void;
    startGame() : void;
}

class StartController implements IStartController {
    gameService: IGameService;
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    constructor(gameService: IGameService) {
        this.gameService = gameService;
    }
    
    setDifficulty(difficulty) {
        // TODO: Remove setDifficulty from gameService. 
        this.gameService.setDifficulty(difficulty);
        this.setDifficultyFlags(difficulty);
    };
    
    startGame() {
        // TODO: Remove setDifficulty from gameService. Pass difficulty in start game.
        this.gameService.startGame();
    };
    
    private setDifficultyFlags = (difficulty: string) => {
        this.isBlind = difficulty === "blind";
        this.isNovice = difficulty === "novice";
        this.isMaster = difficulty === "master";
    }
};


export {
    StartController as default,
    IStartController
};