import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import ModalBtn from "../ModalBtn/ModalBtn";
import Navbar from "../Navbar/Navbar";
import Pink from "../Pink/Pink";
import "./SingleProduct.css";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";
const SingleProduct = () => {
  var { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/`)
      .then((res) => res.json())
      .then((data) => setProduct(data.find((e) => e.id === Number(productId))));
  }, [productId]);
  return (
    <div className="singleProduct">
      <Navbar />
      <div className="both">
        <Bounce left cascade>
          <div className="b-left">
            <h1>Mahsulot</h1>
            <h1>{product.name_uz}</h1>
            <h2>Narxi: Kelishilgan narxda</h2>
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
            Descripton
          </h1>
          <p>{product.description_uz}</p>
        </div>
      </Flip>
      <Pink />
      <Footer />
    </div>
  );
};

export default SingleProduct;
