import Button from "../../components/Button";
import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(2);
  const incrementCount = () => {
    setTimeout(() => {
      setCount((prevstate) => {
        console.log(prevstate + 1);
        return prevstate + 1;
      });
    }, 2000);
  };
  return (
    <div className="bg-blue-400 w-1/2 mx-auto text-center my-5 ">
      <div>
        <h2>Asynchronous Counter</h2>

        <h1>You Cicked me {count} times</h1>
      </div>

      <div>
        <div className="flex items-center justify-center flex-column">
          <div>
            <button
              className="bg-blue-600 px-5 py-2 rounded text-white ml-3"
              onClick={incrementCount}
            >
              Incr
            </button>
            <button
              className="bg-red-600 px-5 py-2 rounded text-white ml-3"
              onClick={() => setCount(count - 1)}
            >
              Decr
            </button>
            <button
              className="bg-green-600 px-5 py-2 rounded text-white ml-3 "
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateCounter;
