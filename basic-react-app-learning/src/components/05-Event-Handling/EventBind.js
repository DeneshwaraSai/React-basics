import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // Use below code for method 3 only
    // this.clickHandler = this.clickHandler.bind(this);
  }

//   clickHandler() {
//     console.log(this);
//     this.setState({
//       message: "Thank you",
//     });
//   }

clickHandler = () => {
    console.log(this);
    this.setState({
      message: "Thank you",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        Method 1 : Bind{" "}
        <button onClick={this.clickHandler.bind(this)}> Click </button>
        <br></br>
        Method 2 : Arrow function{"      "}
        <button onClick={() => this.clickHandler()}> Click </button>
        <br></br>
        Method 3 : constructor based{" "}
        <button onClick={this.clickHandler}> Click </button>
        <br />
        <br />
        {/* Method 3.1 : constructor based{" "}
        <button onClick={this.clickButtonHandler}> Click </button>
     */}
        </div> 
    );
  }
}

export default EventBind;
