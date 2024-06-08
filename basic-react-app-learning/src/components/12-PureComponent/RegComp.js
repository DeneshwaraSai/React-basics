import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("This is a Regular Component");

    return (
      <div>
        <p> Regular Component {this.props.name} </p>
      </div>
    );
  }
}

export default RegComp;
