import React, { useContext, useRef } from "react";
import "./Style.css";
import Download from "../../Images/download.png";
import Video from "../../Images/video.png";
import { MyContext } from "../../Context/Context";
const Headerbtns = () => {
  const { lang } = useContext(MyContext);
  let modal = useRef();
  function dis() {
    modal.classList.toggle("hide");
  }
  return (
    <div className="btns">
      <button className="b1">
        <div className="bd">
          <img src={Download} alt />
        </div>
        {lang === "RU" && "Скачать каталог"}
        {lang === "EN" && "Download catalog"}
        {lang === "UZ" && "Katalogni yuklash"}
      </button>
      <button className="b2" onClick={dis}>
        <img className="video" src={Video} alt />
        {lang === "RU" && "Смотреть видео"}
        {lang === "EN" && "Watch video"}
        {lang === "UZ" && "Videoni ko'rish"}
      </button>
      <div ref={modal} className="modal hide">
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
    </div>
  );
};

export default Headerbtns;
