import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  // Type and value parameters are inbuilt in dispatch method

  return (
    <div>
      <br></br>
      count-1 : { count.firstCounter }
      <br></br>
      count-2 : { count.secondCounter } 
      <br></br>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "increment2", value: 8 })}>
        Increment(2)
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 8 })}>
        Decrement(2)
      </button>
      
      <br></br>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </div>
  );
}

export default CounterTwo;
