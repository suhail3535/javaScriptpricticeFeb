//

import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">
      {data.map((ele, index) => (
        <div
          key={index}
          className="m-5 shadow-2xl rounded-lg cursor-pointer transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-700">
          <img className="w-3/4 m-auto p-4" src={ele.image} alt="image" />
          <h1 className="text-xl font-bold">{ele.title}</h1>
          <p>{ele.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
