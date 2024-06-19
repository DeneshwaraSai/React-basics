import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dineshwara Sai",
    };
    console.log("LifeCycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle A componentDidMount()");
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate()");
    return true;
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate()");
    return null;
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate()");
  }

  changeTheState = () => {
    this.setState({
      name: "Dinesh",
    });
  };

  render() {
    console.log("LifeCycle A Render");
    return (
      <div> 
        LifeCycle A
        <button onClick={this.changeTheState}> CHANGE STATE </button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
