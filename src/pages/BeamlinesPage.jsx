import React from "react";
import { motion } from "framer-motion";
import { beamlineData } from "../constants/beamlineData";
import SEO from "../components/seo/SEO";

// feature components
import BeamlineHero from "../components/features/beamline/BeamlineHero";
import FacilitySection from "../components/features/beamline/FacilitySection";
import pageTransition from "../animation/pageTransition";

export default function BeamlinePage() {
  return (
    <>
      <SEO
        title="Beamline Access & Experimental Records | Arnab Kanti Jana"
        description="Experimental records and awarded beamtime at ISIS Neutron and Muon Source, PSI Switzerland, DESY Germany, J-PARC Japan and RRCAT India through competitive peer-reviewed proposals."
        url="https://arnab-kanti-jana.vercel.app/beamlines"
      />
      <motion.section
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-theme-black min-h-screen relative"
      >
        <BeamlineHero />

        {/* Facilities mapped using standard layout */}
        <div className="pb-12">
          {beamlineData.map((facility, fIdx) => (
            <FacilitySection key={facility.id || fIdx} facility={facility} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
