import Flux from "flux";
import * as ActionTypes from "./actionTypes.js";

class ActionsSingleton {
    constructor() {
        this.dispatcher = new Flux.Dispatcher();
    }
    
    listen(handler) {
        this.dispatcher.register(handler);
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


const Actions = new ActionsSingleton();

export default Actions;