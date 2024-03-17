import { FC, useState } from "react";
import "./productCard.scss";
import { IProductCard } from "../../interface/Cards";
import { FaRegHeart } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
const ProductCard: FC<IProductCard> = ({
  title,
  type,
  information,
  price,
  isLiked,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img alt={type} src={imageUrl} />
        <button className="product-card__likeButton" onClick={toggleLike}>
          {liked ? (
            <IoHeartSharp size={24} fill="red" />
          ) : (
            <FaRegHeart size={20} />
          )}
        </button>
      </div>
      <div className="product-card__info">
        <h4>{title}</h4>
        <div className="product-card__type-info">
          <p>{type}</p>
          <p>{information}</p>
        </div>
      </div>
      <div className="product-card__price">
        <p>{price} грн.</p>
      </div>
    </div>
  );
};

export default ProductCard;
