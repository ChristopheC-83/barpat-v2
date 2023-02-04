import React from "react";

import SautVtt from "../../images/sport/6_kiki_cover.jpg";
import vtt24h from "../../images/sport/1_24hvtt.jpg";
import rocVtt from "../../images/sport/4_roc.jpg";
import stlVtt from "../../images/sport/5_stl_vtt.jpg";

export default function Vtt() {
  return (
    <div className="sportContent">
        {/* <div className="titleSport">
                  <h2>Le VTT</h2>
            <div className="switch">Le Trail</div>
        </div> */}

      <div className="content">
        <img src={SautVtt} alt="saut en vélo" />
        <div className="sportText">
          <p>Oui, oui ! C'est bien moi sur le vélo ! 😎</p>
          <br />
          <br />
          <p>Le vélo, un sport solitaire qui est on ne peut plus solidaire !</p>
          <br />
          <br />
          <p>Tu crois que c'est moi qui ai pris la photo ??? 😄</p>
        </div>
      </div>
      <div className="content">
        <div className="sportText">
          <p>On se lance des challenges en équipe,</p>
          <br />
          <br />
          <p>et on se fait même un petit podium au passage !!!</p>
          <br />
          <br />
          <p>Parce que entrainé et épaulé par de vrais fous de la pédale !</p>
        </div>
        <img src={vtt24h} alt="24h vtt luberon" />
      </div>

      <div className="content">
        <img src={rocVtt} alt="départ roc marathon" />
        <div className="sportText">
          <p>Alors je fais des folies !</p>
          <br />
          <br />
          <p>Je me lance sur des épreuves dites "marathon".</p>
          <br />
          <p>
            Ici le départ du Roc Marathon... Pour ma première participation,
            j'entends 2 gars discutés : <br /> "après le 76eme, ça roule tout
            seul !"
          </p>
        </div>
      </div>

      <div className="content">
        <div className="sportText">
          <p>Au point où on en est...</p>
          <br />
          <br />
          <p>Pourquoi faire ces épreuves longues de jour ?</p>
          <br />
          <p>Merci qui ? Merci la SaintéLyon VTT !</p>
          <p>
            Sors ta frontale, une loupiotte de 1000 lumens au guidon et c'est
            parti de Saint-Etienne pour rallier Lyon.
          </p>
        </div>
        <img src={stlVtt} alt="saintélyon vtt" />
      </div>

      <div className="sportConclusion">

        <p>Oui, le vélo est considéré comme un sport individuel. Mais que ce soit en épreuve et encore plus lors des entrainements et diverses sorties, l'émulation saine et joviale, la motivation et l'enthousiasme qui en ressort en font le sport avec le plus bel esprit d'équipe que j'ai pu pratiquer.</p>
      </div>
    </div>
  );
}
