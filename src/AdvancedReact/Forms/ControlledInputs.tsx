import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstname("");
      setEmail("");
    } else {
      console.log("Empty Values");
    }
  };
  return (
    <>
      <article className="bg-green-700  mx-auto my-4 flex items-center justify-center w-1/2">
        <form onSubmit={handleSubmit}>
          <h1 className="text-white text-center font-bold ">
            Controlled Inputs
          </h1>
          <div className="my-5 bg-gray-400 mx-4">
            <label htmlFor="firstName"> Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="my-5 bg-gray-400 mx-4">
            <label htmlFor="email"> Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-1/2 mx-auto my-4">
            <button
              type="submit"
              className="bg-gray-500 px-5 py-2 rounded text-center flex justify-center text-white ml-8"
            >
              Add Field
            </button>
          </div>
        </form>
      </article>
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div
            className="w-1/2 mx-auto  flex align-center justify-center flex-column bg-orange-400 br-4 my-4 py-5 px-5"
            key={id}
          >
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
