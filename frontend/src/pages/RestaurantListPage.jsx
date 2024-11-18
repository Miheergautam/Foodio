import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
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

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/restaurants/list`,
          {
            params: { country, city },
          }
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        alert("Failed to fetch restaurants. Please try again later.");
      }
    };

    fetchRestaurants();
  }, [country, city, navigate]);

  const handleViewDetails = (restaurant) => {
    navigate("/restaurant-details", { state: restaurant });
  };

  return (
    <div className="font-alegreya">
      {/* Navbar */}
      <NavbarRestaurant userName="User" />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 text-sm">
            <span className="text-deep-b font-bold">{country}</span> /
            Restaurants in <span className="text-deep-b font-bold">{city}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 p-6">
        <h1 className="text-3xl font-bold text-deep-b mb-6">
          Explore Restaurants in <span className="text-soft-b">{city}</span>
        </h1>

        {restaurants.length > 0 ? (
          <div className="flex flex-col gap-8">
            {restaurants.map((restaurant, index) => (
              <div
                key={
                  restaurant.id ||
                  `${restaurant.name}-${restaurant.city}-${index}`
                }
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex items-start p-4"
              >
                {/* Restaurant Image */}
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-40 h-40 object-cover rounded-l-lg"
                />

                {/* Content Section */}
                <div className="flex-1 px-4 flex flex-col">
                  <h2 className="text-xl font-semibold text-deep-b truncate">
                    {restaurant.name}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm flex-grow">
                    {restaurant.description}
                  </p>

                  {/* Button Section */}
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-deep-b text-white py-2 px-4 rounded-lg hover:bg-soft-y hover:text-deep-b transition-all"
                      onClick={() =>
                        navigate("/restaurant-details", {
                          state: { restaurant },
                        })
                      }
                    >
                      View Details
                    </button>
                  </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Foodio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantListPage;
