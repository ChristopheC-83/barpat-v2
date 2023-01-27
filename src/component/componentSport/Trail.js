import React from "react";
import sautTrail from "../../images/sport/kiki_saut.png";
import hortus from "../../images/sport/profilHortus.jpg";
import stl from "../../images/sport/3_STL.jpg";

export default function Trail() {
  return (
    <div className="sportContent">
      {/* <div className="titleSport">
        <h2>Le Trail</h2>
        <div className="switch">Le VTT</div>
      </div> */}

      <div className="content">
        <img src={sautTrail} alt="saut en trail" />
        <div className="sportText">
          <p>Bon, là on va entrer dans le dur !</p>
          <br />
          <br />
          <p>Le trail c'est beau !!!</p>
          <br />
          <br />
          <p>
            Tendinites, entorses, courbatures, entrainements acharnés, goût du
            sang dans la bouche... <br />
            <br />
            
          </p>
          <p> c'est beau !</p> <br />
          <p> J'en ai la larme à l'oeil 🥲</p>
        </div>
      </div>
      <div className="content">
        <div className="sportText">
          <p>
            Comme pour le VTT, quitte à souffrir, autant souffrir longtemps !
          </p>
          <br />
          <br />
          <p>
            Admirer des paysages grandioses, des photos souvenirs... tenez, ici
            par exemple, mon plus beau profil !
          </p>
        </div>
        <img src={hortus} alt="profil d'une course" />
      </div>

      <div className="content">
        <img src={stl} alt="départ saintélyon" />
        <div className="sportText">
          <p>
            Et puis bon, comme de jour on ne se pète pas assez les chevilles, on
            peut aussi se faire ça la nuit !
          </p>
          <br />
          <br />
          <p>Ma plus longue distance ! (oui je suis fier ! et alors !?!)</p>
          <br />
          <p>75km et 8h30 de bonheur !!!</p>
          <br />
          <p>(puis un mois de récupération 😂 )</p>
        </div>
      </div>

      <div className="sportConclusion">
        <p>
          Bon, ok... là on est sur un sport individuel ! De l'entrainement à la
          course, on est dans sa bulle, on se pousse à sortir de sa zone de
          confort.
        </p>
        <p>
          Le trail, c'est accepter d'avoir mal pour atteindre ses objectifs.
        </p>
        <p>Plus grande est la douleur, plus grande est la satisfaction !</p>
        <p>Sur un site PEGI18, on aurait appelé ça du sadomasochisme !!! 😄</p>
      </div>
    </div>
  );
}
