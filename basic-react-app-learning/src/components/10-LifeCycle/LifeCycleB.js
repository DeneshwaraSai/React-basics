import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dineshwara Sai",
    };
    console.log("LifeCycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle B componentDidMount()");
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  shouldComponentUpdate() {
    console.log("LifeCycle B shouldComponentUpdate()");
    return true;
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapshotBeforeUpdate()");
    return null;
  }

  /* FOR LIFE CYCLE UPDATING PURPOSE */
  componentDidUpdate() {
    console.log("LifeCycle B componentDidUpdate()");
  }

  changeState = () => {
    this.setState({
      name: "Dinesh",
    });
  };

  render() {
    console.log("LifeCycle B Render");
    return (
      <div>
        LifeCycle B
        {/* LifeCycle B<button onClick={this.changeState}> CHANGE STATE </button> */}
      </div>
    );
  }
}

export default LifeCycleB;
