import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import { useEffect, useState } from "react";
import { pubData } from "../../../constants/publicationsData";
import { motion, AnimatePresence } from "framer-motion";
import AutoSciText from "../../../utils/AutoSciText";
import { MonoLink, SecondaryBorder } from "../../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Publication = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // Set to 7 seconds as requested

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((next) => (next === pubData.length - 1 ? 0 : next + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pubData.length - 1 : prev - 1));
  };

  return (
    <SectionWrapper id="publications">
      <SectionHeader title="Selected Publications" />
      <div className="relative group max-w-6xl mx-auto mb-16 md:mb-24 px-2 md:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-0 border border-theme-accent bg-theme-neutral-dark rounded-sm overflow-hidden items-stretch relative z-10"
          >
            {/* LEFT SIDE CONTENT */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-theme-accent">
              <span className="block text-[12px] font-bold uppercase tracking-[0.3em] text-secondary mb-6">
                {pubData[currentIndex].tag} • {pubData[currentIndex].year}
              </span>
              <h3>
                <AutoSciText text={pubData[currentIndex].title} />
              </h3>
              <div className="my-5 space-y-5 font-light text-theme-neutral-light">
                {pubData[currentIndex].desc.map((para, idx) => (
                  <p key={idx}>
                    • <AutoSciText text={para} />
                  </p>
                ))}
              </div>
              <div>
                <MonoLink
                  href={pubData[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read paper: ${pubData[currentIndex].title}`}
                >
                  Read Paper
                </MonoLink>
              </div>
            </div>

            <div className="bg-theme-black relative flex items-center p-6 justify-center overflow-hidden w-full h-full">
              <img
                src={pubData[currentIndex]?.graph?.summary?.img?.replace(
                  "/upload/",
                  "/upload/f_auto,q_auto,w_1000/",
                )}
                alt={pubData[currentIndex]?.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full max-h-[400px] md:max-h-[550px] object-contain group-hover:scale-95 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-[-5px] md:left-[-60px] top-1/2 -translate-y-1/2 p-2 text-white md:text-theme-neutral bg-theme-black/50 md:bg-transparent rounded-full hover:text-theme-accent transition-colors z-20"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-5px] md:right-[-60px] top-1/2 -translate-y-1/2 p-2 text-white md:text-theme-neutral bg-theme-black/50 md:bg-transparent rounded-full hover:text-theme-accent transition-colors z-20"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      <FadeUp className="flex justify-start md:justify-center">
        <div className="scale-[0.85] md:scale-100 origin-left md:origin-center transition-transform">
          <SecondaryBorder to="/publications">
            View All Publications{" "}
          </SecondaryBorder>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
};

export default Publication;
