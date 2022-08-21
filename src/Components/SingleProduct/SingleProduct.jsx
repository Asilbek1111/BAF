import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import ModalBtn from "../ModalBtn/ModalBtn";
import Navbar from "../Navbar/Navbar";
import Pink from "../Pink/Pink";
import "./SingleProduct.css";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";
import { MyContext } from "../../Context/Context";
const SingleProduct = () => {
  var { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [sProduct, setSProduct] = useState([]);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/`)
      .then((res) => res.json())
      .then((data) => setProduct(data.find((e) => e.id === Number(productId))));
  }, [productId]);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/services/`)
      .then((res) => res.json())
      .then((data) =>
        setSProduct(data.find((e) => e.id === Number(productId)))
      );
  }, [productId]);

  const { pro, service, lang } = useContext(MyContext);
  return (
    <div className="singleProduct">
      <Navbar />
      {pro && (
        <>
          <div className="both">
            <Bounce left cascade>
              <div className="b-left">
                <h1>
                  {lang === "RU" && "Продукт"}
                  {lang === "EN" && "Product"}
                  {lang === "UZ" && "Mahsulot"}
                </h1>
                <h1>
                  {lang === "UZ" && product.name_uz}
                  {lang === "EN" && product.name_en}
                  {lang === "RU" && product.name_ru}
                </h1>
                <h2>
                  {lang === "RU" && "Цена договорная"}
                  {lang === "EN" && "Price negotiable"}
                  {lang === "UZ" && "Kelishilgan narxda"}
                </h2>
                <ModalBtn />
              </div>
            </Bounce>
            <div className="b-right">
              <Rotate>
                <img src={product.image1} alt="" />
              </Rotate>
            </div>
          </div>
          <Flip left>
            <div className="desc">
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                {lang === "RU" && "Описание"}
                {lang === "EN" && "Description"}
                {lang === "UZ" && "Tavsif"}
              </h1>
              <p>
                {lang === "UZ" && product.description_uz}
                {lang === "EN" && product.description_en}
                {lang === "RU" && product.description_ru}
              </p>
            </div>
          </Flip>
        </>
      )}
      {service && (
        <>
          <div className="both">
            <Bounce left cascade>
              <div className="b-left">
                <h1>
                  {lang === "RU" && "Продукт"}
                  {lang === "EN" && "Product"}
                  {lang === "UZ" && "Mahsulot"}
                </h1>
                <h1>
                  {lang === "UZ" && sProduct.name_uz}
                  {lang === "RU" && sProduct.name_ru}
                  {lang === "EN" && sProduct.name_en}
                </h1>
                <h2>
                  {lang === "RU" && "Цена договорная"}
                  {lang === "EN" && "Price negotiable"}
                  {lang === "UZ" && "Kelishilgan narxda"}
                </h2>
                <ModalBtn />
              </div>
            </Bounce>
            <div className="b-right s-wrap">
              <Rotate>
                <img src={sProduct.image1} alt="" />
                <img src={sProduct.image2} alt="" />
                <img src={sProduct.image3} alt="" />
              </Rotate>
            </div>
          </div>
          <Flip left>
            <div className="desc">
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                {lang === "RU" && "Описание"}
                {lang === "EN" && "Description"}
                {lang === "UZ" && "Tavsif"}
              </h1>
              <p>
                {lang === "UZ" && sProduct.description_uz}
                {lang === "EN" && sProduct.description_en}
                {lang === "RU" && sProduct.description_ru}
              </p>
            </div>
          </Flip>
        </>
      )}
      <Pink />
      <Footer />
    </div>
  );
};

export default SingleProduct;
