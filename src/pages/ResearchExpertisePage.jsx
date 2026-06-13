import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import { methodologiesData } from "../constants/researchExpertiesData";
import SectionWrapper from "../components/Layout/SectionWrapper";

// Feature Components
import ResearchHero from "../components/features/researchExpertise/ResearchHero";
import MethodologyGrid from "../components/features/researchExpertise/MethodologyGrid";
import MicroscopicProbes from "../components/features/researchExpertise/MicroscopicProbes";
import SoftwareGrid from "../components/features/researchExpertise/SoftwareGrid";

const ResearchExpertisePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative overflow-hidden"
    >
      <ResearchHero />
      <SectionWrapper className="pb-12 md:pb-32">
        <div className="space-y-12 md:space-y-16">
          <MethodologyGrid
            title="Synthesis"
            data={methodologiesData.synthesis}
          />
          <MethodologyGrid
            title="Structural Analysis"
            data={methodologiesData.structuralAnalysis}
          />
          <MethodologyGrid
            title="Magnetometry & Transport"
            data={methodologiesData.magnetometry}
          />
          <MethodologyGrid
            title="Spectroscopy"
            data={methodologiesData.spectroscopy}
          />
          <MicroscopicProbes data={methodologiesData.microscopicProbes} />

          <SoftwareGrid data={methodologiesData.softwares} />
        </div>
      </SectionWrapper>
    </motion.section>
  );
};

export default ResearchExpertisePage;
