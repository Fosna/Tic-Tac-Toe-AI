import React from "react";
import GameStatus from "./gameStatus.js";
import GameStore from "../store/gameStore.js";

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
            <GameStatus gameStatus={ this.state.gameStatus } />
        );
    }
});

export default TicTacToe;