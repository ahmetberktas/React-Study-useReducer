import React, { useReducer } from "react";
import { reducer } from "./reducers/counterReducer";

const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="d-flex justify-content-between my-4 items-center">
      <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
      <span className="lead fw-bold">{state.count}</span>
      <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
    </div>
  );
};

export default Counter;
