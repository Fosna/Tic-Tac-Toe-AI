import * as angular from "angular";

interface IDifficultyScope extends angular.IScope {
    difficulty: string;
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    setDifficulty(difficultyLevel: string);
    getDifficultyClass(difficultyLevel: string);
}

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", ["$scope", function($scope: IDifficultyScope) {
        $scope.difficulty = "";
        $scope.isBlind = false;
        
        $scope.setDifficulty = function(difficultyLevel) {
            this.difficulty = difficultyLevel;
            
            this.isBlind = difficultyLevel === "blind";
            this.isNovice = difficultyLevel === "novice";
            this.isMaster = difficultyLevel === "master";
        };
    }]);
};

export default difficultyController;