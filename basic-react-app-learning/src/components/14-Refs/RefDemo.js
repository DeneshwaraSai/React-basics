import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {

    // This code will directly focus on the input.
    // this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    // It works like ngModel in angular
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <br></br>
        <button onClick={this.clickHandler} > Click </button>
      </div>
    );
  }
}

export default RefDemo;
