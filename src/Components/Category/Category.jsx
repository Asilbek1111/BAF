import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import Flip from "react-reveal/Flip";

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var { id } = useParams();
  return (
    <div className="Category">
      <Navbar />
      <h1>Our products</h1>
      <Flip right cascade>
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
      </Flip>
      <Contact />
      <Footer />
    </div>
  );
};

export default Category;
