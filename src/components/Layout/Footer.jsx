import { Link } from "react-router-dom";
import { Microscope, BookOpen, Activity, Users, User } from "lucide-react";

// 1. Array for internal Directory links mapped to your routes
const directoryLinks = [
  { name: "Research", path: "/researchexpertise", icon: Microscope },
  { name: "Publications", path: "/publications", icon: BookOpen },
  { name: "Beamlines", path: "/beamline", icon: Activity },
  { name: "Collaborators", path: "/collaborators", icon: Users },
  { name: "About Me", path: "/about", icon: User },
];

// 2. Array for external Connect links using your custom images
// Note: Ensure the extensions (.png, .svg) match exactly what is in your public/footer folder!
const connectLinks = [
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Arnab-Jana-7?ev=hdr_xprf",
    img: "/footer/ResearchGate.png",
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=nxnCytcAAAAJ&sortby=pubdate&view_op=list_works",
    img: "/footer/GoogleScholar.png",
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0003-9115-5293",
    img: "/footer/Orcid.png",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=akj.chs2014@gmail.com",
    target: "_blank",
    rel: "noreferrer",
    img: "/footer/Gmail.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-theme-black pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-theme-neutral-dark overflow-hidden">
      {/* Top Section - Stack vertically on mobile, side-by-side on medium+ screens */}
      <div className="flex flex-col md:flex-row justify-between border-b border-theme-neutral-dark pb-10 gap-10 md:gap-0">
        {/* Brand/Logo Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-3xl tracking-[0.15em] text-theme-heading mb-3 font-semibold">
            A.K.
            <span className="text-secondary"> JANA</span>
          </h3>
          <p className="text-secondary leading-relaxed max-w-sm font-light">
            Doctoral Researcher
          </p>
        </div>

        {/* Links Wrapper - Stack vertically on extra small screens, side-by-side on small+ screens */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
          {/* Directory Section */}
          <div className="font-body">
            <h5 className="text-secondary uppercase tracking-widest text-sm mb-6 font-medium">
              Directory
            </h5>
            <div className="flex flex-col gap-4">
              {directoryLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center gap-3 text-theme-neutral-muted text-sm hover:text-theme-accent-light transition-all duration-300 group w-fit"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Connect Section */}
          <div className="font-body">
            <h5 className="text-secondary uppercase tracking-widest text-sm mb-6 font-medium">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              {connectLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-theme-neutral-light text-sm hover:text-theme-accent-light transition-all duration-300 group w-fit"
                >
                  {/* Custom Image Wrapper */}
                  <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <img
                      src={link.img}
                      alt={link.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-theme-neutral-light text-xs tracking-wider">
        <p>
          © {new Date().getFullYear()}
          <span className="text-secondary font-medium"> A.K. Jana</span> All
          rights reserved.
        </p>
        <p className="text-left md:text-right font-light text-sm text-theme-neutral-light">
          Built by{" "}
          <span className="text-secondary font-light font-sm">D.S</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
