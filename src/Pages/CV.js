import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Nav from "../component/Nav";
import "../Style/index.scss";

export default function CV(props) {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("cv");

  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <div className="centre"></div>
      <Nav color={color} />
      <div className="pageContainer cvContainer">CV</div>
    </div>
  );
}
