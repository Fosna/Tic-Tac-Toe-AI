import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "../action/actionTypes.js";
import AI from "../model/AI.js";
import Game from "../model/Game.js";

// TODO: Rename
class GameStoreClass {
    constructor() {
        // bind this
        Dispatcher.register(action => this.dispatcherListener(action));
    }
    
    dispatcherListener(action) {
        
        switch (action.actionType) {
            case ActionTypes.DIFFICULTY_SET:
                this.startGame(action.difficulty);
                break;
        }
    }
    
    startGame(difficulty) {
        if (difficulty) {
            const aiPlayer = new AI(difficulty);
            const game = new Game(aiPlayer, this.gameStatusVm, this.boardVm);
            
            game.start();
        }
    }
}

const GameStore = new GameStoreClass();

export default GameStore;

