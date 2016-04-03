class BoxFactory {
    value: string;
    static instance: BoxFactory;
    
    // Should be used like static constructor;
    static init() {
        if (!BoxFactory.instance) {
            BoxFactory.instance = new BoxFactory();
        }
    };
    
    constructor() {
        this.value = null;
    }
    
    setValue(value) {
        BoxFactory.instance.value = value;
    }
    
    getValue(): string {
        return BoxFactory.instance.value;
    }
}

export default BoxFactory;