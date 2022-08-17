import React from 'react';
import './Footer.css';
import Acoding from '../../Images/acoding.png';
import Amedia from "../../Images/amedia.png";


const Footer = () => {
    return (
      <div className="footer">
        <h3>IMAGE TEX 2018. Все права защищены.</h3>
        <div className='f-second'>
          <p>Разработано в</p>
          <img src={Acoding} alt="" />
          <img src={Amedia} alt="" />
        </div>
      </div>
    );
}

export default Footer;
