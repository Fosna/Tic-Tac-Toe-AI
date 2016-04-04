// TODO: Try TS generics for value;
class BoxFactory {
    value: string;
    
    constructor() {
        this.value = null;
    }
    
    setValue(value) {
        this.value = value;
    }
    
    getValue() {
        return this.value;
    }
}

export default BoxFactory;