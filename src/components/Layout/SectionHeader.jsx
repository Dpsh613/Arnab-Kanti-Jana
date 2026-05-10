// components/Layout/SectionHeader.jsx
import React from "react";
import { FadeUp } from "./AnimatedWrapper";

const SectionHeader = ({ title, className = "" }) => {
  return (
    <FadeUp margin="-100px" className={`mb-6 md:mb-8 ${className}`}>
      <h2 className="text-white">{title}</h2>
      <div className="w-30 h-[1px] bg-theme-accent-light mt-2 md:mt-4 rounded-full"></div>
    </FadeUp>
  );
};

export default SectionHeader;
