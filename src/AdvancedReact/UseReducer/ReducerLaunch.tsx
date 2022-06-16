import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

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
const ReducerLaunch = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, InitialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };

      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isShowModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
      {state.people.map((person: any) => {
        console.log(person);
      })}
    </>
  );
};

export default ReducerLaunch;
