import React from "react";
import Difficulty from "./difficulty.js";
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
            <div className='control' ng-controller='GameStatusController as statusCtrl'>
                <Difficulty />
                <h1>{ this.state.gameStatus }</h1>
            </div>
        );
    }
});

export default TicTacToe;