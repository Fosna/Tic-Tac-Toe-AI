import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "../action/actionTypes.js";
import AI from "../model/AI.js";
import Game from "../model/Game.js";
import EventEmitter from "events";
import GameStoreEvents from "./gameStoreEvents.js";

// TODO: Rename
class GameStoreClass extends EventEmitter {
    constructor() {
        super();
        
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
            const game = new Game(aiPlayer, this, this);
            
            game.start();
        }
    }
    
    switchViewTo(gameStatus) {
        this.gameStatus = gameStatus;
        this.fireGameStatusChange();
    }
    
    getGameStatus() {
        return this.gameStatus;
    }
    
    humanMove(callback) {
        console.log("in humanMove");
        console.log(callback);
    }
    
    fireGameStatusChange() {
        this.emit(GameStoreEvents.GAME_STATUS_CHANGE);
    }
    
    onGameStatusChange(handler) {
        this.on(GameStoreEvents.GAME_STATUS_CHANGE, handler);
    }
    
    removeOnGameStatusChange(handler) {
        this.removeListener(GameStoreEvents.GAME_STATUS_CHANGE, handler);
    }
}

const GameStore = new GameStoreClass();

export default GameStore;

