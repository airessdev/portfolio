import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/About/Apropos";
import Erreur from "../pages/Erreur/Erreur";
import Portfolio from "../pages/Portfolio/Portfolio";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/portfolio" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/Portfolio/:id" element={<Portfolio />} />
        <Route path="*" element={<Erreur />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
