import React from "react";
import SectionHeader from "../../Layout/SectionHeader";
import { Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";
import AutoSciText from "../../../utils/AutoSciText";

const FeatureCard = ({ item }) => {
  return (
    <div className="flex flex-col group w-full h-full">
      {/* 
        TEXT SECTION 
        Allows text to breathe. If one side has short text, the empty space 
        will happen here, but because we anchor the image to the bottom below, 
        it will look like a deliberate layout choice rather than a broken layout.
      */}
      <div className="flex flex-col gap-2 mb-2">
        <h3 className="text-secondary tracking-wide">
          <AutoSciText text={item.title} />
        </h3>
        <p className="text-theme-neutral-light leading-relaxed text-base md:text-lg m-0 font-light text-left md:text-justify">
          <AutoSciText text={item.desc} />
        </p>
      </div>

      {/* 
        IMAGE & CAPTION WRAPPER 
        mt-auto ensures this entire block is pushed to the bottom.
        This guarantees the captions AND images align horizontally!
      */}
      <div className="mt-auto w-full flex flex-col">
        {/* 
          IMAGE CONTAINER
          - Reduced height (h-[240px] md:h-[280px]) so short images don't leave massive top gaps.
          - object-bottom: Forces the image to sit firmly on top of the caption, preventing it from floating.
        */}
        <div className="w-full shrink-0 h-[240px] md:h-[280px] flex items-end justify-center transition-all duration-500 rounded-sm p-2 md:p-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* CAPTION SECTION */}
        <div className="shrink-0 pt-4 flex items-start justify-center min-h-[50px]">
          <p className="text-center text-theme-neutral-light font-mono text-[11px] md:text-xs tracking-wide px-2 md:px-8 leading-relaxed opacity-80">
            <AutoSciText text={item.imgLabel} />
          </p>
        </div>
      </div>
    </div>
  );
};

const MethodologyGrid = ({ title, data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-8 md:py-16">
      {/* Header outside to prevent overlap */}
      <SectionHeader title={title} />

      <div className="relative w-full mt-12 md:mt-20">
        <div className="hidden lg:flex absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 h-[100%] w-[2px] flex-col justify-evenly items-center pointer-events-none z-0">
          {/* 1. The Faint Thread (Continuous background track) */}
          <div className="absolute inset-0 w-[1px] mx-auto bg-gradient-to-b from-transparent via-theme-accent-light/20 to-transparent"></div>

          {/* 2. Top Accent Node */}
          <div className="relative w-[1px] h-[25%] bg-gradient-to-b from-transparent via-theme-accent-light/70 to-transparent blur-[0.5px]"></div>

          {/* 3. Bottom Accent Node */}
          <div className="relative w-[1px] h-[25%] bg-gradient-to-b from-transparent via-theme-accent-light/70 to-transparent blur-[0.5px]"></div>
        </div>
        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-20 md:gap-y-28 relative z-10">
          {data.map((item) => (
            <StaggerItem key={item.id} className="h-full w-full">
              <FeatureCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
};

export default MethodologyGrid;
