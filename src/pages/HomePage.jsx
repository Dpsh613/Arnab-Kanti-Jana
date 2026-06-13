import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition.js";
import SectionWrapper from "../components/Layout/SectionWrapper.jsx";
// Feature Components
import HomeHero from "../components/features/home/HomeHero.jsx";
import ResearchExperties from "../components/features/home/ReseachExperties.jsx";
import Publication from "../components/features/home/Publication.jsx";
import Beamline from "../components/features/home/Beamline.jsx";
import Talks from "../components/features/home/Talks.jsx";
import Awards from "../components/features/home/Awards.jsx";
import Gallery from "../components/features/home/Gallery.jsx";

export default function HomePage() {
  return (
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
  );
}
