import * as angular from "angular";
import { IGameService } from "../service/GameService";


interface IStartController {
    setDifficulty(difficulty: string): void;
    startGame(): void;
    
    gameService: IGameService;
    blindClass: string;
    noviceClass: string;
    masterClass: string;
}

class StartController implements IStartController {
    gameService: IGameService;
    blindClass: string;
    noviceClass: string;
    masterClass: string;
    
    private difficulty: string;
    
    private static selectedClass = "";
    private static notSelectedClass = "not-selected";
    
    constructor(gameService: IGameService) {
        this.gameService = gameService;
    }
    
    setDifficulty(difficulty) { 
        this.difficulty = difficulty;
        this.setClasses(difficulty);
    };
    
    startGame() {
        this.gameService.startGame(this.difficulty);
    };
    
    private setClasses = (difficulty: string) => {
        // TODO: consider using dict.
        this.blindClass = this.noviceClass = this.masterClass = StartController.notSelectedClass;
        
        if (difficulty === "blind") {
            this.blindClass = StartController.selectedClass;
        } else if (difficulty === "novice") {
            this.noviceClass = StartController.selectedClass;
        } else if (difficulty === "master") {
            this.masterClass = StartController.selectedClass;
        }
    }
};


export {
    StartController as default,
    IStartController
};