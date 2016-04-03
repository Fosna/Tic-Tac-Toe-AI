import * as angular from "angular";

console.log("difficulty controller first line");

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", [function() {
        console.log("Angular is creating controller");
    }]);
    console.log("difficultyController");
};

export default difficultyController;