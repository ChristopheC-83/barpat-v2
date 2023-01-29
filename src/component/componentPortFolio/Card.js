import React from "react";

export default function Card(props) {
  return (
    <div className="cardPortfolio">
      <div className="cadreImgCard">

      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="imgCard">
          <img src={props.img} alt="" />
        </div></a>
      </div>
      <div className="textCard">
        <h3>{props.title}</h3>
        <p className="content">
          <span>Description : </span> <br />
          <br />
          {props.content}
        </p>
        <p className="benef">
          <span>Bénéfices :</span> <br />
          <br /> {props.benefices}
        </p>
        <h4>{props.techno}</h4>
        <div className="technos">
          {props.technoUtilisees}
          {/* <a href={props.link} target="_blank" rel="noreferrer">
            <div className="neon">
              <div className="lien">Visiter</div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}
