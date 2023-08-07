import React from "react";
import { FaStarHalf, FaStar } from "react-icons/fa"; // Import the FaStar and FaStarHalf icons from react-icons/fa

const StarRating = ({ rating }) => {
  const MAX_RATING = 5;

  if (isNaN(rating) || rating < 0 || rating > MAX_RATING) {
    return null;
  }


  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const remainingStars = MAX_RATING - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={index} className="h-4 w-4 text-yellow-500" />
      ))}
      {hasHalfStar && (
        <FaStarHalf className="h-4 w-4 text-yellow-500" />
      )}
      {[...Array(remainingStars)].map((_, index) => (
        <FaStar key={index} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
