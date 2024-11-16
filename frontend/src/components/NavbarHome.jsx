import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const NavbarHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 font-alegreya">
      <div className="max-w-7xl mx-auto p-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-4xl text-deep-b font-bold">
          FOODIO
        </a>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUserCircle className="text-3xl text-deep-b" />
            <span className="text-lg font-medium">Miheer</span>
            <AiFillCaretDown className="text-deep-b" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Notifications
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                  onClick={() => console.log("Logout")}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;