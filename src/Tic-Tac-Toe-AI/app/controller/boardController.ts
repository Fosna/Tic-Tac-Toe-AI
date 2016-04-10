import {IBoardVm} from "../vm/boardVm";
import {IGameService} from "../service/gameService";

interface IBoardController {
    vm: IBoardVm;
}

class BoardController {
    vm: IBoardVm;
    private gameService: IGameService;
    
    constructor(gameService: IGameService) {
        this.vm = gameService.boardVm;
        this.gameService = gameService;
    }
}

export {
    IBoardController,
    BoardController as default
};
    