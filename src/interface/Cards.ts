export interface IProductCard {
    id: number;
    title: string;
    type: "man" | "woman" | "accessories";
    information: string;
    price: number;
    isLiked?: boolean;
    imageUrl: string;
}

export interface ICardReviews {
    id: number;
    totalStars: number;
    initialRating?: number;
    userImage: string;
    userName: string;
    review: string;
}