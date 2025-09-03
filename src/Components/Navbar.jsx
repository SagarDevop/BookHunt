import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center px-6 py-4 bg-transparent fixed top-0 left-0 w-full z-50">
      
      <h1 className="text-2xl font-bold text-brown-200">BookHunt</h1>

      
      <ul className="hidden md:flex space-x-[8vw] text-lg font-medium text-brown-100">
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

      {/* Mobile */}
      <button
        className="md:hidden text-brown-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      
      {isOpen && (
        <div className="absolute top-full right-0 w-[50%] bg-opacity-95 shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-6 text-lg font-medium text-brown-100">
            <Link
              to="/"
              className="hover:text-[#AB886D] cursor-pointer hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#AB886D] cursor-pointer hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#AB886D] cursor-pointer hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
