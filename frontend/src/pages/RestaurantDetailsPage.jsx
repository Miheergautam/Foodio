import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarRestaurant from "../components/NavbarRestaurant";

import Overview from "../components/RestaurantDetailsPage/Overview";
import OrderOnline from "../components/RestaurantDetailsPage/OrderOnline";
import Reviews from "../components/RestaurantDetailsPage/Reviews";

const RestaurantDetailsPage = () => {
  const location = useLocation();
  const restaurant = location.state?.restaurant;

  const [activeTab, setActiveTab] = useState("overview");

  if (!restaurant) {
    return (
      <div className="font-alegreya">
        <NavbarRestaurant userName="User" />
        <div className="max-w-7xl mx-auto mt-6 p-6">
          <p className="text-center text-red-600 text-lg">
            Restaurant details not found. Please go back and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-alegreya">
      <NavbarRestaurant userName="User" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-md border-b">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <span className="text-deep-b font-bold">{restaurant.country}</span>{" "}
            /<span className="text-deep-b font-bold"> {restaurant.city}</span> /
            <span className="text-deep-b font-bold"> {restaurant.name}</span>
          </p>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="max-w-7xl mx-auto mt-6 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-deep-b">
              {restaurant.name}
            </h1>
            <p className="text-gray-600 mt-2 text-lg">{restaurant.address}</p>

            {/* Contact info - Extracting values if it's an object */}
            {restaurant.contact && (
              <>
                <p className="text-gray-600 mt-1 text-lg">
                  Phone: {restaurant.contact.phone}
                </p>
                <p className="text-gray-600 mt-1 text-lg">
                  Email: {restaurant.contact.email}
                </p>
              </>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-deep-b text-white py-2 px-6 rounded-lg hover:bg-deep-b-dark transition">
                Order Now
              </button>
              <button className="bg-soft-y text-deep-b py-2 px-6 rounded-lg hover:bg-soft-y-dark transition">
                Book a Table
              </button>
              <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition">
                Add to Favorites
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
            <p className="text-2xl font-bold text-deep-b">Rating:</p>
            <p className="text-3xl font-bold">{restaurant.rating} ⭐</p>
          </div>
        </div>

        {/* Photos */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurant.photos?.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${restaurant.name} photo ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b">
            <button
              className={`text-lg font-bold py-2 px-6 ${
                activeTab === "overview"
                  ? "text-deep-b border-b-2 border-deep-b"
                  : "text-gray-600"
              } hover:text-deep-b`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`text-lg font-bold py-2 px-6 ${
                activeTab === "orderOnline"
                  ? "text-deep-b border-b-2 border-deep-b"
                  : "text-gray-600"
              } hover:text-deep-b`}
              onClick={() => setActiveTab("orderOnline")}
            >
              Order Online
            </button>
            <button
              className={`text-lg font-bold py-2 px-6 ${
                activeTab === "reviews"
                  ? "text-deep-b border-b-2 border-deep-b"
                  : "text-gray-600"
              } hover:text-deep-b`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* Render Tab Content */}
          {activeTab === "overview" && <Overview restaurant={restaurant} />}
          {activeTab === "orderOnline" && (
            <OrderOnline restaurant={restaurant} />
          )}
          {activeTab === "reviews" && <Reviews restaurant={restaurant} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;
