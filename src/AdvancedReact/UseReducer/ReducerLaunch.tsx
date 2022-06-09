import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    console.log(state.people);
    return {
      ...state,
      people: newItems,
      isShowModal: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isShowModal: true,
      modalContent: "Enter a Value !",
    };
  }
  throw new Error("No Matching Details");
};

type reducerType = {
  people: [];
  isShowModal: boolean;
  modalContent: string;
};
const InitialState: reducerType = {
  people: ["Mubby", "Kareem"],
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
    } else {
      dispatch({ type: "NO_VALUE" });
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
      {/* {state?.people?.map((person) => {
        return (
          <ul key={state?.people?.id}>
            <li>{person}</li>
          </ul>
        );
      })} */}
    </>
  );
};

export default ReducerLaunch;
