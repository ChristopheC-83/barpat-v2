import { useContext, useState } from "react";
import Trail from "../component/componentSport/Trail";
import Vtt from "../component/componentSport/Vtt";
import { dataColorContext } from "../component/Context/ColorContext";
import Nav from "../component/Nav";
export default function Sport(props) {
  const { getColorByName } = useContext(dataColorContext);

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
        <Vtt/>
        <Trail/>
      </div>
    </div>
  );
}
