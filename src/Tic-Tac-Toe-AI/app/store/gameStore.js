import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "../action/actionTypes.js";
import AI from "../model/AI.js";
import Game from "../model/Game.js";
import EventEmitter from "events";
import GameStoreEvents from "./gameStoreEvents.js";
import HumanGameStatus from "../model/humanGameStatus.js";

class GameStoreEmitter extends EventEmitter {
    constructor() {
        super();
        
        this.humanMoveCallback = null;
        this.cells = this.initCells();
        
        // bind this
        Dispatcher.register(action => this.dispatcherListener(action));
    }
    
    initCells() {
        const cells = [];
        for(let i = 0; i < 9; i++) {
            cells.push(null);
        }
        return cells;
    }
    
    dispatcherListener(action) {
        
        switch (action.actionType) {
            case ActionTypes.DIFFICULTY_SET:
                this.startGame(action.difficulty);
                break;
            case ActionTypes.CELL_CLICKED:
                this.humanMadeAMove(action.index);
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
    
    humanMadeAMove(cellIndex) {
        // Should be human move and unoccupied cell.
        if (this.gameStatus === HumanGameStatus.HUMAN && !this.cells[cellIndex]) {
            this.humanMoveCallback(cellIndex);
        }
        
    }
    
    switchViewTo(gameStatus) {
        this.gameStatus = gameStatus;
        this.fireGameStatusChange();
    }
    
    getGameStatus() {
        return this.gameStatus;
    }
    
    getCells() {
        return this.cells;
    };
    
    fireGameStatusChange() {
        this.emit(GameStoreEvents.GAME_STATUS_CHANGE);
    }
    
    onGameStatusChange(handler) {
        this.on(GameStoreEvents.GAME_STATUS_CHANGE, handler);
    }
    
    removeOnGameStatusChange(handler) {
        this.removeListener(GameStoreEvents.GAME_STATUS_CHANGE, handler);
    }
    
    humanMove(callback) {
        this.humanMoveCallback = callback;
    }
    
    insertAt(index, symbol) {
        this.cells[index] = symbol;
        this.fireBoardChange();
    }
    
    fireBoardChange() {
        this.emit(GameStoreEvents.BOARD_CHANGE);
    }
    
    onBoardChange(handler) {
        this.on(GameStoreEvents.BOARD_CHANGE, handler);
    }
    
    removeOnBoardChange(handler) {
        this.removeListener(GameStoreEvents.BOARD_CHANGE, handler);
    }
}

// Export singleton.
const GameStore = new GameStoreEmitter();

export default GameStore;

