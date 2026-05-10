import React, { useMemo } from "react";
import PageHero from "../../Layout/PageHero";
import HeroImage from "../../ui/HeroImage";
import { HeroPrimary } from "../../ui/Button";
import { heroData } from "../../../constants/homeData";
import { pubData } from "../../../constants/publicationsData";
import { beamlineData } from "../../../constants/beamlineData";
import bgImg from "../../../assets/images/img1.jpg";

const HomeHero = () => {
  // Dynamically calculate proposals and days awarded
  const { totalProposals, totalDays } = useMemo(() => {
    let proposals = 0;
    let days = 0;

    beamlineData.forEach((facility) => {
      facility.instruments?.forEach((instrument) => {
        instrument.proposals?.forEach((proposal) => {
          proposals++;
          const awardedDays = parseFloat(proposal.awarded);
          if (!isNaN(awardedDays)) {
            days += awardedDays;
          }
        });
      });
    });

    return { totalProposals: proposals, totalDays: days };
  }, []);

  const HomeExtraContent = (
    <>
      {/* 
        FIXED: Changed container to grid on mobile (grid-cols-2) and flex on larger screens (sm:flex).
        This forces a 2x2 grid on mobile, and restores your justify-around line on tablet/desktop. 
      */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row justify-around items-center gap-y-8 gap-x-2 sm:gap-4 lg:gap-6 mt-6 border-b border-theme-neutral-muted pb-6 w-full">
        {/* Stat 1: Publications (Takes 1 column on mobile) */}
        <div className="flex flex-col items-center text-center w-full sm:w-fit">
          <h3 className="text-secondary font-mono mb-1">
            {pubData?.length || 0}
          </h3>
          <h4 className="text-secondary font-mono font-light text-center">
            Publications
          </h4>
        </div>

        {/* Stat 2: Accepted Proposals (Takes 1 column on mobile) */}
        <div className="flex flex-col items-center text-center w-full sm:w-fit">
          <h3 className="text-secondary font-mono mb-2">{totalProposals}</h3>
          <h4 className="text-secondary font-mono font-light text-center">
            Accepted Proposals
          </h4>
        </div>

        {/* Stat 3: Allocated Beam Days 
            FIXED: col-span-2 forces it to take up the whole second row on mobile, 
            centering it beautifully under the top two! 
        */}
        <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1 w-full sm:w-fit">
          <h3 className="text-secondary font-mono mb-1">{totalDays}</h3>
          <h4 className="text-secondary font-mono font-light text-center">
            Beamdays Awarded
          </h4>
        </div>
      </div>

      {/* Button also centered on mobile for better balance with the grid above it */}
      <div className="pt-6 flex justify-center md:justify-start w-full">
        <HeroPrimary to="/publications">All Publications</HeroPrimary>
      </div>
    </>
  );

  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      rightContent={<HeroImage />}
      extraLeftContent={HomeExtraContent}
      overlayClass="bg-theme-black/80"
    />
  );
};

export default HomeHero;
