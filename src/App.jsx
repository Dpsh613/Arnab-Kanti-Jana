import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Header from "./components/Layout/Header.jsx";
import ScrollToTop from "./components/Layout/ScrollToTop.jsx";
import Footer from "./components/Layout/Footer.jsx";

// pages
import HomePage from "./pages/HomePage.jsx";
import BeamlinesPage from "./pages/BeamlinesPage";
import ResearchExpertisePage from "./pages/ResearchExpertisePage.jsx";
import PublicationsPage from "./pages/PublicationsPage";
import CollaboratorsPage from "./pages/CollaboratorsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/research-expertise" element={<ResearchExpertisePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/beamlines" element={<BeamlinesPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}
