import * as angular from "angular";
import * as  interfaces from "../interfaces";
import AI from "../ai";
import Game from "../game";
import Ui from "../ui";
import MainFactory from "../factory/mainFactory";
import GameStatusVm from "../vm/gameStatusVm";

const mainController = function (app: angular.IModule) {
    app.controller("MainController", ["$scope", function ($scope: angular.IScope) {
        this.gameStatusVm = new GameStatusVm($scope);
        
        this.difficultyBox = MainFactory.difficultyFactory;
        
        this.startGame = function () {
            var myScope = <interfaces.IMainScope>this;
            
            if (myScope.difficultyBox.getValue()) {
                const aiPlayer = new AI(myScope.difficultyBox.getValue());
                const uiInstance = new Ui();
                const game = new Game(aiPlayer, uiInstance, this.gameStatusVm);

                aiPlayer.plays(game);

                game.start();
            }
            
        };
    }]);
};

export default mainController; 