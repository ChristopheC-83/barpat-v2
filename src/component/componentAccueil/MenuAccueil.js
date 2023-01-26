import { useContext, useState } from "react";
import { dataColorContext } from "../Context/ColorContext";
import { NavLink } from "react-router-dom";

export default function MenuAccueil() {
  const { blobbyList } = useContext(dataColorContext);

  const [hovering, setHovering] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseOver = () => {
    if (!menuOpen) {
      setHovering(true);
    }
  };

  const handleMouseOut = () => {
    if (!menuOpen) {
      setHovering(false);
    }
  };

  const menuMouseOver = () => {
    setMenuHover(true);
  };
  const menuMouseOut = () => {
    setMenuHover(false);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menuAccueilContainer">
      <div
        className="origin"
        style={{
          width: menuOpen ? "0" : "20vh",
          height: menuOpen ? "0" : "20vh",
          borderRadius: hovering ? "50%" : "",
          transform: hovering ? "scale(1.05)" : "scale(1)",
          animation: hovering && "none",
          transition: "all 1.25s ease-in-out",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="menuText"
          style={{
            animation: menuOpen ? "none" : hovering && "none",
            transform: menuOpen && "translate(-50%, -20vh)",
            transition: "all 1.25s ease-in-out",
          }}
          onMouseOver={menuMouseOver}
          onMouseOut={menuMouseOut}
          onClick={openMenu}
        >
          MENU
        </div>
      </div>
      <ul
        className={menuOpen ? "ulActive" : "ulBlobby"}
        style={{
          transition: "all 1.25s ease-in-out",
        }}
      >
        {blobbyList.map((blobby) => (
          <li
            key={blobby.id}
            className="itemLi"
            style={{
                border : `3px solid ${blobby.color}` ,
                
                background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, ${blobby.color} 50%, rgba(0,0,0,1) 100%)`,
            }}
          >
            <NavLink 
            to={blobby.to}
            >

            <div className="content">
              <h3
                style={{color: `${blobby.color}` === "#fff" ? "#222" : "#fff"}}
              > {blobby.name}</h3>
              <i 
              className={blobby.icone} 
              style={{ 
              color: `${blobby.color}` === "#fff" ? "#222" : `${blobby.color}`,
              
              borderColor: `${blobby.color}` === "#fff" ? "#222" : `${blobby.color}`,

              }}></i>

            </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
