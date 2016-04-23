import React from "React";
import Cell from "./cell.js";

const Board = React.createClass({
    render: function () {
        const cells = [];
        
        const cellCount = 9;
        for(let i = 0; i < cellCount; i++) {
            cells.push(<Cell key={ i } index= { i }/>)
        }
        
        return (
            <div className='board'>
                { cells }
            </div>
        );
    }
});

export default Board;