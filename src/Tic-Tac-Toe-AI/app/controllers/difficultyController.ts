import * as angular from "angular";
import * as interfaces from "../interfaces";
import DifficultyVm from "../vm/difficultyVm";

const difficultyController = function(app: angular.IModule) {
    app.controller("DifficultyController", [function() {
        this.vm = new DifficultyVm();
    }]);
};

export default difficultyController;