import * as angular from "angular";
import { IGameService } from "../service/GameService";


interface IStartController {
    setDifficulty(difficulty: string): void;
    startGame(): void;
}

class StartController implements IStartController {
    gameService: IGameService;
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    private difficulty: string;
    
    constructor(gameService: IGameService) {
        this.gameService = gameService;
    }
    
    setDifficulty(difficulty) { 
        this.difficulty = difficulty;
        this.setDifficultyFlags(difficulty);
    };
    
    startGame() {
        this.gameService.startGame(this.difficulty);
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