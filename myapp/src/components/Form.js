import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submit = (event) => {
    alert(
      `${this.state.comments} | ${this.state.topic} | ${this.state.username}`
    );
    console.log(this.state);
    event.preventDefault();
  };

  render(props) {
    return (
      <div>
        <h4> Form Component </h4>
        <form onSubmit={this.submit}>
          <div>
            <label> Username </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserName}
            ></input>
          </div>

          <div>
            <label> Comments </label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>

          <div>
            <label> Pick one: Topic </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react"> React </option>
              <option value="angular"> Angular </option>
              <option value="vue"> Vue </option>
            </select>
          </div>

          <div>
            <button type="submit"> submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
