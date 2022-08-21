import React, { useContext } from "react";
import "./About.css";
import Scarf from "../../Images/scarf.png";
import Gilam from "../../Images/gilam.png";
import Shape1 from "../../Images/shape1.png";
import Arrow from "../../Images/arrow.png";
import { MyContext } from "../../Context/Context";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
const About = () => {
  const { lang } = useContext(MyContext);

  return (
    <div className="about">
      <div className="a-wrapper">
        <div className="a-left">
          <img className="shape1" src={Shape1} alt="" />
          <img className="scarf" src={Scarf} alt="" />
        </div>
        <div className="a-right">
          <LightSpeed left>
            <h1>
              {lang === "RU" && "O наши компани"}
              {lang === "EN" && "About our company"}
              {lang === "UZ" && "Kompaniyamiz haqida"}
            </h1>
          </LightSpeed>
          <LightSpeed left>
            <p>
              {lang === "RU" &&
                "World Textile Marketing Agency основан в 2019 году молодыми специалистами в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и полиграфии."}
              {lang === "EN" &&
                "World Textile Marketing Agency was founded in 2019 by young professionals in the field of marketing, textile industry, web programming, event management, fashion design and printing."}
              {lang === "UZ" &&
                "World Textile Marketing Agency 2019 yilda marketing, to`qimachilik sanoati, veb-dasturlash, tadbirlarni boshqarish, moda dizayni va matbaa sohasidagi yosh mutaxassislar tomonidan tashkil etilgan."}
            </p>
          </LightSpeed>
          <LightSpeed left>
            <p>
              {lang === "RU" &&
                "Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки."}
              {lang === "EN" &&
                "Our team specializes in promoting light industry enterprises to foreign markets."}
              {lang === "UZ" &&
                "Jamoamiz yengil sanoat korxonalarini tashqi bozorga chiqarishga ixtisoslashgan."}
            </p>
          </LightSpeed>
          <Link to="/about">
            <button
              className="more"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <div className="arrow">
                <img src={Arrow} alt="" />
              </div>
              Подробнее
            </button>
          </Link>
          <img className="gilam" src={Gilam} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
