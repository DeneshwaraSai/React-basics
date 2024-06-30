import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdatedAction = {
    type: 'Increment' | 'Decrement';
  payload: number;
}

type ResetAction = {
    type : "Reset"
}

type CounterAction = UpdatedAction |  ResetAction

const initialState: CounterState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    case "Reset":
      return initialState;
    default:
      return { count: state.count };
  }
};
export const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count - {state.count}
      <br />
      <button onClick={() => dispatch({ type: "Increment", payload: 5 })}>
        Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "Decrement", payload: 5 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
};
