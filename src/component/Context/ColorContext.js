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
    },
    {
      id: 2,
      name: "informatique",
      color: "rgb(0, 0, 0)",
      text: "formations YT, Udemy et projets",
    },
    {
      id: 3,
      name: "parcours",
      color: "rgb(104, 0, 189)",
      text: "Mes études, exp pro et formations",
    },
    {
      id: 4,
      name: "partages",
      color: "rgb(136, 0, 0)",
      text: "à travers github, codepen & bientôt microtuto expliqués à un enfant de 12 ans.",
    },
    {
      id: 5,
      name: "portfolio",
      color: "rgb(255, 255,255)",
      text: "mes productions principales",
    },
    {
      id: 6,
      name: "sport",
      color: "rgb(25, 121, 16)",
      text: "Ce que je fais, pourquoi, pour quoi, mes expériences notables.",
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
