import Product from "./Product";
import { useFetch } from "../CustomHook/UseFetch";
const url = "https://api.github.com/users";

const ProductLaunch = () => {
  const { products } = useFetch(url);
  console.log(products);
  console.log("Hello Product Launch");

  return (
    <>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            image={product.avatar_url}
            name={product.login}
          />
        );
      })}
    </>
  );
};

export default ProductLaunch;
