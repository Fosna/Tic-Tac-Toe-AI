'use strict'

/*
 * object to contain all items accessable to all control functions
 */
var globals = {};

/*
 * choosing difficulty level (onclick span.level) behavior and control
 * when a level is clicked, it becomes highlighted and the "ai.level" variable
 * is set to the chosen level
 */
$(".level").each(function() {
    var $this = $(this);
    $this.click(function() {
        $('.level').not($this).removeClass('selected').addClass('not-selected');
        $this.removeClass('not-selected').addClass('selected');

        ai.level = $this.attr("id");
        console.log(ai.level);
    });
});

/*
 * start game (onclick div.start) behavior and control
 * when start is clicked and a level is chosen, the game status changes to "running"
 * and UI view to swicthed to indicate that it's human's trun to play
 */
$(".start").click(function() {
    if(ai.level) {
        var aiPlayer = new AI(ai.level);
        globals.game = new Game(aiPlayer);

        aiPlayer.plays(globals.game);

        globals.game.start();
    }
});

/*
 * click on cell (onclick div.cell) behavior and control
 * if an empty cell is clicked when the game is running and its the human player's trun
 * get the indecies of the clickd cell, craete the next game state, upadet the UI, and
 * advance the game to the new created state
 */
 $(".cell").each(function() {
     var $this = $(this);
     $this.click(function() {
         if(globals.game.status === "running" && globals.game.currentState.turn === "X" && !$this.hasClass('occupied')) {
             var indx = parseInt($this.data("indx"));

             var next = new State(globals.game.currentState);
             next.board[indx] = "X";

             ui.insertAt(indx, "X");

             next.advanceTurn();

             globals.game.advanceTo(next);

         }
     })
 });
