import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import Card from "../components/Card";
import cardsData from "../assets/cardsData";
import Footer from "../components/FooterLanding";

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedCountry && selectedCity) {
      navigate("/restaurants", {
        state: { country: selectedCountry, city: selectedCity },
      });
    } else {
      alert("Please select a country and city.");
    }
  };

  return (
    <div className="font-alegreya">
      {/* Navbar */}
      <NavbarHome userName="Miheer" />

      {/* Main Content */}
      <div className="mt-16"> {/* Offset for fixed Navbar */}
        {/* Hero Section */}
        <div className="relative w-full h-[66.67vh]">
          <img
            src="bg.avif" // Replace with your image path
            alt="Home Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
            {/* Greeting */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Welcome back,{" "}
              <span className="text-soft-b font-extrabold text-5xl md:text-6xl">
                Miheer
              </span>
            </h1>

            {/* Search Bar */}
            <div className="w-full max-w-xl flex bg-white rounded-full shadow-lg overflow-hidden">
              <select
                className="p-3 w-1/3 text-gray-700 bg-transparent border-r outline-none"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="uk">UK</option>
              </select>
              <input
                type="text"
                placeholder="Enter City"
                className="p-3 text-gray-700 outline-none w-3/4"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
              <button
                className="bg-blue-500 w-1/5 text-white px-6 py-3 rounded-r-full hover:bg-soft-y hover:text-deep-b transition-all"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl mt-10 text-center">
              "Discover the Best with Foodio!"
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative w-full bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6">
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