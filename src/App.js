import "./Style/index.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import CV from "./Pages/CV";
import Informatique from "./Pages/Informatique";
import Partages from "./Pages/Partages";
import Parcours from "./Pages/Parcours";
import Portfolio from "./Pages/Portfolio";
import Sport from "./Pages/Sport";
import Mentions from "./component/Mentions";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
     
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Accueil />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/informatique" element={<Informatique />} />
          <Route path="/partages" element={<Partages />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
