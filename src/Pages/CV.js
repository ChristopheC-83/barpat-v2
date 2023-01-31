import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Nav from "../component/Nav";

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
      {/* <div className="centre"></div> */}
      <Nav color={color} />
      <div className="cvContainer">
        <div className="cvLeft">
          <div className="languages">
            <div className="languagesContent cvContent"></div>
          </div>
          <div className="skills">
            <div className="skillsContent cvContent"></div>
          </div>

          <div className="others">
            <div className="othersContent cvContent"></div>
          </div>
        </div>
        <div className="cvRight">
          <div className="expPro">
            <div className="expProContent cvContent"></div>
          </div>
          <div className="studies">
            <div className="studiesContent cvContent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
