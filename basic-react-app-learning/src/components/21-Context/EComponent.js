import React, { Component } from "react";
import FComponent from "./FComponent";
import userContext from "./UserContext";

class EComponent extends Component {
    // You can also use
    static contextType = userContext;

  render() {
    const style = {border: '1px solid black', width: '100%'};

    return (
      <div>
        <div style={style}>
            In Component E context - {this.context} 
        </div>
        <h2> Going to F component </h2>
        <FComponent />
      </div>
    );
  }
}

// EComponent.contextType = userContext;

export default EComponent;
