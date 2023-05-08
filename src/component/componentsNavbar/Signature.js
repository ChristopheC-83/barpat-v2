import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Signature({ color, bgc }) {
  return (
    <div className="signature" style={{ background: `${bgc}` }}>
      {/* <h2 style={{color:`${color}`}}>christophe@barpat.fun</h2> */}

      <CopyToClipboard text="christophe@barpat.fun">
        <h2
          className="clickInput mail"
          onClick={() => {
            alert("Adresse mail copiée.");
          }}
          style={{ color: `${color}`, cursor: "pointer" }}
        >
          christophe@barpat.fun
        </h2>
      </CopyToClipboard>
    </div>
  );
}
