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

          
        </div>
      </div>
    </div>
  );
}
