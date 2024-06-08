import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              placeholder="User-ID"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Body"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
