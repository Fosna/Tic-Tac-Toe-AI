"use strict";
var $ = require("jquery");
/*
 * Ui object encloses all UI related methods and attributes
 */
var Ui = (function () {
    function Ui() {
        //holds the state of the intial controls visibility
        this.intialControlsVisible = true;
        //holds the current visible view
        this.currentView = "";
    }
    //helper function for async calling
    Ui.prototype.showCurrentView = function (turn) {
        this.currentView = "#" + turn;
        $(this.currentView).fadeIn("fast");
    };
    /*
     * switchs the view on the UI depending on who's turn it switchs
     * @param turn [String]: the player to switch the view to
     */
    Ui.prototype.switchViewTo = function (turn) {
        var _this = this;
        if (this.intialControlsVisible) {
            //if the game is just starting
            this.intialControlsVisible = false;
            $(".intial").fadeOut({
                duration: "slow",
                done: function (x) { return _this.showCurrentView(turn); }
            });
        }
        else {
            //if the game is in an intermediate state
            $(this.currentView).fadeOut({
                duration: "fast",
                done: function (x) { return _this.showCurrentView(turn); }
            });
        }
    };
    ;
    /*
     * places X or O in the specifed place in the board
     * @param i [Number] : row number (0-indexed)
     * @param j [Number] : column number (0-indexed)
     * @param symbol [String]: X or O
     */
    Ui.prototype.insertAt = function (indx, symbol) {
        var board = $(".cell");
        var targetCell = $(board[indx]);
        if (!targetCell.hasClass("occupied")) {
            targetCell.html(symbol);
            targetCell.css({
                color: symbol == "X" ? "green" : "red"
            });
            targetCell.addClass("occupied");
        }
    };
    Ui.prototype.humanMove = function (callback) {
        var $unoccupied = $(".cell").not(".occupied");
        $unoccupied.click(function () {
            var $this = $(this);
            var indx = parseInt($this.data("indx"));
            $unoccupied.off("click");
            callback(indx);
        });
    };
    return Ui;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ui;
//# sourceMappingURL=ui.js.map