import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deneshwara Sai",
    };

    console.log("Life Cycle B Constructor!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle B getDeviredStateFromProps");
    console.log(props, "", state);
    return null;
 }

  componentDidMount() {
    console.log("In componentDidMount() in LifeCycleB.");
  }

  shouldComponentUpdate() {
    console.log("In shouldComponentUpdate() LifeCycleB.");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate().');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleB render.')
  }

  render() {
    console.log("Life Cycle B Render");
    return <div> In LifeCycle B </div>;
  }
}

export default LifeCycleB;
