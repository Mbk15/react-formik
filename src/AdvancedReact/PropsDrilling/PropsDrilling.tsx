import { useState } from "react";
import { Data } from "./data";
// more components
// fix - context api, redux(for more complex cases)
const PropsDrilling = () => {
  const [people, setPeople] = useState(Data);
  const removeItem = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <section>
      <List people={people} removeItem={removeItem} />
    </section>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} removeItem={removeItem} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ removeItem, name, id }) => {
  return (
    <div
      key={id}
      className="bg-blue-500 w-1/2  mx-auto my-3 text-center flex  justify-between"
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

export default PropsDrilling;
