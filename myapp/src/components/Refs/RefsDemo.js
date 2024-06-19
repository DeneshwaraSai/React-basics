import React, { Component } from "react";

class RefsDemo extends Component {
  inputRef;

  constructor(props) {
    console.log("In Constructor");
    super(props);
    // Method - 1
    this.inputRef = React.createRef();

    // Method - 2
    this.cbRef = null;
    this.setCbRef = (element) => {
        this.cbRef = element;
    } 
  }

  componentDidMount() {
    // Method 1
    // console.log(this.inputRef);
    // console.log("In componentDidMount()");
    // this.inputRef.current.focus();

    // Method 2
    if (this.cbRef) {
        this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        This is method 1.
        <br/>
        <input type="text" ref={this.inputRef}></input>
        <br></br>
        <button onClick={this.clickHandler}> Click me </button>

        <br/><br/>

        <input type="text" ref={this.setCbRef}/>
      </div>
    );
  }
}

export default RefsDemo;
