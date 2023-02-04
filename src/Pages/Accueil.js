import { useContext, useEffect } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Drops from "../component/Drops";
import Nav from "../component/Nav";
import evo1 from "../images/evolution/evo1.png"
import evo2 from "../images/evolution/evo2.png"
import evo3 from "../images/evolution/evo3.png"
import evo4 from "../images/evolution/evo4.png"
import evo5 from "../images/evolution/evo5.png"
import evo6 from "../images/evolution/evo6.png"
import { gsap } from "gsap";

export default function Accueil() {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("accueil");




  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <Nav color={color} />
      <div className="pageContainer 
      accueilContainer
      ">
        <div className="dropsContainer">
          <Drops />
        </div>
        <div className="accueilContent">
          <div className="accueilTitlePage">
            <h2>
              Nous n'aurons jamais d'une seule vie <br /> pour apprendre et voir
              tout ce qui s'offre à nous...
            </h2>
            <h2>
              N'étant pas certain d'en avoir une autre, <br /> enrichissons nous
              et partageons autant que faire se peut !
            </h2>
            <h2>
              Testons, creusons, fouillons ...
              <br />
              et passons à l'action !
            </h2>

            <h2>
              Nous pouvons être bons à rien....
              <br /> Mais soyons prêts à tout !
            </h2>
            <h2>Alors bons, nous deviendrons !!!</h2>
          </div>
        </div>

        <div className="accueilContent2">
          <img src={evo1} alt="" className="img1" />
          <img src={evo2} alt="" className="img2" />
          <img src={evo3} alt="" className="img3" />
          <img src={evo4} alt="" className="img4" />
          <img src={evo5} alt="" className="img5" />
          <img src={evo6} alt="" className="img6" />
        </div>
      </div>
    </div>
  );
}
