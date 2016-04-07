import * as angular from "angular";
import StartController from "./controllers/StartController";

// app is global angular module for this app.
var app = angular.module("App", []).
    controller("StartController", [StartController]);
