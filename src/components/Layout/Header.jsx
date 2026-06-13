import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";
import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research-expertise" },
  { name: "Publications", path: "/publications" },
  { name: "Beamlines", path: "/beamlines" },
  { name: "Collaborators", path: "/collaborators" },
  { name: "About Me", path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItemsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateLinePosition = () => {
      const activeMenuElement = navItemsRef.current[location.pathname];

      if (activeMenuElement && window.innerWidth >= 1280) {
        const { offsetLeft, offsetWidth } = activeMenuElement;
        setLineStyle({ left: offsetLeft, width: offsetWidth });
      } else {
        setLineStyle({ width: 0, left: 0 });
      }
    };

    updateLinePosition();

    window.addEventListener("resize", updateLinePosition);
    return () => window.removeEventListener("resize", updateLinePosition);
  }, [location.pathname, isMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
  }, [isMobileOpen]);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className={`fixed top-0 w-full px-8 md:px-16 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-theme-black backdrop-blur-md shadow-lg"
          : "py-6 bg-transparent backdrop-blur-md shadow-lg"
      }`}
    >
      <motion.div
        variants={fadeUpVariant}
        className="flex justify-between items-center max-w-7xl mx-auto w-full"
      >
        <Link
          to="/"
          className="font-heading font-bold text-fluid-p tracking-[0.15em] text-theme-heading relative z-[60]"
        >
          A. K. <span className="text-secondary">JANA</span>
        </Link>
        <nav className="hidden xl:flex gap-10 relative">
          <div
            className="absolute bottom-[-8px] h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />

          {pageLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => (navItemsRef.current[link.path] = el)}
              className={`text-fluid-p font-mono uppercase tracking-widest transition-all duration-300 
    ${
      location.pathname === link.path
        ? "text-secondary" // Active: Show gradient
        : "text-theme-neutral-light hover:text-theme-accent-light" // Inactive: Show solid color, gradient ONLY on hover
    }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="xl:hidden flex flex-col gap-1.5 relative z-[60] p-2 focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </motion.div>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-40 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-[100dvh] w-64 sm:w-80 bg-black/80 border-l border-black/80 shadow-2xl flex flex-col justify-start pt-32 px-10 gap-8 transition-transform duration-500 ease-in-out xl:hidden z-50 overflow-y-auto ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {pageLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileOpen(false)}
            className={`text-sm sm:text-base font-medium uppercase tracking-widest transition-all duration-300 ${
              location.pathname === link.path
                ? "text-yellow-400 translate-x-2"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
