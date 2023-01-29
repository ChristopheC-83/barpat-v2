import gsap from "../images/portfolio/gsap.svg";
import sass from "../images/portfolio/sass.svg";

export const dataPortfolio = [
  {
    id: 4,
    img: "../images/portfolio/siteProV2.jpg",
    title: "Seconde version de mon site Pro",
    content:
    "Seconde version du site dédié à mon ativité professionnelle de poseur de cuisines. ",
      benefices :"Après avoir ingurgité des formations et informations React, ma première production avec cette technologie. Modularité et conception appréciée... à mon niveau !",
    techno: "Les technos utilisées :",
    technoUtilisees: (
      <div className="logo">
        <i className="fa-brands fa-html5" style={{ color: "#ff5723" }}></i>
        <i className="fa-brands fa-css3-alt" style={{ color: "#254bdd" }}></i>
        <i className="fa-brands fa-square-js" style={{ color: "#efd81d" }}></i>
        <i className="fa-brands fa-react" style={{ color: "#5ed3f3" }}></i>
        <img src={sass} alt="logo sass"></img>
        <img src={gsap} alt="logo greensock"></img>
      </div>
    ),
    link: "https://christophe-cuisine.fr/",
  },

  {
    id: 3,
    img: "../images/portfolio/siteVeloExpresso.jpg",
    title: "Le site Vélo Expresso",
    content:
      "Premier site fait pour des amis et leur boutique de vélos. ",
    benefices: "Première expérience pour autrui. Donc petite pression supplémentaire mais satisfaction en corollaire ! Je suis parti d'une page blanche. Faute d'informations pour le finir, il est pour l'instant en stand-by.",
    techno: "Les technos utilisées :",
    technoUtilisees: (
      <div className="logo">
        <i className="fa-brands fa-html5" style={{ color: "#ff5723" }}></i>
        <i className="fa-brands fa-css3-alt" style={{ color: "#254bdd" }}></i>
        <i className="fa-brands fa-square-js" style={{ color: "#efd81d" }}></i>
        <img src={sass} alt="logo sass"></img>
        <img src={gsap} alt="logo greensock"></img>
      </div>
    ),
    link: "https://barpat.fun/velo-expresso/",
  },
  {
    id: 2,
    img: "../images/portfolio/siteProV1.jpg",
    title: "Mon site Pro, 1ère Version",
    content:
      "Première version du site dédié à mon ativité professionnelle de poseur de cuisines. ",
    benefices:
      "Prise de conscience qu'un projet perso est plus formateur qu'un tuto et qu'avant de se lancer dans la création d'une simple page, on se prépare le terrain ! contenu, images, rendu visuel final...",
    techno: "Les technos utilisées :",
    technoUtilisees: (
      <div className="logo">
        <i className="fa-brands fa-html5" style={{ color: "#ff5723" }}></i>
        <i className="fa-brands fa-css3-alt" style={{ color: "#254bdd" }}></i>
        <i className="fa-brands fa-square-js" style={{ color: "#efd81d" }}></i>
        <img src={gsap} alt="logo greensock"></img>
      </div>
    ),
    link: "https://archivev1.christophe-cuisine.fr/",
  },
  {
    id: 1,
    img: "../images/portfolio/siteBarpatV1.jpg",
    title: "Site Perso, 1ère version",
    content:
      "Ma première page perso. Le but essentiel sur ce projet avait été de travailler avec CSS grid sur la page 'parcours' pour garder les ronds ...ronds ! et les chemins cohérents même en cas de redimensionnement de la page",
    techno: "Les technos utilisées :",
    technoUtilisees: (
      <div className="logo">
        <i className="fa-brands fa-html5" style={{ color: "#ff5723" }}></i>
        <i className="fa-brands fa-css3-alt" style={{ color: "#254bdd" }}></i>
        <i className="fa-brands fa-square-js" style={{ color: "#efd81d" }}></i>
      </div>
    ),
    link: "https://barpat.fun",
  },
];
