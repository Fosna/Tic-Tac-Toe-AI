import * as angular from "angular";
import {IGameService} from "../service/gameService";
import {IGameStatusVm} from "../vm/gameStatusVm";

interface IGameStatusController {
    vm: IGameStatusVm;
}

class GameStatusController implements IGameStatusController {
    vm: IGameStatusVm;
    
    constructor(gameService: IGameService) {
        this.vm = gameService.gameStatusVm;
    }
}

export {
    GameStatusController as default,
    IGameStatusController
};