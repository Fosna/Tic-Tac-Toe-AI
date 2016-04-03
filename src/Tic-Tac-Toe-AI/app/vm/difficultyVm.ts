import * as interfaces from "../interfaces";
import BoxFactory from "../factory/boxFactory";

class DifficultyVm implements interfaces.IDifficultyVm {
    box: BoxFactory;
        
    intialControlsVisible: boolean;
    
    isBlind: boolean;
    isNovice: boolean;
    isMaster: boolean;
    
    constructor() {
        this.box = BoxFactory.instance;
        
        this.intialControlsVisible = true;
        this.setDifficultyFlags(this.box.value);
    }
    
    setDifficulty(difficultyLevel: string) {
        this.box.setValue(difficultyLevel);
        this.setDifficultyFlags(difficultyLevel);
    }
    
    private setDifficultyFlags(difficultyLevel: string) {
        this.isBlind = difficultyLevel === "blind";
        this.isNovice = difficultyLevel === "novice";
        this.isMaster = difficultyLevel === "master";
    }
}

export default DifficultyVm;