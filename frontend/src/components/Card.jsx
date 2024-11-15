import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section (2/3 of the card) */}
      <div className="h-2/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section (1/3 of the card) */}
      <div className="h-1/3 p-4 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;