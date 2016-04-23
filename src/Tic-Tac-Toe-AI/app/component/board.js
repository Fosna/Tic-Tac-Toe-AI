import React from "React";
import Cell from "./cell.js";

const Board = React.createClass({
    render: function () {
        const cells = [];
        for(let i = 0; i < this.props.cells.length; i++) {
            cells.push(<Cell key={ i } index={ i } symbol={ this.props.cells[i] }/>)
        }
        
        return (
            <div className='board'>
                { cells }
            </div>
        );
    }
});

export default Board;