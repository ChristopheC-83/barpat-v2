import React from 'react'
import les2 from "../../images/sport/trailOuVtt.png"

export default function SportSwitch() {


  return (
    
      <div className="sportContent">
        

      <div className="content" style={{flexDirection:"column"}}>
        <img src={les2} alt="saut en vélo" style={{marginBottom:"30px"}}/>
        <div className="sportText" style={{textAlign:"center"}}>
          <p>Dépasser ses limites / juste prendre du plaisir...</p><br />
          <p>Se rentrer dedans à s'en faire mal / regarder le paysage qui s'offre à nous...</p><br />
          <p>Se cloisonner dans sa bulle / partager un moment privilégié avec des gens habillés en moulant, comme nous !</p><br />
          <p>La seule vérité est SA vérité au moment où on se la dicte !</p><br />
          <p>Et en plus, elle peut être variable en fonction de l'humeur, de la météo, de l'envie...</p>
        </div>
      </div>
    </div>
  )
}
