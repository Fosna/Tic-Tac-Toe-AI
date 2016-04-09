import * as angular from "angular";
import {IBoxService} from "../service/boxService";
import {IGameService} from "../service/gameService";
import GameStatusVm from "../vm/gameStatusVm";

export interface IGameStatusController {
    vm: GameStatusVm;
}

class GameStatusController implements IGameStatusController {
    vm: GameStatusVm;
    
    constructor($scope: angular.IScope, 
        gameStatusScope: IBoxService<angular.IScope>,
        gameService: IGameService) {
            
        gameStatusScope.setValue($scope);
        this.vm = gameService.gameStatusVm;
    }
}

export default GameStatusController;