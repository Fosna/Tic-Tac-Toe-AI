export interface IBoxService<T> {
    bindingValue: T;
    getValue() : T;
    setValue(value: T);
}

class BoxService<T> {
    bindingValue: T;

    constructor() {
        console.log("BoxService.constructor()");
    }
    
    getValue() {
        return this.bindingValue;
    }
    
    setValue(value: T) {
        this.bindingValue = value;
    }
}

export default BoxService;