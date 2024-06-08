import React from "react";

const withCounter = (WrappedComponent, incrementValue) => {
  class WithCounter  extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState(
        (prevState) => ({
          count: prevState.count + incrementValue,
        }),
        () => {
          console.log(this.state.count);
        }
      );
    };

    render() {
        console.log(this.props)
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount} 
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
