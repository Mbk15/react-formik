import { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className=" mx-auto w-1/2 bg-red-500 my-5">
      <button
        className="bg-green-500 my-4 px-5 py-2 rounded text-center flex justify-center text-white mx-auto"
        onClick={() => setIsShow(!isShow)}
      >
        Show/Hide
      </button>

      {isShow && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div className="my-8 bg-yellow-500">
      <h1 className="text-center">Window</h1>
      <h2 className="text-center">Size : {size}</h2>
    </div>
  );
};

export default ShowHide;
