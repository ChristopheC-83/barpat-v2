import { createContext } from "react";

export const dataColorContext = createContext();

const DataColorContextProvider = (props) => {
  const number = 3.14;
  const dataColor = [
    {
      id: 1,
      name: "accueil",
      color: "rgb(16, 0, 160)",
      textCV: "Mon CV, tout ce qu'il y  a de plus classique",
      to: "/",
      nameLink: "Accueil",
      bgc: "#333",
      icone: "fa-solid fa-house",
    },
    {
      id: 2,
      name: "cv",
      color: "rgb(0, 0, 0)",
      text: "Mes études, exp pro et formations",
      to: "/cv",
      nameLink: "Mon CV",
      bgc: "#333",
      icone: "fa-solid fa-file-lines",
    },
    {
      id: 3,
      name: "parcours",
      color: "rgb(104, 0, 189)",
      text: "formations YT, Udemy et projets",
      to: "/informatique",
      nameLink: "Le Dev'",
      bgc: "#333",
      icone: "fa-solid fa-laptop-code",
    },

    {
      id: 4,
      name: "portfolio",
      color: "#fff",
      text: "mes productions principales",
      to: "/portfolio",
      nameLink: "Portfolio",
      bgc: "#333",
      icone: "fa-solid fa-book-open-reader",
    },
    {
      id: 5,
      name: "partages",
      color: "rgb(136, 0, 0)",
      text: "à travers github, codepen & bientôt microtuto expliqués à un enfant de 12 ans.",
      to: "/partages",
      nameLink: "Mes partages",
      bgc: "#333",
      icone: "fa-solid fa-hands-holding-circle",
    },
    {
      id: 6,
      name: "sport",
      color: "rgb(25, 121, 16)",
      text: "Ce que je fais, pourquoi, pour quoi, mes expériences notables.",
      to: "/sport",
      nameLink: "Du Sport ?",
      bgc: "#333",
      icone: "fa-solid fa-person-biking",
    },
  ];

  const iconListe = [
    {
      id: 7,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/christophe-chiappetta-b3623b262/",
      icone: "fab fa-linkedin",
    },
    {
      id: 8,
      name: "Instagram",
      href: "https://www.instagram.com/christophe_poseur_cuisines/",
      icone: "fa-brands fa-square-instagram",
    },
    {
      id: 9,
      name: "Github",
      href: "https://github.com/ChristopheC-83",
      icone: "fa-brands fa-square-github",
    },
    {
      id: 10,
      name: "CodePen",
      href: "https://codepen.io/collection/QWQZQe",
      icone: "fa-brands fa-codepen",
    },
  ];

  function getColorByName(name) {
    const color = dataColor.find((c) => c.name === name);
    if (color) return color.color;
    else return null;
  }

  return (
    <dataColorContext.Provider
      value={{ dataColor, number, getColorByName, iconListe }}
    >
      {props.children}
    </dataColorContext.Provider>
  );
};

export default DataColorContextProvider;
