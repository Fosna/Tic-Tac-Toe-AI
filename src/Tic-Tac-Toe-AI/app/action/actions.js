import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "./actionTypes.js";

class ActionsSingleton {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }
    
    difficultySet(difficulty) {
        const action = {
            actionType: ActionTypes.DIFFICULTY_SET,
            difficulty: difficulty
        };
        this.dispatcher.dispatch(action);
    }

    cellClicked(index) {
        const action = {
            actionType: ActionTypes.CELL_CLICKED,
            index: index
        };
        this.dispatcher.dispatch(action); 
    }    
}


const Actions = new ActionsSingleton(Dispatcher);

export default Actions;