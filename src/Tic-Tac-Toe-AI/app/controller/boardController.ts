import * as angular from "angular";
import { IBoardVm } from "../vm/boardVm";
import { IGameService } from "../service/gameService";

// TODO: Export all interfaces at the end of the file.
export interface IBoardController {
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

export default BoardController;