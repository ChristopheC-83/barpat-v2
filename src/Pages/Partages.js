import Nav from "../component/Nav";
import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";

export default function Partages(props) {
  const { getColorByName, getGlassMorhBGC } = useContext(dataColorContext);
  let bgc = getGlassMorhBGC("partages");

  let color = getColorByName("partages");
  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <Nav color={color} bgc={bgc} />
      <div className="pageContainer partageContainer"  style={{background:`${bgc}`}}>
        <div className="titlePage">
          <h2>Bon, oui, ce n'est pas pour tout de suite...</h2>
          <h2> Le but est de créer de petits tricks <br /> html/css pour commencer !</h2>
          <h2> Puis de les partager sous forme d'une micro encyclopédie.</h2>
          <h3>( + une notion en 2 minutes par jour pour apprendre comme à un enfant)</h3>
          <br /><br /><br />
          <h2>En attendant, <br /> je vais essayer de nourrir GitHub et CodePen... </h2>
        </div>
      </div>
    </div>
  );
}
