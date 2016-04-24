import React from "react";
import GameStatus from "./gameStatus.js";
import GameStore from "../store/gameStore.js";
import Board from "./board.js";

// TODO: Don't like that GameStore is not passed as dependency via constructor.
class TicTacToe extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            gameStatus: GameStore.getGameStatus(),
            cells: GameStore.getCells()
        }
        
        this.onGameStatusChange = this.onGameStatusChange.bind(this);
        this.onBoardChange = this.onBoardChange.bind(this);
    }
    
    componentDidMount() {
        GameStore.onGameStatusChange(this.onGameStatusChange);
        GameStore.onBoardChange(this.onBoardChange);
    }
    
    componentWillUnmount() {
        GameStore.removeOnGameStatusChange(this.onGameStatusChange);
        GameStore.removeOnBoardChange(this.onBoardChange);
    }
    
    onGameStatusChange() {
        this.setState({
            gameStatus: GameStore.getGameStatus()
        });
    }
    
    onBoardChange() {
        this.setState({
            cells: GameStore.getCells()
        });  
    }
    
    render() {
        return (
            <div>
                <Board cells={ this.state.cells } />
                <GameStatus gameStatus={ this.state.gameStatus } />
            </div>
        );
    }
}

export default TicTacToe;