import React, { useContext, useEffect } from "react";
import { MyContext } from "../../Context/Context";
import "./LangBtns.css";
const LangBtns = () => {
  const { lang, setLang } = useContext(MyContext);
  useEffect(() => {
   console.log(lang)
  }, [lang]);
  return (
    <div className="lang-btns">
      <button onClick={(e) => setLang(e.target.textContent)} className="lang">
        UZ
      </button>
      <button onClick={(e) => setLang(e.target.textContent)} className="lang">
        EN
      </button>
      <button onClick={(e) => setLang(e.target.textContent)} className="lang">
        RU
      </button>
    </div>
  );
};

export default LangBtns;
