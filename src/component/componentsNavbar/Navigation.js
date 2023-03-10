import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataColorContext } from "../Context/ColorContext";

export default function Navigation({ active, children, onClick, bgc }) {
  const { dataColor } = useContext(dataColorContext);

  return (
    <div className="navigation" style={{background:`${bgc}`}}>
      <ul>
        {dataColor.map((link) => (
          <li key={link.id} style={{background:`${bgc}`}}>
            <NavLink 
            to={link.to}  
            className={active ? "active liActive" : ""}
            >
              <i className={link.icone} style={{ color: `${link.color}` }}></i>

              <p>{link.nameLink}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
