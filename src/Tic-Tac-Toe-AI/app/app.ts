import * as angular from "angular";

import GameService from "./service/GameService";

import StartController from "./controller/StartController";
import GameStatusController from "./controller/GameStatusController";
import BoardController from "./controller/BoardController";

console.log("monkey");


angular.module("App", []).
    service("GameService", [GameService]).
    controller("StartController", 
        ["GameService", 
            StartController
        ]).
    controller("GameStatusController", 
        ["GameService", 
            GameStatusController
        ]).
    controller("BoardController", 
        ["GameService", 
            BoardController
        ]);
