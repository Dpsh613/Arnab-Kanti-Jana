import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import SectionWrapper from "../components/Layout/SectionWrapper";
// Feature Components
import HomeHero from "../components/features/home/HomeHero.jsx";
import ResearchExperties from "../components/features/home/ReseachExperties";
import Publication from "../components/features/home/Publication";
import Beamline from "../components/features/home/Beamline";
import Talks from "../components/features/home/Talks";
import Awards from "../components/features/home/Awards";
import Gallery from "../components/features/home/Gallery";

import SEO from "../components/seo/SEO.jsx";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Arnab Kanti Jana | Experimental Condensed Matter Physicist"
        description="Doctoral researcher specializing in magnetism, neutron scattering, muon studies, synchrotron techniques, spectroscopy, XRD characterization and strongly correlated quantum materials."
        url="https://arnab-kanti-jana.vercel.app/"
      />
      <motion.section
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-theme-black min-h-screen relative overflow-hidden"
      >
        <HomeHero />
        <ResearchExperties />
        <Publication />
        <Beamline />
        <Talks />
        <Awards />
        <Gallery />
      </motion.section>
    </>
  );
}
