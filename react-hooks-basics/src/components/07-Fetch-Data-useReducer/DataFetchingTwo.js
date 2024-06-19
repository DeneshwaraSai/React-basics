import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  error: "",
  post: {},
  loading: true,
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        error: "",
        post: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        error: "Something went wrong.",
        post: {},
        loading: false,
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading......" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
