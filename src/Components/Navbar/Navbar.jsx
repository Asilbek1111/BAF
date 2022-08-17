import React, { useContext } from 'react';
import { MyContext } from '../../Context/Context';
import Logo from '../../Images/logo.png'
import './Navbar.css'

const Navbar = () => {
   const { lang, setLang } = useContext(MyContext);
    return (
      <div className="navbar">
        <div className="n-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="n-list">
            <li className="n-item">
              {lang === "RU" && "Продукты"}
              {lang === "EN" && "Products"}
              {lang === "UZ" && "Mahsulotlar"}
            </li>
            <li className="n-item">
              {lang === "RU" && "О нас"}
              {lang === "EN" && "About us"}
              {lang === "UZ" && "Biz haqimizda"}
            </li>
            <li className="n-item">
              {lang === "RU" && "Наши фабрики"}
              {lang === "EN" && "Our firms"}
              {lang === "UZ" && "Bizning fabrika"}
            </li>
            <li className="n-item">
              {lang === "RU" && "Связь"}
              {lang === "EN" && "Contact"}
              {lang === "UZ" && "Aloqa"}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;
