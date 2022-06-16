import React, { useState, createContext, useContext } from "react";
import { Data } from "../PropsDrilling/data";
// more components
// fix - context api, redux(for more complex cases)

//Coompoents gives Provider and Consumer
const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(Data);
  const removeItem = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const PeopleData = useContext(PersonContext);
  console.log(PeopleData);

  return (
    <>
      {PeopleData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ name, id }) => {
  const { removeItem } = useContext(PersonContext);
  console.log(removeItem);

  return (
    <div
      key={id}
      className="bg-purple-500 w-1/2 p-4  mx-auto my-3 text-center flex  justify-between"
    >
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <button className=" text-red-600 " onClick={() => removeItem(id)}>
          remove item
        </button>
      </div>
    </div>
  );
};

export default ContextApi;
