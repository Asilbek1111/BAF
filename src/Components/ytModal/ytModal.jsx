import React from "react";
import "./ytModal.css";
const YtModal = () => {
  let modal = document.querySelector(".modal");
  function dis() {
    modal.classList.toggle("hide");
    body.style.opacity = "0.5";
  }
  return (
    <>
     <div>
  <button onclick="dis()">video</button>
  <div className="modal hide">
    <iframe width={560} height={315} src="https://www.youtube.com/embed/Vw6utYElVFg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>
</div>

    </>
  );
};

export default YtModal;
