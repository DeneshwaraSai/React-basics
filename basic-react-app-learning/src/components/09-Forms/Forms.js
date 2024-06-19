import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      summary: "",
      skill: "",
    };
  }

  summaryChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      summary: event.target.value,
    });
  };

  usernameChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  skillChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      skill: event.target.value,
    });
  };

  buttonHandler = (event) => {
    console.log(this.state)
    alert(`${this.state.username}, ${this.state.summary}, ${this.state.skill}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2> Forms </h2>

        <form onSubmit={this.buttonHandler}>
          <label> Username : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameChangeHandler}
          />
          <br />
          <br />
          <label> Summary : </label>
          <textarea
            value={this.state.summary}
            onChange={this.summaryChangeHandler}
          ></textarea>
          <br />
          <br />
          <label> Topic : </label>
          <select value={this.state.skill} onChange={this.skillChangeHandler}>
            <option value="React"> React </option>
            <option value="Angular"> Angular </option>
            <option value="Spring"> Spring </option>
            <option value="Vue"> Vue </option>
            <option value="Next"> Next </option>
          </select>

          <br />
          <br />

          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default Forms;
