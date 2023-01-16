import React from "react";
import ReactDOM from "react-dom/client";
import { Text } from "./Text";
import { Timer } from "./Timer";
import "./style.css";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Text/>
        <Timer/>
      </div>
    );
  }
}