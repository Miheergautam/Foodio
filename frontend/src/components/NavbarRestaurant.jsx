import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ userName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 font-alegreya">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-4xl text-deep-b font-bold">
          FOODIO
        </a>

        {/* Search Bar with Button */}
        <div className="flex items-center flex-grow mx-8">
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="flex-grow py-2 px-4 rounded-l-full border border-gray-300 focus:ring-2 focus:ring-soft-b focus:outline-none"
          />
          <button
            className="bg-deep-b text-white px-6 py-2 rounded-r-full hover:bg-soft-y hover:text-deep-b transition-all"
          >
            Search
          </button>
        </div>

        {/* Profile Section with Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUserCircle size={32} className="text-gray-500" />
            <span className="text-lg font-medium">{userName || "User"}</span>
            <IoMdArrowDropdown size={24} className="text-gray-500" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/notifications"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Notifications
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <button
                onClick={() => alert("Logged out")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;