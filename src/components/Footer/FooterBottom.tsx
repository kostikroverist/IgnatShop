import { Link } from "react-router-dom";
import "./footerBottom.scss";
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom__container">
        <div className="footer-bottom__menu-wrapper">
          <nav>
            <Link to={""}>новинки</Link>
            <Link to={""}>чоловіки</Link>
            <Link to={""}>жінки</Link>
            <Link to={""}>аксесуари</Link>
            <Link to={""}>акції</Link>
          </nav>
        </div>
        <div className="footer-bottom__copyright">
          <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
