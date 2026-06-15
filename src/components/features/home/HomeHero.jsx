import React, { useMemo } from "react";
import { HeroPrimary } from "../../ui/Button";
import {
  Magnet,
  Layers2,
  Orbit,
  Hexagon,
  Compass,
  Activity,
  Network,
  Waves,
  Sparkles,
  GitBranch,
} from "lucide-react";
import PageHero from "../../Layout/PageHero";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import { heroData } from "../../../constants/homeData";
import { pubData } from "../../../constants/publicationsData";
import { beamlineData } from "../../../constants/beamlineData";

// Make sure to import your landscape 3D background image
import bgImg from "../../../assets/images/img1.png";

const getIcon = (id) => {
  const props = { size: 16, strokeWidth: 1.5 }; // slightly smaller icons
  switch (id) {
    case "Materials":
      return <Layers2 {...props} />;
    case "Electron":
      return <Orbit {...props} />;
    case "Magnetic":
      return <Hexagon {...props} />;
    case "Anisotropy":
      return <Compass {...props} />;
    case "Dynamics":
      return <Activity {...props} />;
    case "Structure":
      return <Network {...props} />;
    case "Quantum":
      return <Waves {...props} />;
    case "Formation":
      return <Sparkles {...props} />;
    case "Lattice":
      return <GitBranch {...props} />;
    default:
      return <Magnet {...props} />;
  }
};

const HomeHero = () => {
  const { totalProposals, totalDays } = useMemo(() => {
    let proposals = 0;
    let days = 0;
    beamlineData.forEach((facility) => {
      facility.instruments?.forEach((instrument) => {
        instrument.proposals?.forEach((proposal) => {
          proposals++;
          const awardedDays = parseFloat(proposal.awarded);
          if (!isNaN(awardedDays)) days += awardedDays;
        });
      });
    });
    return { totalProposals: proposals, totalDays: days };
  }, []);

  const HomeExtraContent = (
    <div className="flex flex-col w-full">
      {/* Research Interests Grid - Tightened margins and gap */}
      <div className="mb-4 w-full">
        <h4 className="text-secondary tracking-[0.15em] font-light font-sans mb-3">
          Research Interests -
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
          {heroData.researchInterests.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 text-white/90 text-sm font-light tracking-wide"
            >
              <span className="text-theme-accent-light">
                {getIcon(item.id)}
              </span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-xl h-px bg-theme-heading/10 mb-5"></div>

      {/* Stats Grid - Tightened margins */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-y-4 mb-2 max-w-xl">
        <div className="w-1/2 sm:w-auto sm:pr-8 text-left">
          <div className="text-3xl lg:text-4xl font-heading text-secondary mb-2">
            {pubData?.length || 0}
          </div>
          <div className="text-xs sm:text-sm text-theme-heading font-sans tracking-wider uppercase">
            Publications
          </div>
        </div>
        <div className="w-1/2 sm:w-auto sm:px-8 text-left sm:border-l sm:border-theme-heading">
          <div className="text-3xl lg:text-4xl font-heading text-secondary mb-2">
            {totalProposals}
          </div>
          <div className="text-xs sm:text-sm text-theme-heading font-sans tracking-wider uppercase">
            Accepted Proposals
          </div>
        </div>
        <div className="w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-theme-heading sm:pl-8 text-left">
          <div className="text-3xl lg:text-4xl font-heading text-secondary mb-2">
            {totalDays}
          </div>
          <div className="text-xs sm:text-sm text-theme-heading font-sans tracking-wider uppercase">
            Beamdays Awarded
          </div>
        </div>
      </div>

      <div className="pt-6 flex justify-center md:justify-start w-full">
        <HeroPrimary to="/publications">All Publications</HeroPrimary>
      </div>
    </div>
  );

  // FIXED QUOTE: Removed fixed h-[400px] which was forcing the screen to be too tall.
  // Changed background blur box to be lighter and more readable.

  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      extraLeftContent={HomeExtraContent}
    />
  );
};

export default HomeHero;
