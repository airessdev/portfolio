import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/About/Apropos";
import Erreur from "../pages/Erreur/Erreur";
import Logement from "../pages/Logement/Logement";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Welcome" />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
        {/* route tout le reste pour les erreurs 404 */}
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
