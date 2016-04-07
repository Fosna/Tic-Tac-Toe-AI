export interface IGameService {
    setDifficulty(difficulty: string) : void;
    startGame() : void;
}

class GameService implements IGameService {
    private difficulty: string;
    
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    
    startGame() {
        console.log("GameService.startGame()");
    }
}

export default GameService