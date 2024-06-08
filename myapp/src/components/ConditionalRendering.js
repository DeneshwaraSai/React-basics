import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1) Using Simple if..else
    /*
    if (this.state.isLoggedIn) {
      return <div> Welcome Deneshwara Sai, </div>;
    } else {
      return <div>Welcome Guest</div>;
    }
    */

    // 2) Using a variable
    /*
    let message;

    if (this.state.isLoggedIn) {
      message = <div> Welcome Deneshwara Sai </div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return message;
    */

    // 3) Using terinary operators
    /* 
    return this.state.isLoggedIn ? (
      <div> Welcome Deneshwara Sai </div>
    ) : (
      <div>Welcome Guest</div>
    );
    */

    // 4) Short Circuit operator Approach
    return this.state.isLoggedIn && <div> Welcome Deneshwara Sai </div>;
  }
}

export default ConditionalRendering;
