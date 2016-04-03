import * as angular from "angular";
import * as iScopeExtensions from "./IScopeExtensions";

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", ["$scope", function($scope: iScopeExtensions.IDifficultyScope) {
        $scope.isBlind = false;
        
        $scope.setDifficulty = function(difficultyLevel) {
            const myScope = <iScopeExtensions.IDifficultyScope>this;
            
            const mainScope = <iScopeExtensions.IMainScope>myScope.$parent;
            
            mainScope.difficulty = difficultyLevel; 
                        
            myScope.isBlind = difficultyLevel === "blind";
            myScope.isNovice = difficultyLevel === "novice";
            myScope.isMaster = difficultyLevel === "master";
        };
    }]);
};

export default difficultyController;