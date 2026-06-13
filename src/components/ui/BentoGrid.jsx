import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import { beamlineData } from "../../constants/beamlineData";

export default function BentoGrid() {
  const heroGridImages = [
    {
      url: beamlineData[0].instruments[0].instImg,
      size: "col-span-2 row-span-2",
    },
    {
      url: beamlineData[0].instruments[1].instImg,
      size: "col-span-1 row-span-1",
    },
    {
      url: beamlineData[1].instruments[0].instImg,
      size: "col-span-1 row-span-1",
    },
    {
      url: beamlineData[3].instruments[0].instImg,
      size: "col-span-1 row-span-1",
    },
    {
      url: beamlineData[2].instruments[0].instImg,
      size: "col-span-2 row-span-1",
    },
  ];

  return (
    <div className="lg:col-span-7 grid grid-cols-3 grid-rows-3 gap-5 h-[500px]">
      {heroGridImages.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: idx * 0.1 }}
          className={`${item.size} relative group overflow-hidden rounded-xl shadow-2xl`}
        >
          <div className="absolute inset-0 bg-theme-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img
            src={item.url}
            alt={`Instrument ${idx}`}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
          />
        </motion.div>
      ))}
    </div>
  );
}
