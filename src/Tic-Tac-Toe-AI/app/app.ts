import * as angular from "angular";
import MainController from "./controllers/mainController";
import MainFactory from "./factory/mainFactory";
import DifficultyVm from "./vm/difficultyVm";

MainFactory.init();

// app is global angular module for this app.
var app = angular.module("App", []);

app.controller("DifficultyController", [function() {
    this.vm = new DifficultyVm(MainFactory.difficultyFactory);
}]);

MainController(app);
