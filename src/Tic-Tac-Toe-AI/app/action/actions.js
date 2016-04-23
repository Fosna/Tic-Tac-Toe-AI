import Dispatcher from "../dispatcher.js";
import * as ActionTypes from "./actionTypes.js";

class Actions {
    
}

Actions.difficultySet = function(difficulty) {
    const action = {
        actionType: ActionTypes.DIFFICULTY_SET,
        difficulty: difficulty
    };
    Dispatcher.dispatch(action);
};

export default Actions;