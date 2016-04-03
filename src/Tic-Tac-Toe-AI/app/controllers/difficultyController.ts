import * as angular from "angular";
import * as interfaces from "../interfaces";

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", ["$scope", function($scope: interfaces.IDifficultyScope) {
        $scope.isBlind = false;
        
        $scope.setDifficulty = function(difficultyLevel) {
            const myScope = <interfaces.IDifficultyScope>this;
            
            const mainScope = <interfaces.IMainScope>myScope.$parent;
            
            mainScope.difficulty = difficultyLevel; 
                        
            myScope.isBlind = difficultyLevel === "blind";
            myScope.isNovice = difficultyLevel === "novice";
            myScope.isMaster = difficultyLevel === "master";
        };
    }]);
};

export default difficultyController;