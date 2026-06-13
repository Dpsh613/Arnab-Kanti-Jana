// components/Layout/PageHero.jsx
import SectionWrapper from "../Layout/SectionWrapper";
import { Stagger, StaggerItem } from "../../components/Layout/AnimatedWrapper";

const PageHero = ({
  data,
  bgImage,
  rightContent,
  extraLeftContent,
  leftCol = "md:col-span-6 lg:col-span-7",
  rightCol = "md:col-span-6 lg:col-span-5",
}) => {
  const HeroBackground = (
    <>
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
    </>
  );

  return (
    <SectionWrapper isHero={true} backgroundContent={HeroBackground}>
      {/* Reduced py-2 to eliminate unnecessary vertical padding */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center relative z-10">
        <Stagger
          className={`${leftCol} flex flex-col justify-center min-w-0 w-full overflow-hidden`}
        >
          <StaggerItem className="flex items-center mb-1">
            <span className="w-6 h-px bg-theme-accent shrink-0"></span>
            <span className="text-secondary uppercase tracking-[0.2em] text-xs ml-2 font-bold font-mono shrink-0">
              {data.subtitle}
            </span>
          </StaggerItem>

          <StaggerItem className="w-full">
            {/* Reduced from 5rem to 4rem to save vertical space */}
            <h1 className="mb-4 text-gray-300 text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-heading drop-shadow-md">
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
            <StaggerItem className="w-full">
              <div className="w-12 h-px bg-secondary/40 my-2 hidden md:block"></div>
              {/* Tightened line-height and text size */}
              <p className="max-w-xl text-[#d1d5db] font-sans text-sm md:text-base leading-snug break-words">
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
          className={`${rightCol} flex justify-center md:justify-end items-end w-full min-w-0 h-full`}
        >
          {rightContent}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PageHero;
