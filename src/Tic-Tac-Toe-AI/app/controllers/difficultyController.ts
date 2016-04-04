import * as angular from "angular";
import DifficultyVm from "../vm/difficultyVm";
import MainFactory from "../factory/mainFactory";

const difficultyController = function(app: angular.IModule) {
    // TODO: MainFactory should be injected as dependency for controller function;
    
    app.controller("DifficultyController", [function() {
        this.vm = new DifficultyVm(MainFactory.difficultyFactory);
    }]);
};

export default difficultyController;