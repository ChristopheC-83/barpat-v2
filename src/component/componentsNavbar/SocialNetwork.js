import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SocialNetwork({ color }) {
  const iconListe = [
    {
      id: 1,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/christophe-chiappetta-b3623b262/",
      icone: "fab fa-linkedin",
    },
    {
      id: 2,
      name: "Instagram",
      href: "https://www.instagram.com/christophe_poseur_cuisines/",
      icone: "fa-brands fa-square-instagram",
    },
    {
      id: 3,
      name: "Github",
      href: "https://github.com/ChristopheC-83",
      icone: "fa-brands fa-square-github",
    },
    {
      id: 4,
      name: "CodePen",
      href: "https://codepen.io/collection/QWQZQe",
      icone: "fa-brands fa-codepen",
    },
  ];

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
