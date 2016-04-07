import BoxFactory from "./boxFactory";
import * as interfaces from "../interfaces";

class GameFactory {
    difficultyFactory: BoxFactory;
    gameStatusUi: interfaces.IGameStatusUi;
    // TODO: provide type for boardVm
    boardUi: any;

    constructor(difficultyFactory: BoxFactory,
        gameStatusUi: interfaces.IGameStatusUi,
        // TODO: provide type for boardVm
        boardUi: any
    ) {
        this.difficultyFactory = difficultyFactory;
        this.gameStatusUi = gameStatusUi;
        this.boardUi = boardUi;
    }
    
}

export default GameFactory;