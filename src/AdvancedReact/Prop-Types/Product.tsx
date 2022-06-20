import React from "react";

const Product = ({ name, image }) => {
  return (
    <article className="flex justify-between items-center w-1/2 mx-auto bg-blue-600 my-5 ">
      <h3>{name}</h3>
      <img src={image} alt="user" width={100} height={100} />
    </article>
  );
};

export default Product;
