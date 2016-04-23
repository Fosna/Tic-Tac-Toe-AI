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

Actions.cellClicked = function (index) {
    
    
    const action = {
        actionType: ActionTypes.CELL_CLICKED,
        index: index
    };
    
    console.log("in Actions.cellClicked", index, action);
    
    Dispatcher.dispatch(action);
       
};

export default Actions;