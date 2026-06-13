import React from "react";
import PageHero from "../../Layout/PageHero";
import { heroData } from "../../../constants/aboutData";
import bgImg from "../../../assets/images/test4.png";

export default function AboutHero() {
  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      // Fixed: Added md:col-span-6 back so it splits 50/50 on tablets
      leftCol="md:col-span-6 lg:col-span-7"
      rightCol="md:col-span-6 lg:col-span-5"
    />
  );
}
