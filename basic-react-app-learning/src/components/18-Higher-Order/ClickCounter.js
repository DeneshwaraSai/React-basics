import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.name} Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 10);
