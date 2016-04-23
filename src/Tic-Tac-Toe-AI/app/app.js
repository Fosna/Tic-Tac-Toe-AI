import * as React from "react";
import * as ReactDom from "react-dom";
import TicTacToe from "./components/ticTacToe.js";
// import Difficulty from "./components/difficulty.js";

var mountNode = document.getElementById("reactMountNode");
ReactDom.render(<TicTacToe />, mountNode);