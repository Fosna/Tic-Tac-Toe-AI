import * as interfaces from "./interfaces";
import * as $ from "jquery";

/*
 * Ui object encloses all UI related methods and attributes
 */
class Ui {
    constructor() {
        // Empty
    }

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
