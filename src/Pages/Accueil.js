import React from 'react'
import Drops from "../component/Drops";
import { NavLink } from "react-router-dom";

export default function Accueil() {
  return (
    <div className='accueilContainer'>
      <Drops/>
      <ul>
          <li>
            <NavLink to="/">
              <p>Accueil</p>
            </NavLink>
            <NavLink to="/cv">
              <p>Mon CV</p>
            </NavLink>
            <NavLink to="/informatique">
              <p>Informatique</p>
            </NavLink>
            <NavLink to="/partages">
              <p>Partages</p>
            </NavLink>
            <NavLink to="/parcours">
              <p>Parcours</p>
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
