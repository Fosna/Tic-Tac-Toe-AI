import * as $ from "jquery"

/*
 * Ui object encloses all UI related methods and attributes
 */
class Ui {
    private intialControlsVisible: boolean;
    private currentView: string;
    
    constructor() {
        //holds the state of the intial controls visibility
        this.intialControlsVisible = true;

        //holds the current visible view
        this.currentView = "";
    }

    //helper function for async calling
    showCurrentView(turn: string) {
        this.currentView = "#" + turn;
        $(this.currentView).fadeIn("fast");
    }

    /*
     * switchs the view on the UI depending on who's turn it switchs
     * @param turn [String]: the player to switch the view to
     */
    switchViewTo(turn: string) {
        if(this.intialControlsVisible) {
            //if the game is just starting
            this.intialControlsVisible = false;

            $(".intial").fadeOut({
                duration : "slow",
                done : x => this.showCurrentView(turn) 
            });
        }
        else {
            //if the game is in an intermediate state
            $(this.currentView).fadeOut({
                duration: "fast",
                done: x => this.showCurrentView(turn)
            });
        }
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