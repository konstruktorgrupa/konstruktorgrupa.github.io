import { useState } from "react";

function Kontakt(props) {
  return (
    <div
      id="kontakt"
      style={{
        display: "none",
        position: "absolute",
        top: props.marginTop + 20,
        left: "10px",
      }}
    >
      <div>
        <h1
        // style={{ marginTop: "200px" }}
        >
          <div style={{ display: "flex" }}>Kontakt:</div>
          <br></br>
          <div style={{ display: "flex" }}>
            <img src="./assets/logos/phone.svg" className="plogo" />
            <a href="tel:+385 97 662 0046">+385 97 662 0046</a>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <img src="./assets/logos/mail.svg" className="plogo" />
            <a href="mailto:konstruktorgrupa01@gmail.com">
              konstruktorgrupa01@gmail.com
            </a>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <a
              href="https://www.facebook.com/konstruktorgrupa01/"
              target="_blank"
            >
              <img
                src="./assets/logos/facebook.svg"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </h1>
      </div>
      <div style={{ display: "flex" }}>
        <a
          href="https://www.google.com.tw/maps/place/Zagorska+ul.+71,+48260,+Kri%C5%BEevci,+Croatia/@46.0352146,16.5018742,14z/data=!4m5!3m4!1s0x476616f1ed2d5d67:0x4b9c830fd11f6010!8m2!3d46.0318831!4d16.5331252"
          target="_blank"
        >
          <img
            src="./assets/logos/GMap.PNG"
            style={{ maxHeight: props.screenWidth / 1.3 }}
          />
        </a>
      </div>
    </div>
  );
}

export default Kontakt;
