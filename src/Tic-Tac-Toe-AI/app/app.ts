import * as angular from "angular";
import GameService from "./service/GameService";
import StartController from "./controller/StartController";

// app is global angular module for this app.
var app = angular.module("App", []).
    service("GameService", [GameService]).
    controller("StartController", ["GameService", StartController]);
