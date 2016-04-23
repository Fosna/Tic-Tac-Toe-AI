import React from "react";
import Difficulty from "./difficulty.js";

const GameStatus = React.createClass({
    render: function () {
        const gameStatus = this.props.gameStatus;
        
        let gameStatusComponent = <Difficulty />
        if (gameStatus) {
            console.log(gameStatus);
            
            gameStatusComponent = (<h1> { gameStatus } </h1>);
            
            switch(gameStatus) {
                case "human":
                    gameStatusComponent = (<div>It's your turn ...</div>);
                    break;
                case "ai":
                    gameStatusComponent = (
                        <div>
                            <img src = 'imgs/robot.png' id = 'robot' class = 'robot' />
                            <p>Wait for it ...</p>
                        </div>
                        );
                 // TODO: check status magic strings
                case "x-won":
                    gameStatusComponent = (<div>You won !</div>);
                    break;
                case "o-won":
                    gameStatusComponent = (<div>You lost !</div>); 
                    break;
                case "draw":
                    gameStatusComponent = (<div>It's a Draw</div>);
                    break;
                default:
                    throw { 
                        message: "Invalid game status!",
                        gameStatus: gameStatus  
                    };
            }
        } 
        
        return (
            <div className='control'>
                { gameStatusComponent }
            </div>
        );
    }
});

export default GameStatus;