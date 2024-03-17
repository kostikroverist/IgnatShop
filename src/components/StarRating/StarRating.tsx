import { FC, useState, useEffect } from "react";

interface StarRatingProps {
  totalStars: number;
  initialRating?: number | undefined; // Додав параметр для початкового рейтингу
}

const StarRating: FC<StarRatingProps> = ({ totalStars, initialRating }) => {
  const [rating, setRating] = useState<number | undefined>(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = (starIndex: number) => {
    const newRating = starIndex + 1;
    setRating(newRating === rating ? newRating - 1 : newRating);
  };
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() =>
            initialRating === undefined ? handleClick(index) : null
          }
          style={{ cursor: "pointer" }}
        >
          {index < (rating || 0) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
