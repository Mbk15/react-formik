import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";
const CustomHook = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
    console.log(products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const Loader = () => {
    return (
      <div className="flex justify-center ">
        <img src="./load.gif" alt="Loader" width={200} height={200} />
      </div>
    );
  };
  return (
    <div className="flex justify-center ">{loading ? <Loader /> : "data"}</div>
  );
};
export default CustomHook;
