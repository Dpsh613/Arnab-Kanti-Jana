import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import {
  heroData,
  personalInfo,
  biographyData,
  thesisData,
  globalFootprintData,
  educationTimeline,
  futureGoalsData,
} from "../constants/aboutData";

// Layout & Common Components
import PageHero from "../components/Layout/PageHero";
import SectionWrapper from "../components/Layout/SectionWrapper";
import SEO from "../components/seo/SEO";

// Feature Components
import AboutHero from "../components/features/about/AboutHero";
import ProfileSidebar from "../components/features/about/ProfileSidebar";
import BiographySection from "../components/features/about/BiographySection";
import ThesisCallout from "../components/features/about/ThesisCallout";
import GlobalFootprint from "../components/features/about/GlobalFootprint";
import EducationTimeline from "../components/features/about/EducationTimeline";
import FutureGoals from "../components/features/about/FutureGoals";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Arnab Kanti Jana | Experimental Condensed Matter Physicist"
        description="Experimental condensed matter physicist investigating magnetism, spin dynamics, quantum materials and strongly correlated electron systems using neutron scattering, muon spectroscopy and synchrotron techniques."
        url="https://arnab-kanti-jana.vercel.app/about"
      />
      <motion.section
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-theme-black min-h-screen relative"
      >
        {/* 1. Hero Section */}
        <AboutHero />

        {/* 2. Main Content Grid */}
        <SectionWrapper className="pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Sticky Profile Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <ProfileSidebar info={personalInfo} />
            </div>

            {/* RIGHT COLUMN: Biography & Details */}
            <div className="lg:col-span-8 space-y-16">
              <BiographySection data={biographyData} />
              <ThesisCallout data={thesisData} />
              <GlobalFootprint data={globalFootprintData} />
              <EducationTimeline data={educationTimeline} />
              <FutureGoals data={futureGoalsData} />
            </div>
          </div>
        </SectionWrapper>
      </motion.section>
    </>
  );
};

export default AboutPage;
