import React from "react";
import Download from "../../Images/download.png";
import Video from "../../Images/video.png";
import Group1 from "../../Images/group1.png";
import Group2 from "../../Images/group2.png";


import './Button.css'

const Buttons = () => {
  return (
    <div className="btns">
      <img src={Group1} alt="" />
      <img src={Group2} alt="" />
    </div>
  );
};

export default Buttons;
