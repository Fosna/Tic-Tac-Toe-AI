import AiAction from "./aiAction";
import Game from "./game";
import State from "./state";


class AI {

    private levelOfIntelligence: string;
    private game: Game;

    /*
     * Constructs an AI player with a specific level of intelligence
     * @param level [String]: the desired level of intelligence
     */
    constructor(level) {
        //private attribute: level of intelligence the player has
        this.levelOfIntelligence = level;

        //private attribute: the game the player is playing
        this.game = null;
    }

    /*
     * private recursive function that computes the minimax value of a game state
     * @param state [State] : the state to calculate its minimax value
     * @returns [Number]: the minimax value of the state
     */
    minimaxValue(state: State) {
        if(state.isTerminal()) {
            //a terminal game state is the base case
            return Game.score(state);
        } 
        else {
            var stateScore; // this stores the minimax value we'll compute

            if(state.turn === "X")
            // X wants to maximize --> initialize to a value smaller than any possible score
                stateScore = -1000;
            else
            // O wants to minimize --> initialize to a value larger than any possible score
                stateScore = 1000;

            var availablePositions = state.emptyCells();

            //enumerate next available states using the info form available positions
            var availableNextStates = availablePositions.map(function(pos) {
                var action = new AiAction(pos);

                var nextState = action.applyTo(state);

                return nextState;
            });

            /* calculate the minimax value for all available next states
             * and evaluate the current state's value */
            availableNextStates.forEach(nextState => {
                var nextScore = this.minimaxValue(nextState);
                if(state.turn === "X") {
                    // X wants to maximize --> update stateScore iff nextScore is larger
                    if(nextScore > stateScore)
                        stateScore = nextScore;
                }
                else {
                    // O wants to minimize --> update stateScore iff nextScore is smaller
                    if(nextScore < stateScore)
                        stateScore = nextScore;
                }
            });

            return stateScore;
        }
    }

    /*
     * private function: make the ai player take a blind move
     * that is: choose the cell to place its symbol randomly
     * @param turn [String]: the player to play, either X or O
     */
    takeABlindMove(turn: string) {
        var available = this.game.currentState.emptyCells();
        var randomCell = available[Math.floor(Math.random() * available.length)];
        var action = new AiAction(randomCell);

        return action.movePosition;
    }

    /*
     * private function: make the ai player take a novice move,
     * that is: mix between choosing the optimal and suboptimal minimax decisions
     * @param turn [String]: the player to play, either X or O
     */
    takeANoviceMove(turn) {
        var available = this.game.currentState.emptyCells();

        //enumerate and calculate the score for each available actions to the ai player
        var availableActions = available.map(pos => {
            var action =  new AiAction(pos); //create the action object
            var nextState = action.applyTo(this.game.currentState); //get next state by applying the action

            action.minimaxVal = this.minimaxValue(nextState); //calculate and set the action's minimax value

            return action;
        });

        //sort the enumerated actions list by score
        if(turn === "X")
        //X maximizes --> sort the actions in a descending manner to have the action with maximum minimax at first
            availableActions.sort(AiAction.DESCENDING);
        else
        //O minimizes --> sort the actions in an ascending manner to have the action with minimum minimax at first
            availableActions.sort(AiAction.ASCENDING);

        /*
         * take the optimal action 40% of the time, and take the 1st suboptimal action 60% of the time
         */
        var chosenAction;
        if(Math.random()*100 <= 40) {
            chosenAction = availableActions[0];
        }
        else {
            if(availableActions.length >= 2) {
                //if there is two or more available actions, choose the 1st suboptimal
                chosenAction = availableActions[1];
            }
            else {
                //choose the only available actions
                chosenAction = availableActions[0];
            }
        }

        return chosenAction.movePosition;
    };

    /*
     * private function: make the ai player take a master move,
     * that is: choose the optimal minimax decision
     * @param turn [String]: the player to play, either X or O
     */
    takeAMasterMove(turn) {
        var available = this.game.currentState.emptyCells();

        //enumerate and calculate the score for each avaialable actions to the ai player
        var availableActions = available.map(pos => {
            var action =  new AiAction(pos); //create the action object
            var next = action.applyTo(this.game.currentState); //get next state by applying the action

            action.minimaxVal = this.minimaxValue(next); //calculate and set the action's minmax value

            return action;
        });

        //sort the enumerated actions list by score
        if(turn === "X")
        //X maximizes --> sort the actions in a descending manner to have the action with maximum minimax at first
            availableActions.sort(AiAction.DESCENDING);
        else
        //O minimizes --> sort the actions in an ascending manner to have the action with minimum minimax at first
            availableActions.sort(AiAction.ASCENDING);


        //take the first action as it's the optimal
        var chosenAction = availableActions[0];
        return chosenAction.movePosition;
    }


    /*
     * public method to specify the game the ai player will play
     * @param game [Game] : the game the ai will play
     */
    plays(game){
        this.game = game;
    };

    /*
     * public function: notify the ai player that it's its turn
     * @param turn [String]: the player to play, either X or O
     */
    notify(turn, callback) {
        let indx = null;
        switch(this.levelOfIntelligence) {
            //invoke the desired behavior based on the level chosen
            case "blind": 
                indx = this.takeABlindMove(turn); 
                break;
            case "novice": 
                indx = this.takeANoviceMove(turn); 
                break;
            case "master": 
                indx = this.takeAMasterMove(turn); 
                break;
        }

        callback(indx);
    };
};


export default AI;
