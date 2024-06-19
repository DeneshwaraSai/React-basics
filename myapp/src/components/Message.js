import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    // state - reserved keyword.
    this.state = {
      message: "Welcome Visitor",
    };
  }

  subscribeMe() {
    console.log(this.state.message);
    this.setState({
      message: "Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
        <button type="submit" onClick={() => this.subscribeMe()}>
          {" "}
          Subscribe{" "}
        </button>
      </div>
    );
  }
}

export default Message;
