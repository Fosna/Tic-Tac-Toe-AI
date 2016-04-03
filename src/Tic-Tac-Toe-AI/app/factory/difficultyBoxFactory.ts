class DifficultyBoxFactory {
    value: string;
    static instance: DifficultyBoxFactory;
    
    // Should be used like static constructor;
    static init() {
        if (!DifficultyBoxFactory.instance) {
            DifficultyBoxFactory.instance = new DifficultyBoxFactory();
        }
    };
    
    constructor() {
        this.value = null;
    }
    
    setValue(value) {
        DifficultyBoxFactory.instance.value = value;
    }
    
    getValue(): string {
        return DifficultyBoxFactory.instance.value;
    }
}

export default DifficultyBoxFactory;