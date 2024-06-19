import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("This is a Pure Component");

    return (
      <div>
        <p> Pure Component {this.props.name} </p>
      </div>
    );
  }
}

export default PureComp;
