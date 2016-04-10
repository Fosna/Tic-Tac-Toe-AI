import * as angular from "angular";
import Game from "../game";
import AI from "../ai";
import GameStatusVm from "../vm/gameStatusVm";
import BoardVm from "../vm/boardVm";

interface IGameService {
    gameStatusVm: GameStatusVm;
    boardVm: BoardVm;
    
    startGame(difficulty: string) : void;
}

class GameService implements IGameService {
    gameStatusVm: GameStatusVm;
    boardVm: BoardVm;
    
    constructor() {
        this.gameStatusVm = new GameStatusVm();
        this.boardVm = new BoardVm();
    }
    
    startGame(difficulty) {
        if (difficulty) {
            const aiPlayer = new AI(difficulty);
            const game = new Game(aiPlayer, this.gameStatusVm, this.boardVm);

            // TODO: Consider removing aiPlayer reference to the game object.
            aiPlayer.plays(game);

            game.start();
        }
    }
}

export {
    GameService as default,
    IGameService
}