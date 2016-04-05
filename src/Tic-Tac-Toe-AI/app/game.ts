import * as interfaces from "./interfaces";
import State from "./state";
import Ai from "./ai";
import Ui from "./ui";


class Game {
    private ai: Ai;
    private ui: Ui;
    public currentState: State;
    private status: string;
    private gameStatusVm: interfaces.IGameStatusVm;
    
    /*
     * Constructs a game object to be played
     * @param autoPlayer [AIPlayer] : the AI player to be play the game with
     */
    constructor(autoPlayer, ui, gameStatusVm: interfaces.IGameStatusVm) {

        //public : initialize the ai player for this game
        this.ai = autoPlayer;

        // public : ui dependency injection
        this.ui = ui;

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
        
        this.gameStatusVm = gameStatusVm;
    }

    /*
     * public function that advances the game to a new state
     * @param state [State]: the new state to advance the game to
     */
    advanceTo(state: State) {
        this.currentState = state;
        if(state.isTerminal()) {
            this.status = "ended";

            if(state.result === "X-won")
                //X won
                this.gameStatusVm.switchViewTo("won");
            else if(state.result === "O-won")
                //X lost
                this.gameStatusVm.switchViewTo("lost");
            else
                //it's a draw
                this.gameStatusVm.switchViewTo("draw");
        }
        else {
            //the game is still running

            if(this.currentState.turn === "X") {
                this.gameStatusVm.switchViewTo("human");

                this.ui.humanMove(indx => this.makeAMove(indx));
            }
            else {
                this.gameStatusVm.switchViewTo("robot");

                //notify the AI player its turn has come up
                this.ai.notify(this.currentState.turn, indx => this.makeAMove(indx));
            }
        }
    }

    makeAMove(indx: number) {
        var next = new State(this.currentState);
        next.board[indx] = next.turn;
        this.ui.insertAt(indx, next.turn);
        next.advanceTurn();
        this.advanceTo(next);
    }

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

    /*
    * public static function that calculates the score of the x player in a given terminal state
    * @param state [State]: the state in which the score is calculated
    * @return [Number]: the score calculated for the human player
    */
    static score(state: State) {
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
};

export default Game;