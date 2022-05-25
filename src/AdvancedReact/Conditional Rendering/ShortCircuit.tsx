import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>Hello world</h1>
      {text || <h1>: Mbk don land !</h1>}
      <button
        className="bg-green-500 px-5 py-2 rounded text-center flex justify-center text-white ml-8"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>
      {isError && <h1>Error ...</h1>}
      {isError ? (
        <h2>There is an error ..</h2>
      ) : (
        <div>
          <p>There is no error </p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
