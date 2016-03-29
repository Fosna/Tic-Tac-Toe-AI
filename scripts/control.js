import AI from './ai.js';
import Game from './game.js'
import State from './state.js'
import ui from './ui.js'
import $ from 'jquery'

class control {
    constructor() {
        // Stash reference should never change. 
        // If it changes cell click setup will break during game play.
        this.stash = {
            game: null
        };

        this.setupChooseDificulty();
        this.setupStart();
        this.setupCellClick();
    }

    /*
     * choosing difficulty level (onclick span.level) behavior and control
     * when a level is clicked, it becomes highlighted and the "ai.level" variable
     * is set to the chosen level
     */
    setupChooseDificulty() {
        $(".level").each(function() {
            var $this = $(this);
            $this.click(function() {
                $('.level').not($this).removeClass('selected').addClass('not-selected');
                $this.removeClass('not-selected').addClass('selected');
            });
        });
    }

    /*
     * start game (onclick div.start) behavior and control
     * when start is clicked and a level is chosen, the game status changes to "running"
     * and UI view to swicthed to indicate that it's human's trun to play
     */
    setupStart() {
        $(".start").click(x => {
            var aiLevel = $('.selected').attr('id');
            if(aiLevel) {
                var aiPlayer = new AI(aiLevel);
                this.stash.game = new Game(aiPlayer);

                aiPlayer.plays(this.stash.game);

                this.stash.game.start();
            }
        });
    }

    /*
     * click on cell (onclick div.cell) behavior and control
     * if an empty cell is clicked when the game is running and its the human player's trun
     * get the indecies of the clickd cell, craete the next game state, upadet the UI, and
     * advance the game to the new created state
     */
    setupCellClick() {
        let _stash = this.stash;

        $(".cell").click(function() {
            let $this = $(this);
            if(_stash.game && _stash.game.status === "running" && _stash.game.currentState.turn === "X" && !$this.hasClass('occupied')) {
                var indx = parseInt($this.data("indx"));

                var next = new State(_stash.game.currentState);
                next.board[indx] = "X";

                ui.insertAt(indx, "X");

                next.advanceTurn();

                _stash.game.advanceTo(next);

            }
        });
    }

}

export default control

