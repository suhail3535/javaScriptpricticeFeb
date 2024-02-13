//

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../reusableCard/ProductCard";

const Item = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://helpful-gray-rooster.cyclic.app/product"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(data)
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center">
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.Link}
            name={item.Name}
            Rating={item.Brand}
            size={item.Brokenness}
            url={item.URL}
            price={item.MRP}
            discount={item.Discount}
          />
        );
      })}
    </div>
  );
};

export default Item;
