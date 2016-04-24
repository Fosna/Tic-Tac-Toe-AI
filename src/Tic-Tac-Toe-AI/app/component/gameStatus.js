import React from "react";
import Difficulty from "./difficulty.js";

class GameStatus extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const gameStatus = this.props.gameStatus;
        
        let gameStatusComponent = <Difficulty />
        if (gameStatus) {
            switch(gameStatus) {
                // TODO: Refactor magic strings
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
                case "won":
                    gameStatusComponent = (<div>You won !</div>);
                    break;
                case "lost":
                    gameStatusComponent = (<div>You lost !</div>); 
                    break;
                case "draw":
                    gameStatusComponent = (<div>It's a Draw</div>);
                    break;
                default:
                    throw JSON.stringify({ 
                        message: "Invalid game status!",
                        gameStatus: gameStatus  
                    });
            }
        } 
        
        return (
            <div className='control'>
                { gameStatusComponent }
            </div>
        );
    }
}

export default GameStatus;