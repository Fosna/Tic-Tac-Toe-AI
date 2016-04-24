import React from "react";
import GameStatus from "./gameStatus.js";
import Board from "./board.js";

class TicTacToe extends React.Component{
    constructor(props) {
        super(props);
        
        this.gameStore = props.gameStore;
        
        this.state = {
            gameStatus: this.gameStore.getGameStatus(),
            cells: this.gameStore.getCells()
        }
        
        this.onGameStatusChange = this.onGameStatusChange.bind(this);
        this.onBoardChange = this.onBoardChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
    
    componentDidMount() {
        this.gameStore.onGameStatusChange(this.onGameStatusChange);
        this.gameStore.onBoardChange(this.onBoardChange);
    }
    
    componentWillUnmount() {
        this.gameStore.removeOnGameStatusChange(this.onGameStatusChange);
        this.gameStore.removeOnBoardChange(this.onBoardChange);
    }
    
    onGameStatusChange() {
        this.setState({
            gameStatus: this.gameStore.getGameStatus()
        });
    }
    
    onBoardChange() {
        this.setState({
            cells: this.gameStore.getCells()
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