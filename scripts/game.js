import ui from './ui.js';
import State from './state.js';


class Game {
    /*
     * Constructs a game object to be played
     * @param autoPlayer [AIPlayer] : the AI player to be play the game with
     */
    constructor(autoPlayer) {

        //public : initialize the ai player for this game
        this.ai = autoPlayer;

        // public : initialize the game current state to empty board configuration
        this.currentState = new State();

        //"E" stands for empty board cell
        this.currentState.board = ["E", "E", "E",
                                   "E", "E", "E",
                                   "E", "E", "E"];

        this.currentState.turn = "X"; //X plays first

        /*
         * initialize game status to beginning
         */
        this.status = "beginning";
    }

    /*
     * public function that advances the game to a new state
     * @param state [State]: the new state to advance the game to
     */
    advanceTo(state) {
        this.currentState = state;
        if(state.isTerminal()) {
            this.status = "ended";

            if(state.result === "X-won")
                //X won
                ui.switchViewTo("won");
            else if(state.result === "O-won")
                //X lost
                ui.switchViewTo("lost");
            else
                //it's a draw
                ui.switchViewTo("draw");
        }
        else {
            //the game is still running

            if(this.currentState.turn === "X") {
                ui.switchViewTo("human");

                ui.humanMove(indx => this.makeAMove(indx));
            }
            else {
                ui.switchViewTo("robot");

                //notify the AI player its turn has come up
                this.ai.notify(this.turn, indx => this.makeAMove(indx));
            }
        }
    }

    makeAMove(indx) {
        var next = new State(this.currentState);
        next.board[indx] = next.turn;
        ui.insertAt(indx, next.turn);
        next.advanceTurn();
        this.advanceTo(next);
    };

    /*
     * starts the game
     */
    start() {
        if(this.status === "beginning") {
            //invoke advanceTo with the initial state
            this.advanceTo(this.currentState);
            this.status = "running";
        }
    }

};

/*
 * public static function that calculates the score of the x player in a given terminal state
 * @param state [State]: the state in which the score is calculated
 * @return [Number]: the score calculated for the human player
 */
Game.score = function(state) {
    if(state.result === "X-won"){
        // the x player won
        return 10 - state.oMovesCount;
    }
    else if(state.result === "O-won") {
        //the x player lost
        return - 10 + state.oMovesCount;
    }
    else {
        //it's a draw
        return 0;
    }
}

export default Game;
