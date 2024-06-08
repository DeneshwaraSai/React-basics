import React, { Component } from "react";
import EComponent from "./EComponent";
import { UserConsumer } from "./UserContext";

class CComponent extends Component {
  render() {
    return (
      <div>
        <h2> Going to E component </h2>
        <EComponent />
      </div>
    );
  }
}

export default CComponent;
