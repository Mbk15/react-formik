import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const updateSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize); // clean UP functon
    };
  }, []);
  return (
    <div>
      <h2 className="text-center">UseEffect Cleanup</h2>
      <h3 className="text-center"> WINDOW</h3>
      <h1 className="text-center">{size} PX</h1>
    </div>
  );
};

export default UseEffectCleanup;
