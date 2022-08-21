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
                  lang === "RU" &&
                  "ВИДОВ ТКАНИ. BAF ПРЕДЛАГАЕТ СВОИМ КЛИЕНТАМ ТКАНИ РАЗЛИЧНЫХ ДИЗАЙНОВ, ЦВЕТОВ И СТИЛЕЙ. ЕСЛИ ВЫ ИЩЕТЕ ПРОДУКЦИЮ САМОГО ВЫСОКОГО КАЧЕСТВА ДЛЯ ИЗГОТОВЛЕНИЯ ВСЕХ ВИДОВ ПЛАТЬЕВ И ДРУГОЙ ОДЕЖДЫ, ТКАНИ BAF КАК РАЗ ДЛЯ ВАС."}
                {one &&
                  lang === "EN" &&
                  "TYPES OF FABRIC. BAF OFFERS FABRIC IN DIFFERENT DESIGNS, COLORS AND STYLES TO ITS CUSTOMERS. IF YOU ARE LOOKING FOR THE HIGHEST QUALITY PRODUCTS FOR ALL KINDS OF DRESSES AND OTHER CLOTHES, BAF FABRICS IS JUST FOR YOU."}
                {one &&
                  lang === "UZ" &&
                  "MATO TURLARI. BAF MIJOCHLARIGA TURLI DIZAYN, RANG VA USLUMDAGI MATOLARNI TAKLIF QILADI. AGAR SIZ BARCHA TUVDAGI KIYIM VA BOSHQA KIYIMLAR UCHUN ENG SIFATLI MAHSULOTLARNI IZLASANGIZ BAF MATOLARI FAQAT SIZ UCHUN."}
                {two &&
                  lang === "RU" &&
                  "ЛЕТ ОПЫТА ЗА 10 ЛЕТ СУЩЕСТВОВАНИЯ ФАБРИКИ МЫ ВЫРАБОТАЛИ СЛАЖЕННУЮ СИСТЕМУ КАДРОВ И ТЕХНИЧЕСКОГО ОСНАЩЕНИЯ, ПОЗВОЛЯЮЩУЮ ПОЛУЧАТЬ ДЕЙСТВИТЕЛЬНО КАЧЕСТВЕННУЮ ПРОДУКЦИЮ."}
                {two &&
                  lang === "EN" &&
                  "YEARS OF EXPERIENCE OVER 10 YEARS OF THE FACTORY'S EXISTENCE, WE HAVE DEVELOPED A COORDINATE SYSTEM OF STAFF AND TECHNICAL EQUIPMENT, ALLOWING TO RECEIVE REALLY QUALITY PRODUCTS."}
                {two &&
                  lang === "UZ" &&
                  "FABRIK 10 YILDAN ORQAGI TAJRIBASI HAQIQIYATDA SIFATLI MAHSULOT OLISH MUMKIN BO'LGAN KODLAR VA TEXNIK JISHALARNING KOORDINATSIY TIZIMINI ISHLAB CHIQDIK."}
                {three &&
                  lang === "RU" &&
                  "СОТРУДНИКОВ НА НАШЕМ ЗАВОДЕ РАБОТАЕТ БОЛЕЕ 200 РАБОЧИХ. ОНИ РАБОТАЮТ НЕ ПОКЛАДАЯ РУК, ЧТОБЫ ПОСТАВЛЯТЬ СВОИМ КЛИЕНТАМ ПРОДУКЦИЮ ВЫСОЧАЙШЕГО КАЧЕСТВА. ВЫ МОЖЕТЕ НАЙТИ НАДЕЖНЫЙ ПРОДУКТ В BAF. В ТКАЧЕСТВЕ И ОТДЕЛКЕ МЫ ИСПОЛЬЗУЕМ ТОЛЬКО СОВРЕМЕННОЕ ОБОРУДОВАНИЕ И ВСЕГДА СТАРАЕМСЯ СООТВЕТСТВОВАТЬ МИРОВЫМ СТАНДАРТАМ КАЧЕСТВА."}
                {three &&
                  lang === "EN" &&
                  "MORE THAN 200 WORKERS IN OUR PLANT. THEY WORK HARD TO SUPPLY THE TOP QUALITY PRODUCTS TO THEIR CUSTOMERS. YOU CAN FIND A RELIABLE PRODUCT IN BAF. IN WEAVING AND FINISHING WE USE ONLY MODERN EQUIPMENT AND ALWAYS TRY TO MEET THE WORLD QUALITY STANDARDS."}
                {three &&
                  lang === "UZ" &&
                  "ZOBONIMIZDA 200 dan ORQAGI ISHKAR. ULAR MIJOLARGA YUQORI SIFATLI MAHSULOTLARNI TAQDIM QILISh UCHUN QUVVATLI MEHNAT KELADI. ISHONCHLI MAHSULOTNI BAFDAN TOPISHINGIZ MUMKIN. TO'QUVCHI VA PARTILASHDA FAQAT ZAMONAVIY USKUNALARDAN FOYDALANAMIZ VA DOIM DUNYO SIFAT STANDARTLARIGA JAVOB BERISHGA HARAK ETAMIZ."}
                {four &&
                  lang === "RU" &&
                  "ПАРТНЕРОВ ЗА СВОЮ КАРЬЕРУ БАФ ПОДЕЛИЛСЯ СВОИМИ УНИКАЛЬНЫМИ И КРАСИВЫМИ РАБОТАМИ С БОЛЕЕ ЧЕМ 100 КЛИЕНТАМИ. ОСНОВЫВАЯСЬ НА ПРИНЦИПЕ ВЫСОКОГО КАЧЕСТВА, КОМПАНИЯ BAF УДЕЛЯЕТ ОСОБОЕ ВНИМАНИЕ УДОВЛЕТВОРЕНИЮ ПОТРЕБНОСТЕЙ КАЖДОГО КЛИЕНТА."}
                {four &&
                  lang === "UZ" &&
                  "BAF KARYASIDAGI HAMKORLIKLAR 100 dan ortiq MIJOZLAR BILAN O'ZINING BETA VA GO'ZAL ASARLARINI BAGASHDI. YUKORI SIFAT PRINSIBIGA ASOSLANGAN, BAF HAR BIR MUZUCHI QONIQISHIGA Alohida E'tibor beradi."}
                {four &&
                  lang === "EN" &&
                  "PARTNERS FOR ITS CAREER BAF HAS SHARE ITS UNIQUE AND BEAUTIFUL WORKS WITH MORE THAN 100 CLIENTS. BASED ON THE PRINCIPLE OF HIGH QUALITY, BAF PAYS PARTICULAR ATTENTION TO EACH CUSTOMER SATISFACTION."}
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
