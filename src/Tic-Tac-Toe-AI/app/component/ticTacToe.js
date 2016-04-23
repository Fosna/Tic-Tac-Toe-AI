import React from "react";
import GameStatus from "./gameStatus.js";
import GameStore from "../store/gameStore.js";
import Board from "./board.js";

// TODO: Don't like that GameStore is not passed as dependency via constructor.
const TicTacToe = React.createClass({
    getInitialState: function () {
        return {
            gameStatus: GameStore.getGameStatus()
        }
    },
    
    componentDidMount: function () {
        GameStore.onGameStatusChange(this.onGameStatusChange);
        GameStore.onBoardChange(this.onBoardChange);
    },
    
    componentWillUnmount: function () {
        GameStore.removeOnGameStatusChange(this.onGameStatusChange);
        GameStore.removeOnBoardChange(this.onBoardChange);
    },
    
    onGameStatusChange: function () {
        this.setState({
            gameStatus: GameStore.getGameStatus()
        });
    },
    
    onBoardChange: function () {
        this.setState({
            cells: GameStore.getCells()
        });  
    },
    
    render: function () {
        return (
            <div>
                <Board />
                <GameStatus gameStatus={ this.state.gameStatus } />
            </div>
        );
    }
});

export default TicTacToe;