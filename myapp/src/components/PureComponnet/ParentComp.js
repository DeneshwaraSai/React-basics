import React, { Component, PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

//Using normal Component that need to be extended
class ParentComp extends Component {

// Now lets convert normal component to Pure Component
// class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deneshwara Sai Ila",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Deneshwara Sai Ila",
      });
    }, 2000);
  }

  render() {
    console.log('***************** Parent Component *****************')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
