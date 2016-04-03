import * as iScopeExtensions from "./controllers/iScopeExtensions";
import * as $ from "jquery";

/*
 * Ui object encloses all UI related methods and attributes
 */
class Ui {
    private guiScope: iScopeExtensions.IMainScope;
    
    constructor(guiScope: iScopeExtensions.IMainScope) {
        //view model for gui
        this.guiScope = guiScope;
    }

    //helper function for async calling
    showCurrentView(turn: string) {
        this.guiScope.showCurrentView(turn);
    }

    /*
     * switchs the view on the UI depending on who's turn it switchs
     * @param turn [String]: the player to switch the view to
     */
    switchViewTo(turn: string) {
        if(this.guiScope.intialControlsVisible) {
            //if the game is just starting
            this.guiScope.intialControlsVisible = false;
        }
        this.showCurrentView(turn);
    };

    /*
     * places X or O in the specifed place in the board
     * @param i [Number] : row number (0-indexed)
     * @param j [Number] : column number (0-indexed)
     * @param symbol [String]: X or O
     */
    insertAt(indx: number, symbol: string) {
        var board = $(".cell");
        var targetCell = $(board[indx]);

        if(!targetCell.hasClass("occupied")) {
            targetCell.html(symbol);
            targetCell.css({
                color : symbol == "X" ? "green" : "red"
            });
            targetCell.addClass("occupied");
        }
    }

    humanMove(callback: (numer) => void) {
        let $unoccupied = $(".cell").not(".occupied");

        $unoccupied.click(function () {
            var $this = $(this);
            var indx = parseInt($this.data("indx"));
            $unoccupied.off("click");
            callback(indx);
        });
    }

}

export default Ui;
