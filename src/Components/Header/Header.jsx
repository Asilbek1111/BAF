import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Heading from "../../Images/heading.png";
import Rasm from "../../Images/rasm.png";
import LangBtns from "../LangBtns/LangBtns";
import { MyContext } from "../../Context/Context";
import Service from "../Service/Service";
import About from "../About/About";
import Number from "../Number/Number";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Pink from "../Pink/Pink";
import Footer from "../Footer/Footer";
// import Back from "../../Images/back.png";
import Bounce from "react-reveal/Bounce";
import Headerbtns from "../HeaderBtns/Headerbtns";

const Header = () => {
  const { lang, open, setOpen } = useContext(MyContext);
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="h-wrapper">
          <div className="h-left">
            {open && (
              <div className="modal">
                <button onClick={() => setOpen(false)} className="close">X</button>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/Vw6utYElVFg"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <img className="headding" src={Heading} alt="" />
            <h2>
              {lang === "RU" && "Востребованное направление бизнеса"}
              {lang === "EN" && "Demanded line of business"}
              {lang === "UZ" && "Talab qilingan biznes yo'nalishi"}
            </h2>
            <Bounce left>
              <Headerbtns />
            </Bounce>
          </div>
          <div className="h-right">
            <Bounce top>
              <img className="rasm" src={Rasm} alt="" />
            </Bounce>
            <Bounce right>
              <LangBtns />
            </Bounce>
          </div>
        </div>
      </div>
      <Service />
      <About />
      <Number />
      <Brands />
      <Contact />
      <Pink />
      <Footer />
    </>
  );
};

export default Header;
