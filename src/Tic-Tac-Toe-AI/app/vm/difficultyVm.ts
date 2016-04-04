import * as interfaces from "../interfaces";
import BoxFactory from "../factory/boxFactory";

class DifficultyVm implements interfaces.IDifficultyVm {
    private difficultyBox: BoxFactory;
    
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    constructor(difficultyBox: BoxFactory) {
        this.difficultyBox = difficultyBox;
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