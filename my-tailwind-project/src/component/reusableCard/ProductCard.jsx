import React, { useState } from "react";

const ProductCard = ({
  image,
  price,
  name,
  Rating,
  id,
  url,
  discount,
  size,
}) => {
  return (
    <div
      key={id}
      className="m-2 shadow-md rounded-lg cursor-pointer transition ease-in-out delay-15 hover:-translate-y-0 hover:scale-110 duration-700 px-3">
      <img
        className="w-4/5 sm:w-full h-96 m-auto p-4"
        src={image}
        alt="image"
        loading="lazy"
      />

      <h1 className="">{name}</h1>
      <p className="text-gray-400">{Rating}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <p>{size}</p>
    </div>
  );
};

export default ProductCard;
