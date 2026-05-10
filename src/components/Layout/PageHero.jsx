// components/features/beamline/PageHero.jsx
import SectionWrapper from "../../components/Layout/SectionWrapper";
import { Stagger, StaggerItem } from "../../components/Layout/AnimatedWrapper";

const PageHero = ({
  data,
  bgImage,
  rightContent,
  extraLeftContent,
  overlayClass = "bg-theme-black/70",
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
      <div className={`absolute inset-0 ${overlayClass} z-0`} />
    </>
  );

  return (
    <SectionWrapper isHero={true} backgroundContent={HeroBackground}>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        <Stagger
          className={`${leftCol} flex flex-col justify-center min-w-0 w-full overflow-hidden`}
        >
          <StaggerItem className="flex items-center mb-2">
            <span className="w-8 h-px bg-theme-accent shrink-0"></span>
            <span className="text-secondary uppercase tracking-[0.2em] text-xs  ml-2 font-bold font-mono shrink-0">
              {data.subtitle}
            </span>
          </StaggerItem>

          <StaggerItem className="w-full">
            <h1 className="mb-2 text-white text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
              {data.title}{" "}
              <span className="inline-block font-semibold text-secondary transition-all duration-300 hover:text-theme-accent-light">
                {data.highlight}
              </span>
            </h1>
          </StaggerItem>

          {/* Conditionally render desc */}
          {data.desc && (
            <StaggerItem className="w-full">
              <p className="mt-4 max-w-xl text-gray-400 border-l-4 border-theme-accent-light pl-4 md:pl-6 md:text-base leading-relaxed break-words">
                {data.desc}
              </p>
            </StaggerItem>
          )}

          {extraLeftContent && (
            <StaggerItem className="w-full">{extraLeftContent}</StaggerItem>
          )}
        </Stagger>

        <div
          className={`${rightCol} flex justify-center md:justify-end items-center w-full min-w-0`}
        >
          {rightContent}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PageHero;
