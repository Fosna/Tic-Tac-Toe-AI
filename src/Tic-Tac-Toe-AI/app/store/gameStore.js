import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "../action/actionTypes.js";

// TODO: Rename
class GameStoreClass {
    constructor() {
        console.log("in GameStore.constructor");
        Dispatcher.register(action => this.dispatcherListener(action));
    }
    
    dispatcherListener(action) {
        console.log(action);
        
        switch (action.actionType) {
            case ActionTypes.DIFFICULTY_SET:
                this.onDifficultySet(action.difficulty);
                break;
        }
    }
    
    onDifficultySet(difficulty) {
        console.log(difficulty);
    }
}

const GameStore = new GameStoreClass();

export default GameStore;

