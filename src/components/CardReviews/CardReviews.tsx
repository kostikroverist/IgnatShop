import StarRating from "../StarRating/StarRating";
import "./cardReviews.scss";
import { FC } from "react";
import { ICardReviews } from "../../interface/Cards";

const CardReviews: FC<ICardReviews> = ({
  totalStars,
  initialRating,
  userImage,
  userName,
  review,
}) => {
  return (
    <div className="card-review">
      <div className="card-review__container">
        <div className="card-review__user-info">
          <div className="card-review__user-img">
            <img src={userImage} alt="userImg" />
          </div>
          <div>
            <StarRating totalStars={totalStars} initialRating={initialRating} />
            <p className="card-review__user-name">{userName}</p>
          </div>
        </div>
        <div>
          <p className="card-review__review">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReviews;
