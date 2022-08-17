import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Category.css";
import { Link, useParams } from "react-router-dom";


const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://93.189.40.27:2200/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var { id } = useParams();
  return (
    <div className="Category">
      <Navbar />
      <h1>Our products</h1>
      <div className="wrap-cards">
        {products
          .filter((e) => e.name_uz && e.image1 && e.category === Number(id))
          .map((product, i) => (
            <Link to={`/product=${product.id}`}>
              <div className="p-card">
                <img src={product.image1} alt="" />
                <div className="c-bottom">
                  <p>{product.name_uz}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Category;
