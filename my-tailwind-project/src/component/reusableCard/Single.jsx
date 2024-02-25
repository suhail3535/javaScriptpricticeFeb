import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const [data, setData] = useState({});
  const param = useParams();

  const getSingleProduct = (id) => {
    axios
      .get(`https://helpful-gray-rooster.cyclic.app/product/${id}`)
      .then((res) => setData(res.data));
  };
console.log(data,"14")
  useEffect(() => {
    getSingleProduct(param.id);
  }, [param.id]);

  return (
      <div className="bg-white">
          <h1>single page</h1>
      <div key={data.id}>
        <div className="rounded-md lg:aspect-none lg:h-80 sm:h-80 md:h-80  cursor-pointer  overflow-hidden">
          <img
            src={data.Link}
            alt={data.imageAlt}
            className="sm:hover:scale-110 transition-all ease-in-out duration-700 translate-x-4 cursor-pointer"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={data.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {data.Name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{data.Brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{data.MRP}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
