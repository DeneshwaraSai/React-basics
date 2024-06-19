import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingSingle() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idbuttonClick, setidButtonClick] = useState(1);

  const clickHandler = () => {
    setidButtonClick(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idbuttonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idbuttonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={clickHandler}> Get Post </button>

      <ul>{<li key={post.id}> {post.title} </li>}</ul>
    </div>
  );
}

export default DataFetchingSingle;
