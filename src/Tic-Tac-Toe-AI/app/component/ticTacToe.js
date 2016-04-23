import React from "react";
import GameStatus from "./gameStatus.js";
import GameStore from "../store/gameStore.js";
import Board from "./board.js";

const TicTacToe = React.createClass({
    getInitialState: function () {
        return {
            gameStatus: GameStore.getGameStatus()
        }
    },
    
    componentDidMount: function () {
        GameStore.onGameStatusChange(this.onGameStatusChange);
    },
    
    componentWillUnmount: function () {
        GameStore.removeOnGameStatusChange(this.onGameStatusChange);
    },
    
    onGameStatusChange: function () {
        this.setState({
            gameStatus: GameStore.getGameStatus()
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