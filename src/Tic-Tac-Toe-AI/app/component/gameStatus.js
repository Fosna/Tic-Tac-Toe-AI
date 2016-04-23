import React from "react";
import Difficulty from "./difficulty.js";

const GameStatus = React.createClass({
    render: function () {
        return (
            <div className='control'>
                
                <h1>{ this.props.gameStatus }</h1>
                
                <Difficulty />
                    
                <div>It's your turn ...</div>
                <div>
                    <img src = 'imgs/robot.png' id = 'robot' class = 'robot' />
                    <p>Wait for it ...</p>
                </div>
                <div>You won !</div>
                <div>You lost !</div>
                <div>It's a Draw</div>
            </div>
        );
    }
});

export default GameStatus;