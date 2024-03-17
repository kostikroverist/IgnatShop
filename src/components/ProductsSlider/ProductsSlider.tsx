import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../constant/constant";
import "swiper/scss";
import "./productsSlider.scss";
import PaginationInfo from "../PaginationInfo/PaginationInfo";
import { useState } from "react";
const ProductsSlider = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    setActiveIndex(controlledSwiper?.activeIndex || 0);
  };
  return (
    <section className="product-slider">
      <div className="product-slider__container">
        <div className="swiper-header-button-group">
          <h3>Найгарячіші товари</h3>
          <div className="swiper-pagination-button">
            <div>
              <PaginationInfo
                current={Math.floor(activeIndex / 3) + 1}
                total={Math.ceil(products.length / 3)}
              />
            </div>
            <div className="button-group">
              <button className="icon-swiper-button-prev-1 swiper-button-disabled">
                <HiOutlineArrowNarrowLeft size={25} />
              </button>
              <button className="icon-swiper-button-next-1 swiper-button-disabled">
                <HiOutlineArrowNarrowRight size={25} />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          onSwiper={setControlledSwiper}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".icon-swiper-button-next-1",
            prevEl: ".icon-swiper-button-prev-1",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSlider;
