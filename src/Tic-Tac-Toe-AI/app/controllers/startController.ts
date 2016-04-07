import * as angular from "angular";
import * as interfaces from "../interfaces";


export interface IStartController {
    setDifficulty(difficulty: string) : void;
    startGame() : void;
}

class StartController implements IStartController {
    gameService: interfaces.IGameService;
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    constructor(gameService: interfaces.IGameService) {
        this.gameService = gameService;
    }
    
    setDifficulty(difficulty) {
        console.log(difficulty);
        // this.gameService.setDifficulty(difficulty);
        this.setDifficultyFlags(difficulty);
    };
    
    startGame() {
        console.log("gameStart");
        // this.gameService.startGame();
    };
    
    private setDifficultyFlags = (difficulty: string) => {
        this.isBlind = difficulty === "blind";
        this.isNovice = difficulty === "novice";
        this.isMaster = difficulty === "master";
    }
    
    monkeyDebug() {
        console.log("monkeyDebug called!");
    }
};


export default StartController;