import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./NavAbout.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import R86 from "../../Images/Rectangle86.png";
import R87 from "../../Images/Rectangle87.png";
import R88 from "../../Images/Rectangle88.png";
import R89 from "../../Images/Rectangle89.png";
import { MyContext } from "../../Context/Context";
import Flip from "react-reveal/Flip";

const NavAbout = () => {
  const { lang, setLang } = useContext(MyContext);
  console.log(lang);
  return (
    <div className="navAbout">
      <Navbar />
      <div className="about-wrap">
        <div className="l-side">
          <Flip left>
            <h1>
              {lang === "RU" && "O наши компани"}
              {lang === "UZ" && "Kompaniyamiz haqida"}
              {lang === "EN" && "About our company"}
            </h1>
          </Flip>
          <Flip left>
            <p>
              {lang === "RU" &&
                "World Textile Marketing Agency основан в 2019 году молодыми специалистами в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна одежды и полиграфии."}
              {lang === "EN" &&
                "World Textile Marketing Agency was founded in 2019 by young professionals in the field of marketing, textile industry, web programming, event management, fashion design and printing."}
              {lang === "UZ" &&
                'World Textile Marketing Agency 2019 yilda marketing, to"qimachilik sanoati, veb-dasturlash, tadbirlarni boshqarish, moda dizayni va poligrafiya sohasidagi yosh mutaxassislar tomonidan tashkil etilgan.'}
            </p>
          </Flip>
          <Flip left>
            <p>
              {lang === "RU" &&
                "Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки. Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки.Наша команда специализируется в продвижении предприятий легкой промышленности на зарубежные рынки."}
              {lang === "EN" &&
                "Our team specializes in promoting light industry enterprises to foreign markets. Our team specializes in the promotion of light industry enterprises to foreign markets. Our team specializes in the promotion of light industry enterprises to foreign markets."}
              {lang === "UZ" &&
                "Jamoamiz yengil sanoat korxonalarini tashqi bozorga chiqarishga ixtisoslashgan. Bizning jamoamiz yengil sanoat korxonalarini tashqi bozorga chiqarishga ixtisoslashgan."}
            </p>
          </Flip>
        </div>
        <Flip left cascade>
          <div className="r-side">
            <img src={R87} alt="" />
            <img src={R86} alt="" />
            <img src={R88} alt="" />
            <img src={R89} alt="" />
          </div>
        </Flip>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default NavAbout;
