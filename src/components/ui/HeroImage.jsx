import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
// Make sure this path is absolutely correct based on your file structure
import heroImage from "../../assets/images/heroImage.jpg";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[460px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-theme-accent/10 blur-3xl" />

      {/* Image */}
      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
          alt=""
          className="w-full h-[620px] object-cover"
        />
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-6 left-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-4">
        <p className="text-secondary font-mono text-sm">Neutron Scattering</p>
        <p className="text-white/70 text-xs">Atomic-scale magnetic analysis</p>
      </div>
    </motion.div>
  );
}
