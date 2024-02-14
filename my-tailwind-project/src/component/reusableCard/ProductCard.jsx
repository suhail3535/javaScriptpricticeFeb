import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./card.css"
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
  const [ref, inView] = useInView({
    triggerOnce: true, // Loads image only once when it comes into view
    rootMargin: "200px 0px", // Adjust this value as per your requirement
  });

  return (
    <div
      ref={ref}
      key={id}
      className={`m-2 shadow-md rounded-lg cursor-pointer transition ease-in-out delay-15 hover:-translate-y-0 hover:scale-110 duration-700 px-3 ${
        inView ? "animate-fade-in" : ""
      }`}>
      <img
        className={`w-4/5 sm:w-full h-96 m-auto p-4 ${
          inView ? "" : "opacity-0"
        }`}
        src={inView ? image : ""}
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
