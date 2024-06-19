import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Something went wrong.");
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? "loading......" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
