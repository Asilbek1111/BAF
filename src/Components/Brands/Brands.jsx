import React from "react";
import "./Brands.css";
import Swipe from "../../Images/swipe.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Rotate from "react-reveal/Rotate";

const Brands = () => {
  return (
    <div className="brands">
      <Rotate>
        <Swiper
          grabCursor="true"
          //   slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Swipe} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Swipe} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swipe} alt="" />
          </SwiperSlide>
        </Swiper>
      </Rotate>
    </div>
  );
};

export default Brands;
