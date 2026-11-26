import React,{useState} from "react";

export default function StarRatingDynamic() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <h2>Rate Us:</h2>
      {[1,2,3,4,5].map((starNumber) => (
        <span
          key={starNumber}
          onClick={() => setRating(starNumber)}
          onMouseEnter={() => setHover(starNumber)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: "50px",
            cursor: "pointer",
            color: starNumber <= (hover || rating) ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}
      <p>Your Rating: {rating} / 5</p>
    </div>
  );
}
