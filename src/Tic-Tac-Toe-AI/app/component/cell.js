import React from "React";
import Actions from "../action/actions.js";

const Cell = React.createClass({
    onCellClick: function () {
        const index = this.props.index;
        Actions.cellClicked(index);
    },
    
    render: function () {
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
});

Cell.EmptyClassName = "cell";
Cell.XClassName = "cell green";
Cell.OClassName = "cell red";

export default Cell;