import React from "react";
import "./Pink.css";
import Messanger from "../../Images/messanger.png";
import Logo from "../../Images/logo2.png";

const Pink = () => {
  return (
    <div className="pink">
      <div className="p-wrapper">
        <div className="top">
          <img src={Logo} alt="" />
          <ul>
            <li>Главная</li>
            <li>Продукты</li>
            <li>О нас</li>
          </ul>
          <ul>
            <li>Мы в числах</li>
            <li>Наш миссия</li>
            <li>Связь</li>
          </ul>
          <div>
            <p>Для связяться с нами</p>
            <input type="text" placeholder="email" />
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
          <table>
            <tr>
              <td>Тел.:</td>
              <td>+99890 131 2000</td>
            </tr>
            <tr>
              <td>Е-mail:</td>
              <td>imagetextile@gmail.com</td>
            </tr>
            <tr>
              <td>Адрес: </td>
              <td>
                Республика Узбекистан, г. Ташкент, Проспект Бунёдкор - 29.
              </td>
            </tr>
          </table>
          <img src={Messanger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pink;
