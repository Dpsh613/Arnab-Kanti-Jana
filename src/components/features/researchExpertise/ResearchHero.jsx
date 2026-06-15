import React from "react";
import PageHero from "../../Layout/PageHero";
import { heroData } from "../../../constants/researchExpertiesData";
import bgImg from "../../../assets/images/img2.png";

export default function ResearchHero() {
  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      // Fixed: Added md:col-span-6
      leftCol="md:col-span-6 lg:col-span-7"
      rightCol="md:col-span-6 lg:col-span-5"
    />
  );
}
