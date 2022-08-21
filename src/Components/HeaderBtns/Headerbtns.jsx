import React, { useContext, useRef, useState } from "react";
import "./Style.css";
import Download from "../../Images/download.png";
import Video from "../../Images/video.png";
import { MyContext } from "../../Context/Context";
import Resume from "../../Images/resume.pdf";
const Headerbtns = () => {
  const { lang, setOpen } = useContext(MyContext);
  let modal = useRef();
  function dis() {
    setOpen((prev) => !prev);
    modal.classList.toggle("hide");
  }
  return (
    <div className="btns">
      <a href={Resume} download>
        <button className="b1">
          <div className="bd">
            <img src={Download} alt />
          </div>
          {lang === "RU" && "Скачать каталог"}
          {lang === "EN" && "Download catalog"}
          {lang === "UZ" && "Katalogni yuklash"}
        </button>
      </a>
      <button className="b2" onClick={dis}>
        <img className="video" src={Video} alt />
        {lang === "RU" && "Смотреть видео"}
        {lang === "EN" && "Watch video"}
        {lang === "UZ" && "Videoni ko'rish"}
      </button>
    </div>
  );
};

export default Headerbtns;
