import React from "React";
// Actions is wrapper around dispatcher. Dispatcher is main mechanism in flux architecture. We can tollerate passing it as static class.
import Actions from "../action/actions.js";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index
        }
        
        // Bind.
        this.onCellClick = this.onCellClick.bind(this);
    }
    
    onCellClick() {
        const index = this.state.index;
        Actions.cellClicked(index);
    }
    
    render() {
        let currentClassName = Cell.EmptyClassName;
        
        if (this.props.symbol && this.props.symbol.toUpperCase() === "X") {
            currentClassName = Cell.XClassName;
        } else if (this.props.symbol && this.props.symbol.toUpperCase() === "O") {
            currentClassName = Cell.OClassName;
        }
        
        return (
            <div className={ currentClassName } onClick={ this.onCellClick }>{ this.props.symbol }</div>
        );
    }
}

Cell.EmptyClassName = "cell";
Cell.XClassName = "cell green";
Cell.OClassName = "cell red";

export default Cell;