import { useEffect, useState } from "react";
//default re-render
//cleanUp function
//second parameter : The dependency list
const UseffectBasic = () => {
  const [add, setAdd] = useState(0);
  useEffect(() => {
    if (add > 3) {
      document.title = ` ${add} New Messages ! `;
    }

    console.log("UseEffect");
  }, []);
  console.log("re render");
  return (
    <>
      <h2 className="text-center">UseffectBasic</h2>
      <h1 className="text-center">{add}</h1>

      <button
        className="bg-blue-600 px-5 py-2 rounded text-white ml-3"
        onClick={() => setAdd(add + 1)}
      >
        Incr
      </button>
    </>
  );
};

export default UseffectBasic;
