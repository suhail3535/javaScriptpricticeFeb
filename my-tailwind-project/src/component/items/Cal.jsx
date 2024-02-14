import React, { useEffect, useState } from "react";
import axios from "axios";

const Cal = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleCategoryChange = (e) => {
    setCat(e.target.value);
  };
  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <form>
        category:-
        <select value={cat} onChange={handleCategoryChange}>
          <option value="">Select</option>
          <option value="women's clothing">women</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men</option>
        </select>
      </form>

      <hr />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data
          .filter((ele) => !cat || ele.category === cat) // Filter data based on the selected category
          .map((ele) => (
            <div
              key={ele.id}
              className="border border-solid border-green-600 p-3 m-4">
              <img className="w-3/4 m-auto h-96" src={ele.image} alt="" />
              <h1 className="text-xl font-bold mt-0">{`${ele.title
                .split(" ")
                .slice(0, 5)
                .join(" ")}...`}</h1>

              <h2 className="text-red-400 font-bold mt-0">{`${ele.category
                .split(" ")
                .slice(0, 5)
                .join(" ")}...`}</h2>
              <h3>{`${ele.description
                .split(" ")
                .slice(0, 5)
                      .join(" ")}...`}</h3>
                  <div className="w-1/2 m-auto mt-2 flex justify-between">
                      <button className="px-2 py-1  bg-green-500 rounded-md">Add</button>
                      <button className="px-2 py-1  bg-red-500 rounded-md">Delete</button>
                  </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cal;
