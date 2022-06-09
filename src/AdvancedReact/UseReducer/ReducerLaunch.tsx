import React, { useState, useReducer } from "react";
import Modal from "./Modal";
type reducerType = {
  people: [];
  isShowModal: boolean;
  modalContent: string;
};
const InitialState: reducerType = {
  people: [],
  isShowModal: false,
  modalContent: "Hello Mbk",
};
const reducer = (state, action) => {
  console.log(state, action);
  return state;
};
const ReducerLaunch = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, InitialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    if (name) {
      dispatch({ type: "TESTING" });
    }
  };
  return (
    <>
      {state.isShowModal && <Modal modalContent={state.modalContent} />}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-1/2 mx-auto my-5 bg-red-500 border-green-500">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ReducerLaunch;
