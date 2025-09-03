import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-around items-center px-6 py-[7vh] bg-transparent fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-brown-200">BookHunt </h1>
      <ul className="flex space-x-[8vw] text-lg font-medium text-brown-100">
        <Link 
          to="/"
          className="hover:text-[#AB886D] cursor-pointer hover:underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-[#AB886D] cursor-pointer hover:underline"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#AB886D] cursor-pointer hover:underline"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
