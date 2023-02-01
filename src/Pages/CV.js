import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import Nav from "../component/Nav";

export default function CV(props) {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("cv");

  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      {/* <div className="centre"></div> */}
      <Nav color={color} />
      <div className="cvContainer">
        <div className="cvLeft">
          <div className="languages">
            <div className="cvContent">
              <h2>Langages et Technos</h2>
              <div className="langContent">
                <div className="barchart">
                  <h4>PYTHON</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (50  * 0.66%))" }}
                  ></div>
                </div>
                <div className="barchart">
                  <h4>HTML/CSS</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (90  *  0.66%) )" }}
                  ></div>
                </div>
                <div className="barchart">
                  <h4>JAVASCRIPT</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (66  * 0.66%))" }}
                  ></div>
                </div>
                <div className="barchart">
                  <h4>REACT</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (50  *  0.66%))" }}
                  ></div>
                </div>
                <div className="barchart">
                  <h4>SASS</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (85  *  0.66%))" }}
                  ></div>
                </div>
                <div className="barchart">
                  <h4>GREENSOCK</h4>
                  <div
                    className="barre"
                    style={{ width: "calc( (50  *  0.66%))" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="cvContent">
              <h2>Compétences</h2>
              <div className="competencesContent">
                <ul>
                  <li>Organisation et plannification<br />mise en place rétroplanning et respect des délais</li>
                  <li>Curieux, en apprentissage permanent<br />demandeur ou force de recherche</li>
                  <li>Bonne réception à la critique constructive<br />remise en question quand nécessaire</li>
                  <li>Capacité de travail en équipe, <br /> avec une  vision globale d'un projet</li>
                  <li>Compréhension de l'UX / UI <br />face à un cahier des charges</li>
                  <li>Réactif, force de propositions<br /> et de décisions face aux problèmes</li>
                  <li>Communicant et positif</li>
                  <li></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className="cvRight">
          <div className="expPro">
            <div className="cvContent">
              <h2>Expériences professionnelles</h2>
              <div className="proContent">
                <p>
                  <span>depuis 2014</span> : <br /> Artisan indépendant agenceur
                  / sous-traitance
                </p>
                <p>
                  <span>2008 à 2013</span> : <br />
                  Cadre Chef de Secteur en GSB (Leroy Merlin) <br />
                  <i>Mission transverse :</i>
                  <br />
                  <i>formateur régionnal des vendeurs.</i>
                </p>
                <p>
                  <span>2004 à 2008</span> : <br /> Responsable de Magasin en
                  distribution spécialisée
                  <br />
                  <i>
                    Missions transerves : <br />
                    formateur au niveau national pour les vendeurs et futurs
                    responsables de magasins.
                    <br />
                    Accompagnement du service achat (référencement et
                    promotions)
                  </i>
                </p>
                <p>
                  <span>2002 à 2004</span> : <br /> Equipier à Manager
                  restauration (Quick)
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="studies">
            <div className="cvContent">
              <h2>Parcours / Formations</h2>
              <div className="studiesContent">
                <p>
                  <span>depuis septembre 2021</span> : Formation en autodidacte
                  au codage et developpement Web (merci YT et Udemy !)
                </p>

                <p>
                  <span>2014 & 2015</span> : Formation de menuisier d'agencement
                  et poseur de cuisines.
                </p>
                <p>
                  <span>2007 à 2013</span> : Formations de formateur et
                  d'animateur de réunions
                </p>
                <p>
                  <span>2006 à 2010</span> : Cycle de formation Chef de Secteur
                  (animation, management, gestion...)
                </p>
                <p>
                  <span>1999 à 2004</span> : cursus universitaire et obtention
                  d'une Maîtrise de Biochimie Alimentaire et Neurophysiologie
                </p>
              </div>
            </div>
          </div>
          <div className="others">
            <div className="cvContent">
              <h2>Centres d'intérêts</h2>
              <div className="othersContent">
                <ul className="li">▶️ VTT</ul>
                <ul className="li">▶️ Course à pied / Trail</ul>
                <ul className="li">▶️ Cinéma</ul>
                <ul className="li">▶️ Economie</ul>
                <ul className="li">▶️ Apprentissage du codage</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
