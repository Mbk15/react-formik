import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstname] = useState("Hello world");
  const [email, setEmail] = useState("Mbk@gmail.com");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(firstName);
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
    </>
  );
};

export default ControlledInputs;
