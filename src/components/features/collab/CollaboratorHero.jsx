import React from "react";
import PageHero from "../../Layout/PageHero";
import GlobalNetwork from "../../ui/GlobalNetwork";
import { heroData } from "../../../constants/collaboratorsData";
import bgImg from "../../../assets/images/lattice.png";

export default function CollaboratorHero() {
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
