import { useState } from "react";

const ObjectExample = () => {
  const [name, setName] = useState({
    nomen: "Mubarak",
    age: 25,
    job: "cruiser",
  });

  const handleChange = () => {
    if (nomen === "Mubarak") {
      setName({ ...name, nomen: "Munkamish" });
    } else {
      setName({ ...name, nomen: "Mubarak" });
    }
    console.log("Hello World");
  };
  const { nomen, age, job } = name;
  return (
    <>
      <section className=" text-center grid place-items-center bg-purple-500">
        <ul>
          <li>{nomen}</li>
          <li>{age}</li>
          <li>{job}</li>
        </ul>

        <button
          onClick={handleChange}
          className="bg-green-500 px-5 py-2 rounded text-center flex justify-center text-white ml-8 "
        >
          Update Me
        </button>
      </section>
    </>
  );
};

export default ObjectExample;
