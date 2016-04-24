import { IGameService } from "../service/GameService";

interface IStartController {
    setDifficulty(difficulty: string): void;
    startGame(): void;
    
    blindClass: string;
    noviceClass: string;
    masterClass: string;
}

class StartController implements IStartController {
    blindClass: string;
    noviceClass: string;
    masterClass: string;
    
    private difficulty: string;
    private gameService: IGameService;
    
    private static selectedClass = "level";
    private static notSelectedClass = "level not-selected";
    
    constructor(gameService: IGameService) {
        this.gameService = gameService;
        this.setClasses("none");
    }
    
    setDifficulty(difficulty) { 
        this.difficulty = difficulty;
        this.setClasses(difficulty);
    };
    
    startGame() {
        this.gameService.startGame(this.difficulty);
    };
    
    private setClasses = (difficulty: string) => {
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