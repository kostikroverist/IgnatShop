import "./bannerCarousel.scss";

import SliderImg from "../../assets/SliderImage.jpg";
import SliderImgTwo from "../../assets/photo_2024-03-17_12-23-52.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const BannerCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination
      >
        <SwiperSlide>
          <section
            className="banner-carousel"
            style={{ backgroundImage: `url(${SliderImg})` }}
          >
            <div className="banner-carousel__container">
              <div className="banner-carousel__text">
                <h1>Швидше.</h1>
                <h1>Вище.</h1>
                <h1>Сильніше.</h1>
                <p>Разом із Nike</p>
              </div>
              <div className="banner-carousel__info">
                <div className="banner-carousel__discount">
                  <p>Знижка до 40%</p>
                </div>
                <div className="banner-carousel__availability">
                  <p>Залишився лише тиждень</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="banner-carousel"
            style={{ backgroundImage: `url(${SliderImgTwo})` }}
          >
            <div className="banner-carousel__container">
              <div className="banner-carousel__text">
                <h1>Спорт.</h1>
                <h1>Це.</h1>
                <h1>Життя.</h1>
                <p>Разом із Nike</p>
              </div>
              <div className="banner-carousel__info">
                <div className="banner-carousel__discount">
                  <p>Знижка до 30%</p>
                </div>
                <div className="banner-carousel__availability">
                  <p>Залишився лише тиждень</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerCarousel;
