import React, { Component } from "react";
import WithCounter from "./withCounter";

class ClickCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//     console.log(this.state);
//   };

  render() {
    const {count, incrementCount} = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
             Clicked {count}
        </button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter);
