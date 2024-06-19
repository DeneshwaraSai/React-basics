import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  subscription = () => {
    this.setState({
      message: "Thanks for visiting",
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={() => this.subscription()}> subscribe </button>
      </div>
    );
  }
}

export default Message;
