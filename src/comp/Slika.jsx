import { useState } from "react";
import SlikaFocus from "./SlikaFocus";

function Slika(props) {
  function ImageBig() {
    document.getElementById("slikaFocus").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("imgSrc").src = props.img;
  }

  return (
    <div>
      <SlikaFocus />
      {/* <viev
        style={{
          width: 150,
          height: 150,
          overflow: "hidden",
          position: "absolute",
          // left: OFFSET_LEFT,
          // top: OFFSET_TOP,
        }}
      > */}
      <img
        style={{
          width: props.screenWidth / 4,
          height: props.screenWidth / 4,
          overflow: "hidden",
        }}
        src={props.img}
        onClick={ImageBig}
      />
      {/* </viev> */}
    </div>
  );
}

export default Slika;
