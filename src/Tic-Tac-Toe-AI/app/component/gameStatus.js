import React from "react";
import Difficulty from "./difficulty.js";
import HumanGameStatus from "../model/humanGameStatus.js";

class GameStatus extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const gameStatus = this.props.gameStatus;
        
        let gameStatusComponent = <Difficulty />
        if (gameStatus) {
            if (gameStatus === HumanGameStatus.HUMAN) {
                gameStatusComponent = (<div>It's your turn ...</div>);
            } else if (gameStatus === HumanGameStatus.ROBOT) {
                gameStatusComponent = (
                    <div>
                        <img src = 'imgs/robot.png' id = 'robot' class = 'robot' />
                        <p>Wait for it ...</p>
                    </div>
                );
            }
            else if (gameStatus === HumanGameStatus.WON) {
                gameStatusComponent = (<div>You won !</div>);
            } 
            else if (gameStatus === HumanGameStatus.LOST) {
                gameStatusComponent = (<div>You lost !</div>);
            }
            else if (gameStatus === HumanGameStatus.DRAW) {
                gameStatusComponent = (<div>It's a Draw</div>);
            }
            else {
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