import React from "react";
import userImage from "../images/user.jpg"
const Temp = () => {
  return (
    <div className="container bg-pink-100 border-2 m-auto h-1/3 border-red-400 flex justify-between gap-4">
      <div className=" border-2 border-green-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magnam
        reprehenderit temporibus ipsa, odit fugit dolorem dicta voluptatum at
        quasi rerum ullam possimus commodi quae laudantium! Ex odit eligendi
        sapiente.
      </div>
      <div>
        <img className="p-2 w-1/2 m-auto" src={userImage} alt="" />
      </div>
    </div>
  );
};

export default Temp;
