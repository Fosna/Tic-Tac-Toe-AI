// TODO: chekc if it's used.

interface IBoxService<T> {
    bindingValue: T;
    getValue() : T;
    setValue(value: T);
}

class BoxService<T> {
    bindingValue: T;
    
    getValue() {
        return this.bindingValue;
    }
    
    setValue(value: T) {
        this.bindingValue = value;
    }
}

export {
    BoxService as default,
    IBoxService
};
