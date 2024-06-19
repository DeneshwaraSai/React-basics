import React, { Component } from "react";
import ChldComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} - ${childName}`); // template literals
  }
  
  render() {
    return <div>
      <ChldComponent greetHandler={this.greetParent}></ChldComponent>
    </div>;
  }
}

export default ParentComponent;
