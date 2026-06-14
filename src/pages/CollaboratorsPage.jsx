import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import { heroData, collaborators } from "../constants/collaboratorsData";

// Components
import PageHero from "../components/Layout/PageHero";
import SectionWrapper from "../components/Layout/SectionWrapper";
import CollaboratorHero from "../components/features/collab/CollaboratorHero";
import CollaboratorRegion from "../components/features/collab/CollaboratorRegion";
import { Globe2, MapPin } from "lucide-react";

// Filter data
const nationalCollaborators = collaborators.filter(
  (c) => c.region === "national",
);
const internationalCollaborators = collaborators.filter(
  (c) => c.region === "international",
);

const CollaboratorsPage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* 1. Hero Section using the Reusable Component */}
      <CollaboratorHero />

      {/* 2. Collaborators Lists */}
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
  );
};

export default CollaboratorsPage;
