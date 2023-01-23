import { createContext } from "react";

export const dataColorContext = createContext();

const DataColorContextProvider = (props) => {
  const number = 3.14;
  const dataColor = [
    {
      id: 1,
      name: "cv",
      color: "rgb(16, 0, 160)",
      textCV: "Mon CV, tout ce qu'il y  a de plus classique",
      to:"/",
      nameLink:"Accueil",
      bgc : "#333"
    },
    {
      id: 2,
      name: "informatique",
      color: "rgb(0, 0, 0)",
      text: "formations YT, Udemy et projets",
      to:"/cv",
      nameLink:"Mon CV",
      bgc : "#333"
    },
    {
      id: 3,
      name: "parcours",
      color: "rgb(104, 0, 189)",
      text: "Mes études, exp pro et formations",
      to:"/informatique",
      nameLink:"Le Dev'",
      bgc : "#333"
    },
    {
      id: 4,
      name: "partages",
      color: "rgb(136, 0, 0)",
      text: "à travers github, codepen & bientôt microtuto expliqués à un enfant de 12 ans.",
      to:"/partages",
      nameLink:"Mes partages",
      bgc : "#333"
    },
    {
      id: 5,
      name: "portfolio",
      color: "#fff",
      text: "mes productions principales",
      to:"/portfolio",
      nameLink:"Portfolio",
      bgc : "#333"
    },
    {
      id: 6,
      name: "sport",
      color: "rgb(25, 121, 16)",
      text: "Ce que je fais, pourquoi, pour quoi, mes expériences notables.", to:"/sport",
      nameLink:"Un peu de Sport ?",
      bgc : "#333"
    },
  ];

  function getColorByName(name) {
    const color = dataColor.find(c => c.name === name);
    if(color) return color.color;
    else return null;
  }

  return (
    <dataColorContext.Provider value={{ dataColor, number, getColorByName }}>
      {props.children}
    </dataColorContext.Provider>
  );
};

export default DataColorContextProvider;
