import React from "react"; // Required for JSX syntax.
import ReactDom from "react-dom";
import TicTacToe from "./component/ticTacToe.js";
import Dispatcher from "./dispatcher.js";

var mountNode = document.getElementById("reactMountNode");
ReactDom.render(<TicTacToe />, mountNode);