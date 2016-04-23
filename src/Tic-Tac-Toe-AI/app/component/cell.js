import React from "React";
import Actions from "../action/actions.js";

const Cell = React.createClass({
    onCellClick: function () {
        const index = this.props.index;
        Actions.cellClicked(index);
    },
    
    render: function () {
        return (
            <div className='cell' onClick={ this.onCellClick }>{ this.props.index }</div>
        );
    }
});

export default Cell;