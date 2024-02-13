import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40">
      <nav className="text-white  bg-slate-500 font-serif font-bold cursor-pointer flex m-auto justify-around place-items-center h-20 w-full">
        <div className="w-40">
          <img
            className="rounded-xl w-20"
            src="https://vermillion-cendol-8a7209.netlify.app/Images/mainlogo.jpeg"
            alt=""
          />
        </div>
        <div className="w-2/6 sm:flex hidden justify-between">
          <a className="hover:text-cyan-300" href="">
            Home
          </a>
          <a className="hover:text-cyan-300" href="">
            About
          </a>
          <a className="hover:text-cyan-300" href="">
            Contact
          </a>
          <a className="hover:text-cyan-300" href="">
            Projet
          </a>
        </div>
        <div className="sm: px-2 py-1 rounded-lg hover:bg-violet-600 cursor-pointer border bg-blue-400">
          Login
        </div>
        <div className="sm:hidden">
          <span className="h-24 w-24">&#9776;</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
