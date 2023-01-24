import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataColorContext } from "../Context/ColorContext";

export default function Navigation() {
  const { dataColor } = useContext(dataColorContext);

  return (
    <div className="navigation">
      <ul>
        {dataColor.map((link) => (
          <li key={link.id}>
            {/* <div className="marker"></div> */}
            <NavLink to={link.to}>
              <i className={link.icone} style={{ color: `${link.color}` }}></i>

              <p>{link.nameLink}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
