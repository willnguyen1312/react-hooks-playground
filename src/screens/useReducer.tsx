import { RouteComponentProps } from "@reach/router";
import React, { useReducer } from "react";

interface IState {
  count: number;
}

interface IActionType {
  type: "increment" | "decrement" | "reset";
  payload?: number;
}

function init(initialCount = 0) {
  return { count: initialCount };
}

function reducer(state: IState, action: IActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function UseReducer({
  initialCount = 0
}: RouteComponentProps<{ initialCount: number }>) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default UseReducer;
