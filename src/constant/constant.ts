import { ICardReviews, IProductCard } from "../interface/Cards";
import Man from '../assets/Man.jpg'
import Woman from '../assets/Woman.jpg'
import Accessories from '../assets/Accessories.jpg'
import user from "../assets/Mask.png";

export const products: IProductCard[] = [
    {
        id: 1,
        title: "Термобілизна для бодібілдерів",
        type: "man",
        information: "Інформація про продукт 1",
        price: 100,
        isLiked: false,
        imageUrl: Man,
    },
    {
        id: 2,
        title: "Продукт 2",
        type: "woman",
        information: "Інформація про продукт 2",
        price: 150,
        isLiked: false,
        imageUrl: Woman,
    },
    {
        id: 3,
        title: "Продукт 3",
        type: "accessories",
        information: "Інформація про продукт 3",
        price: 80,
        isLiked: false,
        imageUrl: Accessories,
    },
    {
        id: 4,
        title: "Продукт 4",
        type: "man",
        information: "Інформація про продукт 4",
        price: 120,
        isLiked: false,
        imageUrl: Accessories,
    },
    {
        id: 5,
        title: "Продукт 5",
        type: "woman",
        information: "Інформація про продукт 5",
        price: 200,
        isLiked: false,
        imageUrl: Woman,
    },
    {
        id: 6,
        title: "Продукт 6",
        type: "accessories",
        information: "Інформація про продукт 6",
        price: 90,
        isLiked: false,
        imageUrl: Accessories,
    },
    {
        id: 7,
        title: "Продукт 7",
        type: "man",
        information: "Інформація про продукт 7",
        price: 110,
        isLiked: false,
        imageUrl: Man,
    },
    {
        id: 8,
        title: "Продукт 8",
        type: "woman",
        information: "Інформація про продукт 8",
        price: 180,
        isLiked: false,
        imageUrl: Woman
    },
    {
        id: 9,
        title: "Продукт 9",
        type: "accessories",
        information: "Інформація про продукт 9",
        price: 70,
        isLiked: false,
        imageUrl: Accessories,
    }
];

export const cardReviewsData: ICardReviews[] = [
    {
        id: 1,
        totalStars: 5,
        initialRating: 4,
        userImage: user,
        userName: "Жора Ремінгтон",
        review:
            "Дуже задоволений  якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі..."
    },
    {
        id: 2,
        totalStars: 5,
        initialRating: 5,
        userImage: user,
        userName: "Марія Семенченко",
        review:
            "Великий вибір якісних товарів, швидка доставка і приємні ціни. Рекомендую!"
    },
    {
        id: 3,
        totalStars: 5,
        initialRating: 3,
        userImage: user,
        userName: "Андрій Петренко",
        review:
            "Не зовсім задоволений. Товар був трохи пошкоджений при доставці. Однак після звернення в службу підтримки, проблему швидко вирішили."
    },
    {
        id: 4,
        totalStars: 5,
        initialRating: 2,
        userImage: user,
        userName: "Олександр Ковальов",
        review:
            "Невдоволений якістю товару. Після кількох днів використання почали виявлятися дефекти. Рекомендую звернутися до іншого виробника."
    },
    {
        id: 5,
        totalStars: 5,
        initialRating: 4,
        userImage: user,
        userName: "Ірина Литвиненко",
        review:
            "Прекрасний сервіс і великий вибір товарів. Завжди можна знайти те, що потрібно."
    },
    {
        id: 6,
        totalStars: 5,
        initialRating: 5,
        userImage: user,
        userName: "Петро Васильченко",
        review:
            "Чудовий досвід покупки. Все було доставлено вчасно, без проблем і з відмінною якістю."
    },
    {
        id: 7,
        totalStars: 5,
        initialRating: 3,
        userImage: user,
        userName: "Олена Мельник",
        review:
            "Загалом, задоволена, але доставка трохи затягується, а так все добре."
    },
    {
        id: 8,
        totalStars: 5,
        initialRating: 4,
        userImage: user,
        userName: "Антон Сидоренко",
        review:
            "Все пройшло дуже добре, однак були незначні проблеми з упаковкою товару. Буду замовляти ще раз."
    },
];

