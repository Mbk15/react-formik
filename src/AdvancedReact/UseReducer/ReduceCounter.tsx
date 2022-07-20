import React, { useReducer } from "react";
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const ReduceCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-1/2 mx-auto my-5 bg-green-700">
      <h2 className="text-center font-bold text-lg text-red-300">
        {state.count}
      </h2>

      <button
        className="px-5 py-3 bg-blue-500 mx-5 br-3"
        onClick={() => dispatch({ type: "increment" })}
      >
        Incr
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decr</button>
    </div>
  );
};

export default ReduceCounter;
