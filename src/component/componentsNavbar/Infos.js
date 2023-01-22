import React from "react";
import photoProfil from "../../images/navbar/photoCV.png";
import { dataColor } from "../../data/dataColor";

export default function Infos() {

  //  on gere les couleur par un context ! pas propsDrilling !
  let color = dataColor[2].color;
  // console.log(color);

  return (
    <div className="infoPerso">
      <img
        src={photoProfil}
        alt="christophe"
        style={{ border: `10px solid ${color}` }}
      />

      <h2 >Christophe</h2>
      <h2>CHIAPPETTA</h2>
    </div>
  );
}
