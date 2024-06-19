import React, { Component } from "react";

class ClassTimer extends Component {
  interval;

  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevstate) => ({ timer: prevstate.timer + 1 }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>
       Class Timer : { this.state.timer }
       <br></br>
       <button onClick={() => clearInterval(this.interval) }> 
            Clear Interval 
        </button>
    </div>;
  }
}

export default ClassTimer;
