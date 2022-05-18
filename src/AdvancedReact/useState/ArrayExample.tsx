import { useState } from "react";
import { books } from "../../ServiceProvider/BookData";

const ArrayExample = () => {
  const [pamphlets, setPamphlet] = useState(books);
  const removeItem = (id: number) => {
    let newPamphlets = pamphlets.filter((author) => author.id !== id);
    setPamphlet(newPamphlets);
  };
  return (
    <div className="text-center grid place-items-center">
      {pamphlets.map((pamphlet) => {
        return (
          <>
            <div className="w-max flex align-center justify-center flex-column bg-orange-400 br-4 my-4 py-5 px-5">
              <div>
                <h4 key={pamphlet.id}>{pamphlet.title}</h4>
                <p> By : {pamphlet.author}</p>
              </div>
              <div>
                <button
                  onClick={() => removeItem(pamphlet.id)}
                  className="bg-white px-5 py-2 rounded text-center flex justify-center text-red-600 ml-8 "
                >
                  remove item
                </button>
              </div>
            </div>
          </>
        );
      })}

      <button
        onClick={() => setPamphlet([])}
        className="bg-blue-600 px-5 py-2 rounded  text-white ml-3 my-2"
      >
        Clear Items
      </button>
    </div>
  );
};

export default ArrayExample;
