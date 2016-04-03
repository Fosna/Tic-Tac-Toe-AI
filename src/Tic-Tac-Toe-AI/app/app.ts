// import control from "./control";

// new control();

import * as angular from "angular";
import DifficultyController from "./controllers/difficultyController";
import MainController from "./controllers/mainController";

// app is global angular module for this app.
var app = angular.module("App", []);

MainController(app);
DifficultyController(app);