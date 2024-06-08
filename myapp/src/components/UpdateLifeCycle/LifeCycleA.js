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

  shouldComponentUpdate() {
    console.log("In shouldComponentUpdate() LifeCycleA." , this.state);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getSnapshotBeforeUpdate()' , prevState);
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleA render.')
  }

  changeState = () => {
    this.setState({
      name : 'Deneshwara Sai Ila'
    })
  }

  render() {
    console.log("Life Cycle A Render");
    return (
      <div>
       <div> In LifeCycle A </div>
       <button onClick={this.changeState}> Change State </button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;


/**
 * 1) getDerivedStateFromProps(props, state) - Dictates if the component should re-render or not
 * 2) updateComponnetUpdate(nextProps, nextState) -> rarely used. 
 *          Side Effects (Don'ts) -> HTTP requests calling the setState method.
 * 3) render() -> renders JSX
 * 4) getSnapShotBeforeUpdate(prevProps, prevState);
 * 5) ComponentDidUpdate(prevProps, prevState, snapshot);
 */