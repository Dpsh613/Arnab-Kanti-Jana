import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Header from "./components/Layout/Header";
import ScrollToTop from "./components/Layout/ScrollToTop";
import Footer from "./components/Layout/Footer";

// pages
import HomePage from "./pages/HomePage";
import BeamlinesPage from "./pages/BeamlinesPage";
import ResearchExpertisePage from "./pages/ResearchExpertisePage";
import PublicationsPage from "./pages/PublicationsPage";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

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
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
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
