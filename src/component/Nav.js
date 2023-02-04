import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarMini from "./NavbarMini";

export default function Nav({ color , bgc}) {
  

  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    function changeWidth() {
      setLargeur(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      {largeur > 1023 ? <Navbar color={color} bgc={bgc}/> : <NavbarMini color={color}bgc={bgc} />}
    </div>
  );
}
