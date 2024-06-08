import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deneshwara Sai",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Deneshwara Sai",
      });
    }, 2000);
  }

  render() {
    console.log("********* This is a Parent Component *********");

    return (
      <div>
        <p> Parent Component </p>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
