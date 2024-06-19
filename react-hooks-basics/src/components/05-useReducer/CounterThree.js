import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  // Pass action as parameter for dispatch method
  return (
    <div>
      <div>
        COUNT 1 :<br></br>
        count : {count}
        <br></br>
        <button onClick={() => dispatch("increment")}> Increment </button>
        <button onClick={() => dispatch("decrement")}> Decrement </button>
        <button onClick={() => dispatch("reset")}> Reset </button>
      </div>

        <br></br> <br></br>
      <div>
      COUNT 2 :<br></br>
        count : {countTwo}
        <br></br>
        <button onClick={() => dispatchTwo("increment")}> Increment </button>
        <button onClick={() => dispatchTwo("decrement")}> Decrement </button>
        <button onClick={() => dispatchTwo("reset")}> Reset </button>
      </div>
    </div>
  );
}

export default CounterThree;
