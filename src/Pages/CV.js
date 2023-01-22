import React from "react";
import Nav from "../component/Nav";
import "../Style/index.scss";
import { dataColor } from "../data/dataColor";

export default function CV() {
  console.log(dataColor);
  console.log(dataColor[0]);
  console.log(dataColor[0].color);

  let color = dataColor[0].color;

  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <div className="centre"></div>
      <Nav />
      <div className="pageContainer cvContainer">
        CV</div>
    </div>
  );
}
