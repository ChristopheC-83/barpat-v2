import React from "react";
import sautTrail from "../../images/sport/kiki_saut.png"

export default function Trail() {
  return (<div className="sportContent">
  <div className="titleSport">
            <h2>Le Trail</h2>
      <div className="switch">Le VTT</div>
  </div>

<div className="content">
  <img src={sautTrail} alt="saut en vélo" />
  <div className="sportText">
    <p>Bon, là on peut entrer dans le dur !</p>
    <br />
    <br />
    <p>Le trail c'est beau !!!</p>
    <br />
    <br />
    <p>Tendinites, entorses, courbatures, entrainements acharnés, gout du sang dans la bouche... c'est beau ! J'en ai la larme à l'oeil 🥲</p>
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
  <img src="" alt="24h vtt luberon" />
</div>

<div className="content">
  <img src="" alt="départ roc marathon" />
  <div className="sportText">
    <p>Alors je fais des folies !</p>
    <br />
    <br />
    <p>Je me lance sur des épeuves dites "marathon".</p>
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
      parti de Saint-Etienne pour ralier Lyon.
    </p>
  </div>
  <img src="" alt="saintélyon vtt" />
</div>

<div className="sportConclusion">

  <p>Oui, le vélo est considéré comme un sport individuel. Mais que ce soit en épreuve et encore plus lors des entrainements et diverses sorties, l'émulation saine et joviale, la motivation et l'enthousiasme qui en ressort en font le sport avec le plus bel esprit d'équipe que j'ai pu pratiquer.</p>
</div>
</div>
);
}
