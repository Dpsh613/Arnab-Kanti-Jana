import React from "react";
import PageHero from "../../Layout/PageHero";
import AtomicJourney from "../../ui/AtomicJourney";
import { heroData } from "../../../constants/publicationsData";
import bgImg from "../../../assets/images/img3.png";

export default function PublicationHero() {
  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      rightContent={<AtomicJourney />}
      // Fixed: Added md:col-span-6
      leftCol="md:col-span-4 lg:col-span-5"
      rightCol="md:col-span-8 lg:col-span-7"
    />
  );
}
