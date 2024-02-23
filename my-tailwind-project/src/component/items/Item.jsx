//

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../reusableCard/ProductCard";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const Item = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://helpful-gray-rooster.cyclic.app/product"
      );
      console.log(res,"item")
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="20" />
            <SkeletonText mt="5" noOfLines={6} spacing="6" skeletonHeight="6" />
          </Box>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
      )}
    </>
  );
};

export default Item;
