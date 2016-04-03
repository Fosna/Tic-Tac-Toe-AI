import * as angular from "angular";

console.log("difficulty controller first line");

interface IDifficultyScope extends angular.IScope {
    msg: string;
}

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", ["$scope", function($scope: IDifficultyScope) {
        $scope.msg = "Difficulty controller message.";
        
        console.log("Angular is creating controller");
    }]);
    console.log("difficultyController");
};

export default difficultyController;