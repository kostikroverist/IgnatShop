import { Link } from "react-router-dom";
import "./headerBottom.scss";
import { CiHeart } from "react-icons/ci";
import { GrBasket } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../../assets/Logo.png";
const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom__container">
        <div>
          <img src={Logo} alt="Logo" />
          {/* <p className="header-bottom__logo">IGNAT</p> */}
        </div>
        <div className="header-bottom__menu-wrapper">
          <nav>
            <Link to={""}>новинки</Link>
            <Link to={""}>чоловіки</Link>
            <Link to={""}>жінки</Link>
            <Link to={""}>аксесуари</Link>
            <Link to={""}>акції</Link>
          </nav>
        </div>
        <div className="flex">
          <div className="header-bottom__search-bar">
            <RiSearch2Line size={28} />
            <input />
          </div>
          <div className="header-bottom__icon-links">
            <Link to={""}>
              <CiHeart size={28} />
            </Link>
            <Link to={""}>
              <GrBasket size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
