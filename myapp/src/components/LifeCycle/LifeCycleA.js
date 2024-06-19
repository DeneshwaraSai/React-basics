import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deneshwara Sai",
    };

    console.log("Life Cycle A Constructor!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDeviredStateFromProps");
    console.log(props, "", state);
    return null;
  }

  componentDidMount() {
    console.log("In componentDidMount() in LifeCycle A");
  }

  render() {
    console.log("Life Cycle A Render");
    return (
      <div>
       <div> In LifeCycle A </div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
