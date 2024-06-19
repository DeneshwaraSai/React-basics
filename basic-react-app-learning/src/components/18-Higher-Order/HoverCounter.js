import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          {this.props.name} Hovered {this.props.count} Times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
