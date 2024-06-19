import React from "react";

const UpdatedComponent = (WrappedComponent) => {
  class WithCounter extends React.Component {
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }

    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
      console.log(this.state);
    };
  }

  return WithCounter;
};

export default UpdatedComponent;
