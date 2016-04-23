import * as React from "react";

const Difficulty = React.createClass({
    getInitialState: function () {
        console.log("getInitialState called");
        
        const newState = this.createNewState(null);
        return newState;
    },
    
    onDifficultyClick: function (ev) {
        const difficulty = ev.target.id;
        const newState = this.createNewState(difficulty);
        this.setState(newState);
    },
    
    createNewState: function (difficulty) {
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
    },

    render : function () {
        return (
            <div>
                <h1>{ this.state.difficulty }</h1>
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
                
                <div className='start'>Start</div>
            </div>
        );
    }
});

Difficulty.selectedClassName = "level";
Difficulty.nonSelectedClassName = "level not-selected"

export default Difficulty;