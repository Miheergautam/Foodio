import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-screen font-alegreya">
      {/* Background Image */}
      <div className="relative w-full h-[75%]">
        <img
          src="bg.avif" // Replace with your image path
          alt="Landing Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 w-full h-[75%] flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-8">
          Welcome to{" "}
          <span className="text-soft-b font-extrabold text-6xl">FOODIO</span>
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-xl flex between bg-white rounded-full shadow-lg overflow-hidden">
          {/* Dropdown for Country */}
          <select
            className="p-3 w-1/3 text-gray-700 bg-transparent border-r outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
          </select>

          {/* Input for City */}
          <input
            type="text"
            placeholder="Enter City"
            className="p-3 text-gray-700 outline-none w-3/4"
          />

          {/* Search Button */}
          <button className="bg-blue-500 w-1/5 text-white px-6 py-3 rounded-r-full hover:bg-soft-y hover:text-deep-b">
            Search
          </button>
        </div>

        {/* Slogan */}
        <p className="text-3xl mt-10">"Carve Click & Enjoy!"</p>
      </div>
    </div>
  );
};

export default LandingPage;
