import "./Style/index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import CV from "./Pages/CV";
import Informatique from "./Pages/Informatique";
import Partages from "./Pages/Partages";
import Parcours from "./Pages/Parcours";
import Portfolio from "./Pages/Portfolio";
import NotFound from "./Pages/NotFound";
import Navbar from "./component/Navbar";

function App() {

  const location = useLocation()
  console.log(location)

  return (
    <>
      {location.pathname!=="/" ? <Navbar /> : ""}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/informatique" element={<Informatique />} />
          <Route path="/partages" element={<Partages />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
