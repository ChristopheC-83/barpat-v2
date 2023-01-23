import {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { dataColorContext } from '../Context/ColorContext';

export default function Navigation() {

  const { dataColor } = useContext(dataColorContext);
  console.log("nav =>", dataColor[0].to)

  return (
    <div className="navigation">
        <ul>
          <li>
            <NavLink to={dataColor[0].to}>
              <p>Accueil</p>
            </NavLink>
            <NavLink to={dataColor[1].to}>
              <p>Mon CV</p>
            </NavLink>
            <NavLink to="/informatique">
              <p>Informatique</p>
            </NavLink>
            <NavLink to="/parcours">
              <p>Parcours</p>
            </NavLink>
            <NavLink to="/partages">
              <p>Partages</p>
            </NavLink>
            <NavLink to="/portfolio">
              <p>Portfolio</p>
            </NavLink>
            <NavLink to="/sport">
              <p>Sport</p>
            </NavLink>
          </li>
        </ul>
      </div>
  )
}
