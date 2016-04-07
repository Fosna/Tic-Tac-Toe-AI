import * as angular from "angular";
import {IGameService} from "../service/GameService";


export interface IStartController {
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
        this.gameService.setDifficulty(difficulty);
        this.setDifficultyFlags(difficulty);
    };
    
    startGame() {
        this.gameService.startGame();
    };
    
    private setDifficultyFlags = (difficulty: string) => {
        this.isBlind = difficulty === "blind";
        this.isNovice = difficulty === "novice";
        this.isMaster = difficulty === "master";
    }
};


export default StartController;