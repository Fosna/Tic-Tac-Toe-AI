import AI from "./ai";
import Game from "./game"
import Ui from "./Ui";
import * as $ from "jquery"

// TODO: Uppercase class name
class control {

    constructor() {
        this.setupChooseDificulty();
        this.setupStart();
    }

    /*
     * choosing difficulty level (onclick span.level) behavior and control
     * when a level is clicked, it becomes highlighted and the "ai.level" variable
     * is set to the chosen level
     */
    setupChooseDificulty() {
        $(".level").click(function() {
            const $this = $(this);
            $(".level").not($this).removeClass("selected").addClass("not-selected");
            $this.removeClass("not-selected").addClass("selected");
        });
    }

    /*
     * start game (onclick div.start) behavior and control
     * when start is clicked and a level is chosen, the game status changes to "running"
     * and UI view to swicthed to indicate that it's human's trun to play
     */
    setupStart() {
        $(".start").click(x => {
            const aiLevel = $(".selected").attr("id");
            if(aiLevel) {
                const aiPlayer = new AI(aiLevel);
                const uiInstance = new Ui();
                const game = new Game(aiPlayer, uiInstance);

                aiPlayer.plays(game);

                game.start();
            }
        });
    }

}

export default control

