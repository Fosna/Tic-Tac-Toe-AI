"use strict";
var state_1 = require("./state");
var Game = (function () {
    /*
     * Constructs a game object to be played
     * @param autoPlayer [AIPlayer] : the AI player to be play the game with
     */
    function Game(autoPlayer, ui) {
        //public : initialize the ai player for this game
        this.ai = autoPlayer;
        // public : ui dependency injection
        this.ui = ui;
        // public : initialize the game current state to empty board configuration
        this.currentState = new state_1.default();
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
    Game.prototype.advanceTo = function (state) {
        var _this = this;
        this.currentState = state;
        if (state.isTerminal()) {
            this.status = "ended";
            if (state.result === "X-won")
                //X won
                this.ui.switchViewTo("won");
            else if (state.result === "O-won")
                //X lost
                this.ui.switchViewTo("lost");
            else
                //it's a draw
                this.ui.switchViewTo("draw");
        }
        else {
            //the game is still running
            if (this.currentState.turn === "X") {
                this.ui.switchViewTo("human");
                this.ui.humanMove(function (indx) { return _this.makeAMove(indx); });
            }
            else {
                this.ui.switchViewTo("robot");
                //notify the AI player its turn has come up
                // TODO: Double check
                this.ai.notify(this.currentState.turn, function (indx) { return _this.makeAMove(indx); });
            }
        }
    };
    Game.prototype.makeAMove = function (indx) {
        var next = new state_1.default(this.currentState);
        next.board[indx] = next.turn;
        this.ui.insertAt(indx, next.turn);
        next.advanceTurn();
        this.advanceTo(next);
    };
    /*
     * starts the game
     */
    Game.prototype.start = function () {
        if (this.status === "beginning") {
            //invoke advanceTo with the initial state
            this.advanceTo(this.currentState);
            this.status = "running";
        }
    };
    Game.score = function (state) {
        if (state.result === "X-won") {
            // the x player won
            return 10 - state.oMovesCount;
        }
        else if (state.result === "O-won") {
            //the x player lost
            return -10 + state.oMovesCount;
        }
        else {
            //it's a draw
            return 0;
        }
    };
    return Game;
}());
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Game;
//# sourceMappingURL=game.js.map