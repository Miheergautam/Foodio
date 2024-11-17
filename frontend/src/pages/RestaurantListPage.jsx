import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarRestaurant from "../components/NavbarRestaurant";

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Get the state passed via navigate
  const { country, city } = location.state || {};

  useEffect(() => {
    if (!country || !city) {
      alert("Invalid navigation! Redirecting to home.");
      navigate("/");
      return;
    }

    // Replace this mock fetch with your API endpoint
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/restaurants?country=${country}&city=${city}`
        );
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [country, city, navigate]);

  return (
    <div className="font-alegreya">
      {/* Navbar */}
    <NavbarRestaurant userName="User" />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 text-sm">
            <span className="text-deep-b font-bold">{country}</span> / Restaurants in{" "}
            <span className="text-deep-b font-bold">{city}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 p-6">
        <h1 className="text-3xl font-bold text-deep-b mb-6">
          Explore Restaurants in <span className="text-soft-b">{city}</span>
        </h1>

        {restaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-deep-b truncate">
                    {restaurant.name}
                  </h2>
                  <p className="text-gray-600 mt-2 line-clamp-2 text-sm">
                    {restaurant.description}
                  </p>
                  <button className="bg-deep-b text-white py-2 px-4 mt-4 rounded-lg hover:bg-soft-y hover:text-deep-b transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-12">
            No restaurants found in <span className="text-deep-b">{city}</span>,{" "}
            <span className="text-soft-b">{country}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantListPage;