import BoxFactory from "./boxFactory";

// Should instantiate all factories when initialized.
// Instantiated factories are singletons.
class MainFactory {
    private static isInitialized: boolean = false;
    
    static difficultyFactory: BoxFactory;
    
    static init() {
        if (MainFactory.isInitialized === false) {
            MainFactory.difficultyFactory = new BoxFactory();
        }   
    }
}

export default MainFactory;