import React from "react";
import Nav from "../component/Nav";
import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Card from "../component/componentPortFolio/Card";
import { dataPortfolio } from "../data/dataPorfolio";

export default function Portfolio(props) {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("portfolio");
  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <Nav color={color} />
      <div className="pageContainer portfolioContainer">
      <div className="titlePage">
          <h2>Voici mes modestes et premières productions !</h2>
          <h2> Elles sont des créations originiales</h2>
          <h3>(Je ne vais pas mettre des pages produites lors de tuto là-dedans quand même ! 😅)</h3>
        </div>
        <div className="listeSites">
          

        {dataPortfolio.map((card) => (
          <div className="cardContainer" key={card.id}>
            <Card
              title={card.title}
              img={card.img}
              content={card.content}
              benefices={card.benefices}
              technoUtilisees={card.technoUtilisees}
              techno={card.techno}
              link={card.link}
            />
          </div>
        ))}
        </div>

      </div>
    </div>
  );
}
