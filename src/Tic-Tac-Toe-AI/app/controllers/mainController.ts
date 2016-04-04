import * as angular from "angular";
import * as  interfaces from "../interfaces";
import AI from "../ai";
import Game from "../game";
import Ui from "../ui";
import DifficultyBoxFactory from "../factory/difficultyBoxFactory";

const mainController = function (app: angular.IModule) {
    app.controller("MainController", ["$scope", function ($scope: interfaces.IMainScope) {
        $scope.difficultyBox = DifficultyBoxFactory.instance;
        $scope.intialControlsVisible = true;
        $scope.isHuman = false;
        
        $scope.startGame = function () {
            var myScope = <interfaces.IMainScope>this;
            
            if (myScope.difficultyBox.getValue()) {
                const aiPlayer = new AI(myScope.difficultyBox.getValue());
                const uiInstance = new Ui(myScope);
                const game = new Game(aiPlayer, uiInstance);

                aiPlayer.plays(game);

                game.start();
            }
            
        };
        
        $scope.showCurrentView = function (turn) {
            var myScope = <interfaces.IMainScope>this;
            
            myScope.isHuman = turn === "human";
            myScope.isWon = turn === "won";
            myScope.isLost = turn === "lost";
            myScope.isDraw = turn === "draw";
            
            // TODO: Why do I need it.
            myScope.$evalAsync();
        };
    }]);
};

export default mainController; 