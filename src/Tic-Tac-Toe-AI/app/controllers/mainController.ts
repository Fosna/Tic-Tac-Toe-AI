import * as angular from "angular";
import * as  iScopeExtensions from "./iScopeExtensions";

const mainController = function (app: angular.IModule) {
    app.controller("MainController", ["$scope", function ($scope: iScopeExtensions.IMainScope) {
        $scope.difficulty = "";
        
        $scope.startGame = function () {
            var myScope = <iScopeExtensions.IMainScope>this;
            
            if (myScope.difficulty) {
                console.log(myScope.difficulty);
                console.log("Game about to start");
            }
            
        };
    }]);
};

export default mainController; 