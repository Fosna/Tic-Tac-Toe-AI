import * as React from "react"; // Required for JSX syntax.
import * as ReactDom from "react-dom";
import TicTacToe from "./components/ticTacToe.js";

var mountNode = document.getElementById("reactMountNode");
ReactDom.render(<TicTacToe />, mountNode);