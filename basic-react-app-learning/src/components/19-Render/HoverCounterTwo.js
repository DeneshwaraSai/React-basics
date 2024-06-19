import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          Clicked {this.props.count} Times
        </h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
