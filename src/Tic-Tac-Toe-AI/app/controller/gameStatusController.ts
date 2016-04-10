import * as angular from "angular";
import {IBoxService} from "../service/boxService";
import {IGameService} from "../service/gameService";
import GameStatusVm from "../vm/gameStatusVm";

interface IGameStatusController {
    vm: GameStatusVm;
}

class GameStatusController implements IGameStatusController {
    vm: GameStatusVm;
    
    constructor(gameService: IGameService) {
        this.vm = gameService.gameStatusVm;
    }
}

export {
    GameStatusController as default,
    IGameStatusController
};