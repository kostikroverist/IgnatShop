import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import "./footerTop.scss";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-top__contact">
        <div>
          <p className="footer-top__links-heading">Контакт - центр</p>
          <p className="footer-top__info">098 900 09 09</p>
          <p className="footer-top__info">Пн - Пт 09:00 - 21:00</p>
          <p className="footer-top__info">Пн - Пт 09:00 - 21:00</p>
        </div>
        <div className="footer-top__social">
          <AiFillInstagram size={28} />
          <IoLogoWhatsapp size={28} />
          <FaTelegram size={28} />
        </div>
      </div>
      <div className="footer-top__contact-info">
        <div>
          <div>
            <p className="footer-top__links-heading">Покупцям</p>
          </div>
          <div className="flex-column">
            <Link to="#" className="footer-top__link-info">
              Оплата і доставка
            </Link>
            <Link to="#" className="footer-top__link-info">
              Повернення
            </Link>
            <Link to="#" className="footer-top__link-info">
              Питання та відповіді
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="footer-top__links-heading">Покупцям</p>
          </div>
          <div className="flex-column">
            <Link to="#" className="footer-top__link-info">
              Мої дані
            </Link>
            <Link to="#" className="footer-top__link-info">
              Історія замовлень
            </Link>
            <Link to="#" className="footer-top__link-info">
              Улюблені
            </Link>
            <Link to="#" className="footer-top__link-info">
              Розсилки
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="footer-top__links-heading">Про компанію</p>
          </div>
          <div className="flex-column">
            <Link to="#" className="footer-top__link-info">
              Про нас
            </Link>
            <Link to="#" className="footer-top__link-info">
              Новини
            </Link>
            <Link to="#" className="footer-top__link-info">
              Стати партнером
            </Link>
            <Link to="#" className="footer-top__link-info">
              Угода користувача
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
