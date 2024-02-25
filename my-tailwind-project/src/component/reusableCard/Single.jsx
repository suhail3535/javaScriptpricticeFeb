import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const [data, setData] = useState({});
  const param = useParams();

  const getSingleProduct = (id) => {
    axios
      .get(`https://helpful-gray-rooster.cyclic.app/product${id}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getSingleProduct(param.id);
  }, [param.id]);
  return <div></div>;
};

export default Single;
