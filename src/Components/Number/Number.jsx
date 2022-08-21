import React, { useContext, useState } from "react";
import "./Number.css";
import Kiyim from "../../Images/kiyim.png";
import Little from "../../Images/little.png";
import { MyContext } from "../../Context/Context";
import Roll from "react-reveal/Roll";

const Number = () => {
  const { lang } = useContext(MyContext);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  function hone() {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
  }
  function htwo() {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
  }
  function hthree() {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
  }
  function hfour() {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
  }

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
              <span className="num1000" onClick={hone}>
                1000
              </span>
              <h1 onClick={htwo}>10</h1>
              <span className="num200" onClick={hthree}>
                200
              </span>
              <span className="num100" onClick={hfour}>
                100
              </span>

              <p>
                {one &&
                  "ВИДОВ ТКАНИ. BAF ПРЕДЛАГАЕТ СВОИМ КЛИЕНТАМ ТКАНИ РАЗЛИЧНЫХ ДИЗАЙНОВ, ЦВЕТОВ И СТИЛЕЙ. ЕСЛИ ВЫ ИЩЕТЕ ПРОДУКЦИЮ САМОГО ВЫСОКОГО КАЧЕСТВА ДЛЯ ИЗГОТОВЛЕНИЯ ВСЕХ ВИДОВ ПЛАТЬЕВ И ДРУГОЙ ОДЕЖДЫ, ТКАНИ BAF КАК РАЗ ДЛЯ ВАС."}
                {two &&
                  "ЛЕТ ОПЫТА ЗА 10 ЛЕТ СУЩЕСТВОВАНИЯ ФАБРИКИ МЫ ВЫРАБОТАЛИ СЛАЖЕННУЮ СИСТЕМУ КАДРОВ И ТЕХНИЧЕСКОГО ОСНАЩЕНИЯ, ПОЗВОЛЯЮЩУЮ ПОЛУЧАТЬ ДЕЙСТВИТЕЛЬНО КАЧЕСТВЕННУЮ ПРОДУКЦИЮ."}
                {three &&
                  "СОТРУДНИКОВ НА НАШЕМ ЗАВОДЕ РАБОТАЕТ БОЛЕЕ 200 РАБОЧИХ. ОНИ РАБОТАЮТ НЕ ПОКЛАДАЯ РУК, ЧТОБЫ ПОСТАВЛЯТЬ СВОИМ КЛИЕНТАМ ПРОДУКЦИЮ ВЫСОЧАЙШЕГО КАЧЕСТВА. ВЫ МОЖЕТЕ НАЙТИ НАДЕЖНЫЙ ПРОДУКТ В BAF. В ТКАЧЕСТВЕ И ОТДЕЛКЕ МЫ ИСПОЛЬЗУЕМ ТОЛЬКО СОВРЕМЕННОЕ ОБОРУДОВАНИЕ И ВСЕГДА СТАРАЕМСЯ СООТВЕТСТВОВАТЬ МИРОВЫМ СТАНДАРТАМ КАЧЕСТВА."}
                {four &&
                  "ПАРТНЕРОВ ЗА СВОЮ КАРЬЕРУ БАФ ПОДЕЛИЛСЯ СВОИМИ УНИКАЛЬНЫМИ И КРАСИВЫМИ РАБОТАМИ С БОЛЕЕ ЧЕМ 100 КЛИЕНТАМИ. ОСНОВЫВАЯСЬ НА ПРИНЦИПЕ ВЫСОКОГО КАЧЕСТВА, КОМПАНИЯ BAF УДЕЛЯЕТ ОСОБОЕ ВНИМАНИЕ УДОВЛЕТВОРЕНИЮ ПОТРЕБНОСТЕЙ КАЖДОГО КЛИЕНТА."}
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
