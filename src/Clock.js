import React, { Component } from "react";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
