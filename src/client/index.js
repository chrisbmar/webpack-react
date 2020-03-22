import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
