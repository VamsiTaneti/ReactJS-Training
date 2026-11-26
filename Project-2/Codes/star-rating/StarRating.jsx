import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h2>Rate Us:</h2>
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <span
          key={starNumber}
          onClick={() => setRating(starNumber)}
          style={{
            fontSize: "50px",
            cursor: "pointer",
            color: starNumber <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
      <p>Your Rating: {rating} / 5</p>
    </div>
  );
}
