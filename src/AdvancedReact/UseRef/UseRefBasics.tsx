import { useEffect, useRef } from "react";

//Preserve Value between renders
// Dosen't trigger re-render
//target Node/DOM elemets

const UseRefBasics = () => {
  const refContainer = useRef(null);
  console.log("Use ref basics");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(refContainer);

  useEffect(() => {
    console.log(refContainer.current);

    refContainer.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex w-1/2 mx-auto my-5 bg-pink-500 border-green-500">
          <input type="text" placeholder="Enter Name" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
