import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useContext } from "react";
import { dataColorContext } from "../Context/ColorContext";

export default function SocialNetwork({ color }) {

  const { iconListe } = useContext(dataColorContext);
  console.log()
  

  const icones = useRef();

  const animated = sessionStorage.getItem("animated");

  useEffect(() => {
    if (!animated) {
      gsap.from(icones.current, {
        opacity: 0,
        x: -250,
        duration: 1.5,
        delay: 0.5,
        scale:0.2
      });
      sessionStorage.setItem("animated", true);
    }
  }, [animated]);

  return (
    <div className="socialNetwork">
      <ul ref={icones}>
        {iconListe.map((ico) => (
          <li
            key={ico.id}
            style={{
              border: `5px solid ${color}`,
              background: `${color}` === "#fff" ? "#222" : "#f1f1f1",
            }}
          >
            <a
              href={ico.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `${color}` }}
            >
              <i className={ico.icone}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
