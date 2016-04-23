import * as React from "react";
import * as ReactDom from "react-dom";

var Monkey = React.createClass({
    render: function () {
        return (
            <h1>Monkey</h1>
        );
    }
});

var mountNode = document.getElementById("reactMountNode");
ReactDom.render(<Monkey />, mountNode);