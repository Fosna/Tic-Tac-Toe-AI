import * as React from "react";
import Difficulty from "./difficulty.js";

const TicTacToe = React.createClass({
    render: function () {
        return (
            <div className='control' ng-controller='GameStatusController as statusCtrl'>
                <Difficulty />
            </div>
        );
    }
});

export default TicTacToe;