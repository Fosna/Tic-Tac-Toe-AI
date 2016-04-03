import * as angular from "angular";
import * as  iScopeExtensions from "./IScopeExtensions";

// export interface IMainScope extends angular.IScope {
//     difficulty: string;
// }

const mainController = function (app: angular.IModule) {
    app.controller("MainController", ["$scope", function ($scope: IMainScope) {
        $scope.difficulty = "not set";
    }]);
};

export default mainController; 