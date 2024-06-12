import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicial from "./components/PaginaInicial";
import QuizPersonalizado from "./components/QuizPersonalizado";
import MapaInterativo from "./components/MapaInterativo";
import Carta from "./components/Carta";
import SurpresaFinal from "./components/SurpresaFinal";
import GaleriaMomentos from "./components/GaleriaMomentos";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/quiz" element={<QuizPersonalizado />} />
        <Route path="/mapa" element={<MapaInterativo />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/surpresa" element={<SurpresaFinal />} />
        <Route path="/momentos" element={<GaleriaMomentos />} />
      </Routes>
    </Router>
  );
}

export default App;
