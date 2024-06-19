import React, { Component } from "react";

class CallBackRefs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    // step - 1
    this.cbRef = null;

    // step - 2
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  clickHandler = () => {
    // Step - 4 
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log(this.cbRef);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <br></br>
        {/* Step - 3 */}
        <input type="text" ref={this.setcbRef} />
        <br></br>
        <button onClick={this.clickHandler}> Click </button>
      </div>
    );
  }
}

export default CallBackRefs;
