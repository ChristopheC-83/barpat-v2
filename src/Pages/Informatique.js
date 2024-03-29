import Nav from "../component/Nav";
import { useContext, useState } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import { dataCours } from "../data/dataCours";
import Cours from "../component/componentInformatique/Cours";
import InfoCours from "../component/componentInformatique/InfoCours";

export default function Informatique() {
  const { getColorByName , getGlassMorhBGC} = useContext(dataColorContext);

  // console.log(dataCours[0]); 

  let color = getColorByName("parcours");
  
  let bgc = getGlassMorhBGC("parcours");

  const [lesson, setLesson] = useState(99);

  function selectedLesson(elt) {
    setLesson(elt);
  }

  // console.log("lesson : ", lesson);
  // console.log("name :" ,dataCours[lesson].name)

  return (
    <div className="container" >
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>

      <Nav color={color} bgc={bgc}/>
      <div className="pageContainer informatiqueContainer" style={{background:`${bgc}`}}>
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
            Néophyte, j'ai débuté par <strong>Python</strong> sur lequel j'ai
            pu commencer à appréhender les notions de fonctions, boucles,
            algorythmes, programmation orientée objet, architectures de
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
            penché sur <strong>React</strong> (et un peu Next) que je trouve fantastique ! <br />
            <br />
            J'ai pris alors conscience de l'intérêt de gérer des API et autres
            bases de données. Je me suis penché sur {" "}<strong>PHP et SQL</strong> qui me permettent de mettre en place des systèmes de gestion des utilisateurs (modérateurs, admin et super admin...) mais aussi de produire des sites dynamiques dans lesquels les utilisateurs peuvent agir.<br />
          
            <br />
            <span className="suite">Reste à joindre React avec php !</span>
          </p>
          <p className="intro2">
            Chaque cours a été suivi en : <br />
            <br />
            1) retapant l'intégralité du code
            <br />
            2) ajoutant des effets/tests personnalisés. <br />
            3) tous les cours (sauf Python par Jonathan Roux) ont été suivis
            jusqu'au bout avec obtention du certificat. <br />
            4) en refaisant des pages / projets personnalisés à coté. <br />
            <br />
            Je maîtrise ? Je ne pense pas... ou au moins pas totalement, loin de
            là ! <br />
            Mais je suis familiarisé avec nombre de notions qui ne demandent
            qu'à être mises en oeuvre pour être acquises. <br /><br />
            <span className="suite">Cliquez sur les images pour voir le contenu des cours  !</span>
          </p>

          <div className="etalage">
            {dataCours.map((cours) => (
              <div
                className="cadre"
                key={cours.id}
                style={{
                  // width: `${cours.width}px`,
                  // height: `${cours.width / 1.78}px`,
                  top: cours.top,
                  left: cours.left,
                  transform: cours.rotate,
                }}
                onClick={() => selectedLesson(cours.id-1)}
              >
                <Cours
                  name={cours.name}
                  img={cours.img}
                  comp1={cours.comp1}
                  comp2={cours.comp2}
                  comp3={cours.comp3}
                  comp4={cours.comp4}
                />
              </div>
            ))}

            <div
              
              className= 
              {lesson!==99 ?
              "detailsOverlay":"detailsOverlayMute"}

            >
              {lesson!==99 ?
               <InfoCours
               name={dataCours[lesson].name}
               name2={dataCours[lesson].name2}
               img={dataCours[lesson].img}
               comp1={dataCours[lesson].comp1}
               comp2={dataCours[lesson].comp2}
               comp3={dataCours[lesson].comp3}
               comp4={dataCours[lesson].comp4}
             /> : 
             ""
               
               }

              <div 
              className="closeOverlay" 
              onClick={() => selectedLesson(99)}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
