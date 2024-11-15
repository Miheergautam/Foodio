import React from "react";

const Navbar = ({ openModal }) => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 font-alegreya">
    <div className="max-w-7xl mx-auto p-3 flex justify-between">
      <a href="/" className="text-4xl text-deep-b font-bold">
        FOODIO
      </a>
      <div className="flex gap-4">
        <button
          className="bg-deep-b text-white py-2 px-6 rounded-2xl"
          onClick={() => openModal("login")}
        >
          Sign In
        </button>
        <button
          className="bg-deep-b text-white py-2 px-6 rounded-2xl"
          onClick={() => openModal("signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
