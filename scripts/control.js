import AI from './ai.js';
import Game from './game.js'
import State from './state.js'
import ui from './ui.js'
import $ from 'jquery'

let globals = {
    game: null
};

class control {
    constructor() {
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
                globals.game = new Game(aiPlayer);

                aiPlayer.plays(globals.game);

                globals.game.start();
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
        $(".cell").click(function() {
            let $this = $(this);
            if(globals.game && globals.game.status === "running" && globals.game.currentState.turn === "X" && !$this.hasClass('occupied')) {
                var indx = parseInt($this.data("indx"));

                var next = new State(globals.game.currentState);
                next.board[indx] = "X";

                ui.insertAt(indx, "X");

                next.advanceTurn();

                globals.game.advanceTo(next);

            }
        });
    }

}

export default control

