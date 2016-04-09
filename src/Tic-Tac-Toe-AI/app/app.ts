import * as angular from "angular";
import BoxService from "./service/BoxService";
import GameService from "./service/GameService";
import StartController from "./controller/StartController";
import GameStatusController from "./controller/GameStatusController";
import BoardController from "./controller/BoardController";

// app is global angular module for this app.
var app = angular.module("App", []).
    service("GameStatusScopeService", [BoxService]).
    service("GameService", 
        ["GameStatusScopeService", 
            GameService
        ]).
    controller("StartController", 
        ["GameService", 
            StartController
        ]).
    controller("GameStatusController", 
        ["$scope", 
            "GameStatusScopeService",
            "GameService", 
            GameStatusController
        ]).
    controller("BoardController", 
        ["GameService", 
            BoardController
        ]);
