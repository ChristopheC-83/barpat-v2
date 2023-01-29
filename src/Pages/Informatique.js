import Nav from "../component/Nav";
import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";

export default function Informatique() {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("parcours");
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
      <div className="pageContainer informatiqueContainer">
        <div className="titlePage">
          <h2>Parce qu'il faut bien commencer quelque part !</h2>
          <h2>Les tutos/cours que j'ai assidument suivis.</h2>
          <h3>(Merci Youtube et Udemy)</h3>
        </div>

        <div className="formations">
          <p className="intro">
            Quand on se lance dans l'aventure de l'apprentissage du dev' sans
            être accompagné, il faut avant tout cadrer notre vision, faire des
            choix (et donc renoncer à certaines choses...). <br />
            <br />
            Néophyte, j'ai commencé par <strong>Python</strong> sur lequel j'ai
            pu commencer à appréhender les notions de fonctions, boucles,
            algorythmie, programmation orientée objet, architectures de
            projets... <br />
            <br />
            J'ai tout de même été bloqué par le manque de rendu visuel. On fait
            des choses, certes, mais une invit' de commande comme résultat ou
            une mauvaise interface Tkinter, on a déjà vu plus sexy ! <br />
            <br />
            Qu'à cela ne tienne, je me suis tourné vers l'
            <strong>HTML/CSS</strong> puis rapidement{" "}
            <strong>Javascript</strong>. <br />
            <br />
            En plus d'un rendu visuel, il y a de quoi faire des animations des
            plus gratifiantes ! <br />
            <br />
            On attaque alors un framework/librairie, pour ma part, je me suis
            penché sur <strong>React</strong> (et un peu Next). <br />
            <br />
            Prenant alors conscience de l'intérêt de gérer des API et autres
            bases de données, la prochaine étapes sera un pied dans le monde de{" "}
            <strong>PHP et SQL</strong>... <br />
            <br />
            <span className="suite">A suivre !</span>
          </p>
          <p className="intro2">
            Chaque cours a été suivi en : <br />
            <br />
            1) retapant l'intégralité du code
            <br />
            2) ajoutant des effets/tests personnalisés. <br />
            3) en refaisant des pages.projets personnalisés à coté. <br />
            <br />
            Je maîtrise? Je ne pense pas... ou au moins pas totalement, loin de
            là ! <br />
            Mais je suis familiarisé avec nombre de notions qui ne demandent
            qu'à être mises en oeuvre pour être acquises.
          </p>

          <div className="cours">
            


          </div>
        </div>
      </div>
    </div>
  );
}
