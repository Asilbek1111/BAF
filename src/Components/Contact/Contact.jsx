import React, { useContext } from "react";
import "./Contact.css";
import Carpet from "../../Images/carpet.png";
import { MyContext } from "../../Context/Context";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

const Contact = () => {
  const { lang } = useContext(MyContext);
  const formBtn = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
Salom Asilbek, Yangi Xabar!😊%0A
Ismi 👤: ${e.target[0].value}%0A
Raqam ☎: ${e.target[1].value}%0A 
Xabar ☎: ${e.target[2].value}%0A              
                `;

      let url = `https://api.telegram.org/bot5518425724:AAFFZPdLpCrlYnwfDDxaQSQ6qoBtEfOXM24/sendMessage?chat_id=1328407566&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);
      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";
    } else {
      return -1;
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="c-left">
        <h1>
          {lang === "RU" && "Eсть какой нибудь вопросы?"}
          {lang === "EN" && "Do you have any question?"}
          {lang === "UZ" && "Savolingiz bormi?"}
        </h1>
        <Roll left cascade>
          <form onSubmit={formBtn}>
            <input type="text" className="inp" placeholder="Имя" />
            <input type="number" className="inp" placeholder="ТЕЛЕФОН НОМЕР" />
            <button type="submit" className="inp">
              {lang === "RU" && "ОТПРАВИТЬ"}
              {lang === "EN" && "SEND"}
              {lang === "UZ" && "JO`NATISH"}
            </button>
          </form>
        </Roll>
      </div>
      <div className="c-right">
        <Rotate>
          <img src={Carpet} alt="" />
        </Rotate>
      </div>
    </div>
  );
};

export default Contact;
