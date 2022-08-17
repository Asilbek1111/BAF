import React, { useContext, useEffect, useState } from "react";
import "./Service.css";
import First from "../../Images/1.png";
import Flip from "react-reveal/Flip";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { MyContext } from "../../Context/Context";
import { Link } from "react-router-dom";
// import "swiper/css/pagination";
// import { useEffect } from "react";

const Service = () => {
  const { lang, setLang } = useContext(MyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://93.189.40.27:2200/categories/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="service">
      <Flip left>
        <h1>
          {lang === "RU" && "Что мы предлагаем?"}
          {lang === "EN" && "What we suggest?"}
          {lang === "UZ" && "Biz nima taklif qilamiz?"}
        </h1>
      </Flip>
      <div className="what">
        <div className="bir">Продукты</div>
        <div className="ikki">Услуги</div>
      </div>
      <>
        <Flip left>
          <Swiper
            slidesPerView={4}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            slidesPerGroupSkip={4}
            className="mySwiper"
          >
            {products
              .filter((e) => e.image)
              .map((product, i) => (
                <SwiperSlide
                  id={product.id}
                  key={i}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <Link id={product.id} to={`/categoryId=${product.id}`}>
                    <div className="card">
                      <div className="c-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="card-b">
                        {lang === "UZ" && product.name_uz}
                        {lang === "EN" && product.name_en}
                        {lang === "RU" && product.name_ru}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </Flip>
      </>
    </div>
  );
};

export default Service;
