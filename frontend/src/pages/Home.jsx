import React from "react";
import NavbarHome from "../components/NavbarHome";
import Card from "../components/Card";
import cardsData from "../assets/cardsData";
import Footer from "../components/FooterLanding";

const HomePage = () => {
  return (
    <div className="font-alegreya">
      {/* Navbar */}
      <NavbarHome userName="Miheer" />

      {/* Main Content */}
      <div className="mt-16"> {/* Offset for fixed Navbar */}
        {/* Image and Hero Section */}
        <div className="relative w-full h-[66.67vh]">
          <img
            src="bg.avif" // Replace with your image path
            alt="Home Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
            {/* Heading */}
            <h1 className="text-5xl font-bold mb-8">
              Welcome back,{" "}
              <span className="text-soft-b font-extrabold text-6xl">Miheer</span>
            </h1>

            {/* Search Bar */}
            <div className="w-full max-w-xl flex bg-white rounded-full shadow-lg overflow-hidden">
              <select
                className="p-3 w-1/3 text-gray-700 bg-transparent border-r outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select Country</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="uk">UK</option>
              </select>
              <input
                type="text"
                placeholder="Enter City"
                className="p-3 text-gray-700 outline-none w-3/4"
              />
              <button className="bg-blue-500 w-1/5 text-white px-6 py-3 rounded-r-full hover:bg-soft-y hover:text-deep-b">
                Search
              </button>
            </div>

            {/* Slogan */}
            <p className="text-3xl mt-10">"Discover the Best with Foodio!"</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative w-full bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 px-6">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;