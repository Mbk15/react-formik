import { useState } from "react";

const BasicExample = () => {
  const [title, setTitle] = useState("Hello World");
  const handleChange = () => {
    if (title === "Hello World") {
      setTitle("Welcome To Munkamish's Castle");
    } else {
      setTitle("Hello World");
    }
  };
  return (
    <div className="bg-green-600 py-8 text-center">
      <h1>{title}</h1>
      <br />
      <button
        type="button"
        className="px-5 py-2 bg-blue-500 bg:hover-blue-800"
        onClick={handleChange}
      >
        Change Title
      </button>
    </div>
  );
};

export default BasicExample;
