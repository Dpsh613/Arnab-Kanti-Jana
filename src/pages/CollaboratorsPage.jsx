import React from "react";
import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import pageTransition from "../animation/pageTransition";
import { heroData, collaborators } from "../constants/collaboratorsData";
import SEO from "../components/seo/SEO";

// feature components
import PageHero from "../components/Layout/PageHero";
import SectionWrapper from "../components/Layout/SectionWrapper";
import CollaboratorHero from "../components/features/collab/CollaboratorHero";
import CollaboratorRegion from "../components/features/collab/CollaboratorRegion";

// Filter data
const nationalCollaborators = collaborators.filter(
  (c) => c.region === "national",
);
const internationalCollaborators = collaborators.filter(
  (c) => c.region === "international",
);

const CollaboratorsPage = () => {
  return (
    <>
      <SEO
        title="Scientific Collaborators & Research Network | Arnab Kanti Jana"
        description="International and national scientific collaborations advancing condensed matter physics through neutron, muon and synchrotron research facilities and interdisciplinary partnerships."
        url="https://arnab-kanti-jana.vercel.app/collaborators"
      />
      <motion.section
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-theme-black min-h-screen relative"
      >
        <CollaboratorHero />
        <SectionWrapper>
          <div className="pb-16">
            {/* National Section */}
            <CollaboratorRegion
              icon={MapPin}
              title="National"
              collaborators={nationalCollaborators}
              className="mb-24 md:mb-32"
            />

            {/* International Section */}
            <CollaboratorRegion
              icon={Globe2}
              title="International"
              collaborators={internationalCollaborators}
            />
          </div>
        </SectionWrapper>
      </motion.section>
    </>
  );
};

export default CollaboratorsPage;
