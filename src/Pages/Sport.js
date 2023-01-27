import { useContext, useState } from "react";
import SportSwitch from "../component/componentSport/SportSwitch";
import Trail from "../component/componentSport/Trail";
import Vtt from "../component/componentSport/Vtt";
import { dataColorContext } from "../component/Context/ColorContext";
import Nav from "../component/Nav";

export default function Sport(props) {
  const { getColorByName } = useContext(dataColorContext);

  const [pageSport, setPageSport] = useState("accueil");
  console.log("pageSport : ", pageSport);

  let color = getColorByName("sport");
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
      <div className="pageContainer sportContainer">
        <div className="titlePage">
          <h2>Travailler, Rester assis, Réfléchir... Oui !</h2>
          <h2> Mais s'aérer, se défouler, s'entretenir ? Oui Aussi !</h2>
          <h3>(Et puis... faut bien l'éliminer ce gros burger... 😅)</h3>
        </div>
        <div className="switchSport">
          <p
            onClick={() => {
              setPageSport("trail");
            }}
            className={pageSport === "trail" ? "choiceMade" : ""}
          >
            Le Trail
          </p>
          <p
            onClick={() => {
              setPageSport("accueil");

            }}
            className={pageSport === "accueil" ? "choiceMade" : ""}
          >
            Accueil
          </p>
          <p
            onClick={() => {
              setPageSport("vtt");
            }}
            className={pageSport === "vtt" ? "choiceMade" : ""}
          >
            Le Vtt
          </p>
        </div>
        {pageSport === "accueil" ? (
          <SportSwitch />
        ) : pageSport === "trail" ? (
          <Trail />
        ) : pageSport === "vtt" ? (
          <Vtt />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
