import { useContext, useState } from "react";
import { dataColorContext } from "./Context/ColorContext";
import { NavLink } from "react-router-dom";

export default function NavbarMini({ color }) {
  const { dataColor, iconListe } = useContext(dataColorContext);

  const [toggle, setToggle] = useState(false);
  const [toggleSNB, setToggleSNB] = useState(false);

  function Toggle() {
    setToggle(!toggle);
    if (toggle === true) {
      setToggleSNB(false);
    }
  }

  function SNBChange() {
    setToggleSNB(!toggleSNB);
  }

  function CloseAll() {
    setToggle(false);
    setToggleSNB(false);
  }

  return (
    <div className="navbarMiniContainer">
      <div className={toggle ? "overlay" : ""} onClick={CloseAll}>
        
      </div>
      <div
        className="toggle"
        onClick={Toggle}
        style={{
          color: `${color}` === "#fff" ? "#222" : `${color}`,
          borderColor: `${color}` === "#fff" ? "#222" : `${color}`,
        }}
      >
        {!toggle ? <p>Menu</p> : <i className="fa-solid fa-xmark"></i>}
      </div>

      <div className={!toggle ? "menuBarre" : "menuBarre MBActive"}>
        {dataColor.map((link) => (
          <li key={link.id}>
            <NavLink to={link.to} style={{ borderColor: `${link.color}` }}>
              <i className={link.icone} style={{ color: `${link.color}` }}></i>
              <p>{link.nameLink}</p>
            </NavLink>
          </li>
        ))}
        <li key="11">
          <NavLink onClick={SNBChange} style={{ borderColor: "#146ebe" }}>
            <i
              className="fa-solid fa-share-nodes"
              style={{ color: "#146ebe" }}
            ></i>
            <p>Réseaux Sociaux</p>
          </NavLink>
        </li>
      </div>
      <div
        className={
          !toggleSNB ? "socialNetworkBarre" : "socialNetworkBarre SNBActive"
        }
      >
        <ul>
          {iconListe.map((ico) => (
            <li key={ico.id}>
              <a
                href={ico.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `${color}` === "#fff" ? "#222" : `${color}` }}
              >
                <i className={ico.icone}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
<i class="fa-solid fa-share-nodes"></i>;
