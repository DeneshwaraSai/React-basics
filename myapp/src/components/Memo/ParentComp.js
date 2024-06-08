import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";

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
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
