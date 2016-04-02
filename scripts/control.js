"use strict";
var ai_1 = require("./ai");
var game_1 = require("./game");
var Ui_1 = require("./Ui");
var $ = require("jquery");
// TODO: Uppercase class name
var control = (function () {
    function control() {
        this.setupChooseDificulty();
        this.setupStart();
    }
    /*
     * choosing difficulty level (onclick span.level) behavior and control
     * when a level is clicked, it becomes highlighted and the "ai.level" variable
     * is set to the chosen level
     */
    control.prototype.setupChooseDificulty = function () {
        $(".level").click(function () {
            var $this = $(this);
            $(".level").not($this).removeClass("selected").addClass("not-selected");
            $this.removeClass("not-selected").addClass("selected");
        });
    };
    /*
     * start game (onclick div.start) behavior and control
     * when start is clicked and a level is chosen, the game status changes to "running"
     * and UI view to swicthed to indicate that it's human's trun to play
     */
    control.prototype.setupStart = function () {
        $(".start").click(function (x) {
            var aiLevel = $(".selected").attr("id");
            if (aiLevel) {
                var aiPlayer = new ai_1.default(aiLevel);
                var uiInstance = new Ui_1.default();
                var game = new game_1.default(aiPlayer, uiInstance);
                aiPlayer.plays(game);
                game.start();
            }
        });
    };
    return control;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = control;
//# sourceMappingURL=control.js.map