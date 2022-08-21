import React, { useContext, useEffect, useRef, useState } from "react";
import "./Service.css";
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
  let bir = useRef();
  let ikki = useRef();
  const { lang } = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [sproducts, setSProducts] = useState([]);

  useEffect(() => {
    fetch("https://api-baf.abba.uz/categories/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://api-baf.abba.uz/service_category/")
      .then((response) => response.json())
      .then((data) => setSProducts(data));
  }, []);

  function productHandle() {
    setPro(true);
    setService(false);
  }

  function serviceHandle() {
    setService(true);
    setPro(false);
  }
  const { pro, setPro, service, setService } = useContext(MyContext);
  return (
    <div className="service">
      <Flip left>
        <h1>
          {lang === "RU" && "Что мы предлагаем?"}
          {lang === "EN" && "What we suggest?"}
          {lang === "UZ" && "Biz nima taklif qilamiz?"}
        </h1>
      </Flip>
      <div className="what" id="service">
        <div
          ref={bir}
          style={
            pro
              ? { backgroundColor: "#5b8a8d", color: "white" }
              : { backgroundColor: "white", color: "#5b8a8d" }
          }
          className="bir"
          onClick={productHandle}
        >
          {lang === "RU" && "Продукты"}
          {lang === "EN" && "Products"}
          {lang === "UZ" && "Mahsulotlar"}
        </div>
        <div
          ref={ikki}
          style={
            service
              ? { backgroundColor: "#5b8a8d", color: "white" }
              : { backgroundColor: "white", color: "#5b8a8d" }
          }
          className="ikki"
          onClick={serviceHandle}
        >
          {lang === "RU" && "Услуги"}
          {lang === "EN" && "Service"}
          {lang === "UZ" && "Xizmatlar"}
        </div>
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
            {pro &&
              products
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

            {service &&
              sproducts
                .filter((e) => e.image)
                .map((product, i) => (
                  <SwiperSlide
                    id={product.id}
                    key={i}
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <Link id={product.id} to={`/product=${product.id}`}>
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
