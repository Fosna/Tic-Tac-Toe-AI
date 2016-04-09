import * as angular from "angular";
import Game from "../game";
import AI from "../ai";
import Ui from "../ui"; 
import GameStatusVm from "../vm/gameStatusVm";
import {IBoxService} from "../service/boxService";

export interface IGameService {
    gameStatusVm: GameStatusVm;
    
    setDifficulty(difficulty: string) : void;
    startGame() : void;
}

class GameService implements IGameService {
    private difficulty: string;
    gameStatusVm: GameStatusVm;
    
    constructor(gameStatusScopeBox: IBoxService<angular.IScope>) {
        this.difficulty = "";
        this.gameStatusVm = new GameStatusVm(gameStatusScopeBox);
    }
    
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    
    startGame() {
        if (this.difficulty) {
            const aiPlayer = new AI(this.difficulty);
            const uiInstance = new Ui();
            const game = new Game(aiPlayer, uiInstance, this.gameStatusVm);

            aiPlayer.plays(game);

            game.start();
        }
    }
}

export default GameService