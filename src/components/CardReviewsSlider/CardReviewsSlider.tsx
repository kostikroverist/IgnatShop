import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { cardReviewsData } from "../../constant/constant";
import CardReviews from "../CardReviews/CardReviews";
import "swiper/scss";
import "./cardReviewSlider.scss";
import { useState } from "react";
import PaginationInfo from "../PaginationInfo/PaginationInfo";
const CardReviewsSlider = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    setActiveIndex(controlledSwiper?.activeIndex || 0);
  };
  return (
    <section className="card-reviews">
      <div className="card-reviews__container">
        <div className="swiper-header-button-group">
          <h3>Відгуги наших клієнтів</h3>
          <div className="swiper-pagination-button">
            <div>
              <PaginationInfo
                current={Math.floor(activeIndex / 3) + 1}
                total={Math.ceil(cardReviewsData.length / 4)}
              />
            </div>
            <div className="button-group">
              <button className="icon-swiper-button-prev-2 swiper-button-disabled">
                <HiOutlineArrowNarrowLeft size={25} />
              </button>
              <button className="icon-swiper-button-next-2 swiper-button-disabled">
                <HiOutlineArrowNarrowRight size={25} />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation]}
          slidesPerGroup={4}
          onSwiper={setControlledSwiper}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: ".icon-swiper-button-next-2",
            prevEl: ".icon-swiper-button-prev-2",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {cardReviewsData.map((cardReview) => (
            <SwiperSlide key={cardReview.id}>
              <CardReviews key={cardReview.id} {...cardReview} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CardReviewsSlider;
