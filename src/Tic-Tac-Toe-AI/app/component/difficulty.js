import React from "react";
// Actions is wrapper around dispatcher. Dispatcher is main mechanism in flux architecture. We can tollerate passing it as static class.
import Actions from "../action/actions.js";


class Difficulty extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.createNewState(null);
        
        this.onDifficultyClick = this.onDifficultyClick.bind(this);
        this.onStartClick = this.onStartClick.bind(this);
    }
    
    onDifficultyClick(ev) {
        const difficulty = ev.target.id;
        const newState = this.createNewState(difficulty);
        this.setState(newState);
    }
    
    onStartClick() {
        if (this.state.difficulty) {
            Actions.difficultySet(this.state.difficulty);
        }
    }
    
    createNewState(difficulty) {
        let blindClassName = Difficulty.nonSelectedClassName;
        let noviceClassName = Difficulty.nonSelectedClassName;
        let masterClassName = Difficulty.nonSelectedClassName;
        
        if (difficulty === "blind") {
            blindClassName = Difficulty.selectedClassName;
        } else if (difficulty === "novice") {
            noviceClassName = Difficulty.selectedClassName;
        } else if (difficulty === "master") {
            masterClassName = Difficulty.selectedClassName;
        }
        return {
            difficulty,
            blindClassName,
            noviceClassName,
            masterClassName
        }
    }

    render() {
        return (
            <div>
                <div className='difficulty'>
                    <span id='blind' className={ this.state.blindClassName } onClick={ this.onDifficultyClick }>
                        Blind 
                    </span>
                    <span id='novice' className={ this.state.noviceClassName } onClick={ this.onDifficultyClick }>
                        Novice
                    </span>
                    <span id='master' className={ this.state.masterClassName } onClick={ this.onDifficultyClick }>
                        Master!
                    </span>
                </div>
                
                <div className='start' onClick={ this.onStartClick }>Start</div>
            </div>
        );
    }
}

Difficulty.selectedClassName = "level";
Difficulty.nonSelectedClassName = "level not-selected"

export default Difficulty;