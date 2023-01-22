import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      
      <div className="infoPerso">
        <h2>photo</h2>
        <h2>nom</h2>
      </div>

      <div className="navigation">
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

      <div className="socialNetwork">réseaux sociaux</div>
      <div className="signature">moi même</div>
    </div>
  );
}
