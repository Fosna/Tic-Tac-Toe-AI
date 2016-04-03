import * as interfaces from "../interfaces";
import DifficultyBoxFactory from "../factory/difficultyBoxFactory";

class DifficultyVm implements interfaces.IDifficultyVm {
    private difficultyBox: DifficultyBoxFactory;
    
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    constructor() {
        this.difficultyBox = DifficultyBoxFactory.instance;
        this.difficultyBox.setValue("");
        this.setDifficultyFlags("");
    }
    
    setDifficulty(difficultyLevel: string) {
        this.difficultyBox.setValue(difficultyLevel);
        this.setDifficultyFlags(difficultyLevel);
    }
    
    private setDifficultyFlags(difficultyLevel: string) {
        this.isBlind = difficultyLevel === "blind";
        this.isNovice = difficultyLevel === "novice";
        this.isMaster = difficultyLevel === "master";
    }
}
 
export default DifficultyVm;