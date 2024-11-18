import React from "react";

const Reviews = ({ restaurant }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-deep-b mb-4">Customer Reviews</h2>
      {restaurant.reviews?.length > 0 ? (
        <div>
          {restaurant.reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg text-gray-700">
                <strong>{review.user}</strong>: {review.comment}
              </p>
              <p className="text-sm text-gray-500">Rating: {review.rating} ⭐</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      )}
    </div>
  );
};

export default Reviews;