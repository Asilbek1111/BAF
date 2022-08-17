import React, { useContext } from "react";
import "./Number.css";
import Kiyim from "../../Images/kiyim.png";
import Little from "../../Images/little.png";
import { MyContext } from "../../Context/Context";
import Roll from "react-reveal/Roll";

const Number = () => {
  const { lang, setLang } = useContext(MyContext);

  return (
    <>
      <div className="number">
        <h1 className="n-heading">
          {lang === "RU" && "Мы в числа"}
          {lang === "EN" && "We are in numbers"}
          {lang === "UZ" && "Biz raqamlarda"}
        </h1>
        <div className="n-wrapper">
          <div className="n-left">
            <Roll top>
              <img src={Kiyim} alt="" />
            </Roll>
            <Roll top>
              <img src={Little} className="little" alt="" />
            </Roll>
          </div>
          <div className="n-right">
            <Roll top>
              <h1>2560</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing penatibus ornare Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Adipiscing penatibus ornare Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. penatibus
                ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Roll>
          </div>
        </div>
      </div>
      <div className="trust">
        <h1>Нам доверяют</h1>
      </div>
    </>
  );
};

export default Number;
