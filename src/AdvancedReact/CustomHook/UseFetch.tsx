import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();

    console.log(products);
  };
  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
