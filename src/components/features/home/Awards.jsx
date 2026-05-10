import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp, Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";
import { awardsData } from "../../../constants/awardsData";

const Awards = () => {
  return (
    <SectionWrapper id="awards">
      <SectionHeader title="Awards & Honors" />
      <div className="max-w-6xl mx-auto">
        <Stagger className="relative ml-4 border-l-2 border-theme-neutral-dark flex flex-col gap-8">
          {awardsData.map((award, index) => (
            <StaggerItem key={index} className="relative pl-10 group">
              {/* TIMELINE DOT */}
              <div className="absolute left-[9px] top-1.5 w-4 h-4 rounded-full bg-theme-black border-2 border-theme-accent/80 shadow-[0_0_10px_rgba(240,177,0,0.1)] group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:shadow-[0_0_15px_rgba(240,177,0,0.3)] transition-all duration-300"></div>
              {/* AWARD CONTENT */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-mono font-bold text-secondary tracking-widest">
                    {award.year}
                  </span>
                </div>
                {/* AWARD INFO */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="tracking-wider leading-snug">
                      {award.title}
                    </h3>
                    <span
                      span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-theme-black text-secondary rounded border border-theme-accent"
                    >
                      {award.type}
                    </span>
                  </div>
                  <p className="text-theme-accent mb-2">{award.institute}</p>
                  <p className="text-theme-neutral-light">{award.desc}</p>
                </div>
              </div>
              <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-theme-neutral-dark to-transparent"></div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionWrapper>
  );
};

export default Awards;
