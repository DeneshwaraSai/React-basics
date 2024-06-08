import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("INSIDE : " + this.state.count);
      }
    );
    console.log("OUTSIDE : " + this.state.count);
  }

  incrementCounts() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }),
    () => {
      console.log("INSIDE : " + this.state.count);
    });
  }

  incrementFiveTimes() {
    this.incrementCounts();
    this.incrementCounts();
    this.incrementCounts();
    this.incrementCounts();
    this.incrementCounts();
  }

  render() {
    return (
      <div>
        <h1> Count - {this.state.count} </h1>
        <button onClick={() => this.incrementFiveTimes()}> Inc me </button>
      </div>
    );
  }
}

export default Counter;
