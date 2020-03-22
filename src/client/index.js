import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.module.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
