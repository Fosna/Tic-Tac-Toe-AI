import * as angular from "angular";
import Game from "../game";
import AI from "../ai";
import GameStatusVm from "../vm/gameStatusVm";
import { IBoxService } from "../service/boxService";
import BoardVm from "../vm/boardVm";

interface IGameService {
    gameStatusVm: GameStatusVm;
    boardVm: BoardVm;
    
    setDifficulty(difficulty: string) : void;
    startGame() : void;
}

class GameService implements IGameService {
    private difficulty: string;
    gameStatusVm: GameStatusVm;
    boardVm: BoardVm;
    
    constructor(gameStatusScopeBox: IBoxService<angular.IScope>) {
        this.difficulty = "";
        this.gameStatusVm = new GameStatusVm(gameStatusScopeBox);
        this.boardVm = new BoardVm();
    }
    
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    
    startGame() {
        if (this.difficulty) {
            const aiPlayer = new AI(this.difficulty);
            const game = new Game(aiPlayer, this.gameStatusVm, this.boardVm);

            aiPlayer.plays(game);

            game.start();
        }
    }
}

export {
    GameService as default,
    IGameService
}