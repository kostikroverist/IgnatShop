import Button from "../../elements/Button/Button";
import "./catalogNavigation.scss";
import CatalogImg from "../../assets/Rectangle 6.jpg";
import { Link } from "react-router-dom";
const CatalogNavigation = () => {
  return (
    <section className="catalog-navigation">
      <div className="catalog-navigation__container">
        <div className="catalog-navigation__text">
          <div>
            <h2 className="catalog-navigation__title">
              Ми знаємо, що сподобається вашим “великим” друзям!
            </h2>
            <p className="catalog-navigation__description">
              Обирай подарунок своїм друзями бодібілдерам із нашою новою
              колекцію термобілизни “Big warm”
            </p>
            <Link to={''}>
              <Button text="До каталогу" theme="dark" />
            </Link>
          </div>
        </div>
        <div className="catalog-navigation__image">
          <img src={CatalogImg} alt="catalog-img" />
        </div>
      </div>
    </section>
  );
};

export default CatalogNavigation;
