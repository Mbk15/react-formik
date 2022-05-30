import React, { useState } from "react";

const ControlledInputs = () => {
  /***Using Multiple state management */

  // const [firstName, setFirstname] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { firstName, age, email } = person;
    if (firstName && age && email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };

      setPeople([...people, newPerson]);

      setPerson({ firstName: "", email: "", age: "" });
    }
    /***Conditions to check array update before updating values  */

    // if (firstName && email && age) {
    //   const person = {
    //     id: new Date().getTime().toString(),
    //     firstName,
    //     email,
    //     age,
    //   };
    //   setPeople((people) => {
    //     return [...people, person];
    //   });
    //   setFirstname("");
    //   setEmail("");
    // } else {
    //   console.log("Empty Values");
    // }
  };
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
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
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="my-5 bg-gray-400 mx-4">
            <label htmlFor="email"> Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-5 bg-gray-400 mx-4">
            <label htmlFor="age"> Age :</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
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
        const { id, firstName, email, age } = person;
        return (
          <div
            className="w-1/2 mx-auto  flex align-center justify-space-even flex-column bg-orange-400 br-4 my-4 py-5 px-5"
            key={id}
          >
            <div>
              <h4>{firstName} </h4>
            </div>
            <div>
              <p>{age}</p>
            </div>
            <div>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
