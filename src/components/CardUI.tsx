import React, { useState } from "react";

const CardUI = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      You Cicked me {count} times
      <button
        className="bg-blue-600 px-5 py-2 rounded text-white"
        onClick={() => setCount(count + 1)}
      >
        Click it
      </button>
    </div>
  );
};

export default CardUI;
