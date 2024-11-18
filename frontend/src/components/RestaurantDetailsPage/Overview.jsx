import React from "react";

const Overview = ({ restaurant }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-deep-b mb-4">Restaurant Overview</h2>
      <p className="text-lg text-gray-700">{restaurant.description || "No description available."}</p>
    </div>
  );
};

export default Overview;