import * as angular from "angular";
import * as  interfaces from "../interfaces";
import AI from "../ai";
import Game from "../game";
import Ui from "../ui";
import MainFactory from "../factory/mainFactory";

const mainController = function (app: angular.IModule) {
    app.controller("MainController", ["$scope", function ($scope: angular.IScope) {
        this.difficultyBox = MainFactory.difficultyFactory;
        this.intialControlsVisible = true;
        this.isHuman = false;
        
        this.startGame = function () {
            var myScope = <interfaces.IMainScope>this;
            
            if (myScope.difficultyBox.getValue()) {
                const aiPlayer = new AI(myScope.difficultyBox.getValue());
                const uiInstance = new Ui(myScope);
                const game = new Game(aiPlayer, uiInstance);

                aiPlayer.plays(game);

                game.start();
            }
            
        };
        
        this.showCurrentView = function (turn) {
            console.log(turn);
            
            var myScope = <interfaces.IMainScope>this;
            
            myScope.isHuman = turn === "human";
            myScope.isWon = turn === "won";
            myScope.isLost = turn === "lost";
            myScope.isDraw = turn === "draw";
            
            // TODO: Remove after jQuery is removed.
            $scope.$evalAsync();
        };
    }]);
};

export default mainController; 