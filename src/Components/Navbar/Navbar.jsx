import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";
import Logo from "../../Images/logo.png";
import "./Navbar.css";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const { lang } = useContext(MyContext);
  return (
    <div className="navbar">
      <div className="n-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="n-list">
          <li className="n-item">
            <a href="/#service">
              {lang === "RU" && "Продукты"}
              {lang === "EN" && "Products"}
              {lang === "UZ" && "Mahsulotlar"}
            </a>
          </li>
          <li className="n-item">
            <Link to="/about">
              {lang === "RU" && "О нас"}
              {lang === "EN" && "About us"}
              {lang === "UZ" && "Biz haqimizda"}
            </Link>
          </li>
          <li className="n-item">
            <a href="/#brands">
              {lang === "RU" && "Наши фабрики"}
              {lang === "EN" && "Our firms"}
              {lang === "UZ" && "Bizning fabrika"}
            </a>
          </li>
          <li className="n-item">
            <a href="/#contact">
              {lang === "RU" && "Связь"}
              {lang === "EN" && "Contact"}
              {lang === "UZ" && "Aloqa"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
