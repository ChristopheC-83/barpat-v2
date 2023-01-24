import React from "react";
import photoProfil from "../../images/navbar/photoCV.png";

export default function Infos({color}) {

 

  return (
    <div className="infoPerso">
      <img
        src={photoProfil}
        alt="christophe"
        style={{ border: `7px solid ${color}` }}
      />

      <h2 style={{borderBottom:`2px solid ${color}`}}>Christophe</h2>
      <h2 style={{borderBottom:`2px solid ${color}`}}>CHIAPPETTA</h2>
    </div>
  );
}
