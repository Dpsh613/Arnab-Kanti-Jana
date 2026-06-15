// components/Layout/PageHero.jsx
import SectionWrapper from "../Layout/SectionWrapper";
import { Stagger, StaggerItem } from "../../components/Layout/AnimatedWrapper";

const PageHero = ({
  data,
  bgImage,
  rightContent,
  extraLeftContent,
  overlayClass = "bg-theme-black/60",
  leftCol = "md:col-span-6 lg:col-span-7",
  rightCol = "md:col-span-6 lg:col-span-5",
}) => {
  const HeroBackground = (
    <>
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      <div className={`absolute inset-0 ${overlayClass} z-0`} />
    </>
  );

  return (
    <SectionWrapper isHero={true} backgroundContent={HeroBackground}>
      {/* Reduced py-2 to eliminate unnecessary vertical padding */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
        <Stagger
          className={`${leftCol} flex flex-col justify-center min-w-0 w-full overflow-hidden`}
        >
          <StaggerItem className="flex items-center mb-2">
            <span className="w-10 h-px bg-theme-accent-light shrink-0"></span>
            <span className="text-secondary uppercase tracking-[0.2em] text-xs ml-2 font-bold font-mono shrink-0">
              {data.subtitle}
            </span>
          </StaggerItem>

          <StaggerItem className="w-full">
            {/* Reduced from 5rem to 4rem to save vertical space */}
            <h1 className="mb-4 text-theme-heading text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-heading drop-shadow-md">
              {data.title}{" "}
              <span className="inline-block font-medium text-secondary transition-all duration-300">
                {data.highlight}
              </span>
            </h1>
          </StaggerItem>

          {data.field && (
            <StaggerItem className="w-[60%]">
              {/* Reduced from text-2xl to text-lg/xl */}
              <h2 className="text-lg sm:text-xl font-light font-body text-white drop-shadow-md mb-2 border-t-1  py-3 border-b-1 border-yellow-400">
                {data.field}
              </h2>
            </StaggerItem>
          )}

          {data.desc && (
            <StaggerItem className="w-full mb-4">
              <div className="w-12 h-px hidden md:block"></div>
              {/* Tightened line-height and text size */}
              <p className="max-w-xl text-theme-heading font-sans text-sm md:text-base leading-snug break-words">
                {data.desc}
              </p>
            </StaggerItem>
          )}

          {extraLeftContent && (
            <StaggerItem className="w-full mt-5">
              {extraLeftContent}
            </StaggerItem>
          )}
        </Stagger>

        <div
          className={`${rightCol} flex justify-center md:justify-center items-end w-full min-w-0 h-full`}
        >
          {rightContent}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PageHero;
