import Nav from "../component/Nav";
import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";

export default function Informatique() {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("parcours");
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
      <div className="pageContainer informatiqueContainer">Informatique</div>
    </div>
  );
}
