import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // Approach - 3
    // this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler() {
    this.setState({
      message: "Bye Bye",
    });

    console.log(this);
  }

  clickHandler = () => {
    this.setState({
      message: "Bye Bye",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div> {this.state.message} </div>
        {/* Approach 1 : <button onClick={this.eventHandler.bind(this)}> Click </button> Dpont use because of performance implications */}
        {/* Approach 2 : <button onClick={() => this.eventHandler()}> Click </button>  Easy way to use */}
        {/* Approach 3 : <button onClick={this.eventHandler}> Click </button> */}
        {/* Approach 4 : */} <button onClick={this.clickHandler}> Click </button>
        {/* Use Approach 3 or 4 */}
      </div>
    );
  }
}

export default EventBind;
