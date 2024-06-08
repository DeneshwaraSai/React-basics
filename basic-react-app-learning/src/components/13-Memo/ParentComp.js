import React, { Component } from "react";
import MemoComp from "./MemoComp";

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
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
