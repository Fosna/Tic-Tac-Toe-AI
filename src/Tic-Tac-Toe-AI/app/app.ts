// import control from "./control";

// new control();

import * as angular from "angular";
import DifficultyController from "./difficulty/difficultyController";

// app is global angular module for this app.
var app = angular.module("App", []);

DifficultyController(app);