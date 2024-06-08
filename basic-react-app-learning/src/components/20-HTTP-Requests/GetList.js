import React, { Component } from "react";
import axios from "axios";

class GetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Error while retrieving the data",
        });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2> List of posts </h2>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <ul>
                <li> {post.title} </li>
                <li> {post.body} </li>
              </ul>

              <br></br>
            </div>
          ))
        ) : (
          <div>{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default GetList;
