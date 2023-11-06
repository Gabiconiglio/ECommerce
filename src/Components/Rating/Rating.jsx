import React from "react";
import "../Rating/Rating.css";

function Rating({ Rank}) {
  const maxRating = 5;
  const rating = parseInt(Rank);
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      const isChecked = i <= rating;
      stars.push(
        <input
          type="radio"
          name="rating"
          className={`mask mask-star-2 ${isChecked ? "checked" : ""}`}
          key={i}
          disabled
        />
      );
    }
    const dif = maxRating - rating;
    for (let i = 1; i <= dif; i++) {
      stars.push(
        <input
          type="radio"
          name="rating"
          className="mask mask-star-2"
          id="blancas"
          key={i + Rank} 
          disabled
        />
      );
    }

    return stars;
  };

  return <div className="rating rating-lg">{renderStars()}</div>;
}

export default Rating;
