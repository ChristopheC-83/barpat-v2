import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Drops from "../component/Drops";
import Nav from "../component/Nav";

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
      <div className="pageContainer accueilContainer">
        <div className="dropsContainer">
          <Drops />
        </div>
        <div className="accueilContent">
<h2>Je n'aurai jamais d'une seule vie <br /> pour apprendre et voir tout ce qui s'offre à moi...</h2>
<h2>N'étant pas certain d'en avoir une autre, <br /> je m'enrichis autant que faire se peut !</h2>
<h2>Bon A Rien, Prêt A Tout !</h2>
<h2>Je teste, creuse fouille m'interroge et passe à l'action</h2>
          
        </div>
      </div>
    </div>
  );
}
