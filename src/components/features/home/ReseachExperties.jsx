import React from "react";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp, Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";
import {
  researchFocusData,
  methodologiesData,
} from "../../../constants/researchExpertiesData";

const ResearchExperties = () => {
  // 1. DYNAMICALLY GENERATE SUMMARY DATA
  // Extracts the "title" (or "name") from the nested methodologiesData object
  // joins them with a comma, and adds a period at the end.
  const dynamicExpertiseData = [
    {
      category: "Synthesis",
      skills:
        methodologiesData.synthesis.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Structural Analysis",
      skills:
        methodologiesData.structuralAnalysis
          .map((item) => item.title)
          .join(", ") + ".",
    },
    {
      category: "Magnetometry & Transport",
      skills:
        methodologiesData.magnetometry.map((item) => item.title).join(", ") +
        ".",
    },
    {
      category: "Spectroscopy",
      skills:
        methodologiesData.spectroscopy.map((item) => item.title).join(", ") +
        ".",
    },
    {
      category: "Microscopic Local Probes",
      skills:
        methodologiesData.microscopicProbes
          .map((item) => item.title)
          .join(", ") + ".",
    },
    {
      category: "Software",
      skills:
        methodologiesData.softwares.map((item) => item.name).join(", ") + ".",
    },
  ];

  return (
    <SectionWrapper id="research" className="bg-theme-black">
      {/* ---------------- 1. RESEARCH FOCUS SECTION ---------------- */}
      <div>
        {/* Replaced manual motion div with your SectionHeader */}
        <SectionHeader title="Present Research focus" />

        {/* ONE BIG CONTAINER - VERTICAL LIST */}
        <Stagger className="max-w-7xl mx-auto w-full border border-theme-accent-light p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col divide-y divide-zinc-800/60">
            {researchFocusData.map((item) => (
              <StaggerItem
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 first:pt-0 last:pb-0 items-center"
              >
                {/* Left Side: Number, Heading & Description */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 md:gap-4 mb-6">
                    <span className="font-mono text-secondary font-fluid-1 font-light shrink-0">
                      {item.id}.
                    </span>
                    <h3 className="text-secondary tracking-wide m-0">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-theme-neutral-light m-0">{item.desc}</p>
                </div>

                {/* Right Side: Image Component (Uncropped) */}
                <div className="lg:col-span-5 w-full">
                  <div className="w-full p-2 group overflow-hidden flex justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full max-h-[350px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>

      {/* ---------------- 2. DYNAMIC EXPERTISE SECTION ---------------- */}
      <div className="max-w-7xl mx-auto mt-24">
        {/* Custom Header format based on your old styling, wrapped in FadeUp */}
        <FadeUp margin="-100px" className="flex items-center gap-6 mb-12">
          <h2 className="text-theme-heading font-light tracking-tight text-3xl md:text-4xl">
            Hands-on Expertise
          </h2>
          <div className="flex-grow h-px bg-theme-neutral-muted/30"></div>
        </FadeUp>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dynamicExpertiseData.map((item, index) => (
            <StaggerItem
              key={index}
              className="p-8 border border-theme-neutral-muted/20 bg-theme-neutral-dark/10 hover:bg-theme-neutral-dark/30 hover:border-theme-accent/50 transition-all duration-300 rounded-sm group relative overflow-hidden h-full flex flex-col"
            >
              {/* Top accent line animation on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-theme-accent transition-all duration-500 group-hover:w-full"></div>

              <h4 className="tracking-[0.1em] text-secondary font-medium mb-4 uppercase text-sm">
                {item.category}
              </h4>
              <p className="text-sm text-theme-neutral-light font-light leading-relaxed">
                {item.skills}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionWrapper>
  );
};

export default ResearchExperties;
