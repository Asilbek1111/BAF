import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import ModalBtn from "../ModalBtn/ModalBtn";
import Navbar from "../Navbar/Navbar";
import Pink from "../Pink/Pink";
import "./SingleProduct.css";

const SingleProduct = () => {
  var { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://93.189.40.27:2200/products/`)
      .then((res) => res.json())
      .then((data) => setProduct(data.find((e) => e.id === Number(productId))));
  }, []);
  return (
    <div className="singleProduct">
      <Navbar />
      <div className="both">
        <div className="b-left">
          <h1>Mahsulot</h1>
          <h1>{product.name_uz}</h1>
          <h2>Narxi: Kelishilgan narxda</h2>
          <ModalBtn />
        </div>
        <div className="b-right">
          <img src={product.image1} alt="" />
        </div>
      </div>

      <div className="desc">
        <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Descripton</h1>
        <p>{product.description_uz}</p>
      </div>
      <Pink />
      <Footer />
    </div>
  );
};

export default SingleProduct;
