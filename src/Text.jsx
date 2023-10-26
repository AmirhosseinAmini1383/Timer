import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

export class Text extends React.Component {
  render() {
    return (
      <>
        <h1 className="text">{this.props.Label}</h1>
      </>
    );
  }
}
