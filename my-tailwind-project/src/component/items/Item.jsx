//

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../reusableCard/ProductCard";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Example from "../reusableCard/ItemCard";
const Item = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://helpful-gray-rooster.cyclic.app/product"

      );
      console.log(res.data,"item")
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
      {/* {loading ? (
        <div>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="20" />
            <SkeletonText mt="5" noOfLines={6} spacing="6" skeletonHeight="6" />
          </Box>
        </div>
      ) : (
        <div>
        </div>
      )} */}
      <Example products={data} />
    </>
  );
};

export default Item;
