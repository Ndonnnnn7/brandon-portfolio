import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: 1, link: "home", label: "Home", index: "01" },
  { id: 2, link: "about", label: "About", index: "02" },
  { id: 3, link: "skills", label: "Skills", index: "03" },
  { id: 4, link: "projects", label: "Projects", index: "04" },
  { id: 5, link: "achievements", label: "Honors", index: "05" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── SCROLL TRACKING ─────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 150;

      NAV_LINKS.forEach(({ link }) => {
        const el = document.getElementById(link);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(link);
        }
      });

      const contactEl = document.getElementById("contact");
      if (
        contactEl &&
        scrollPos >= contactEl.offsetTop &&
        scrollPos < contactEl.offsetTop + contactEl.offsetHeight + 500
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── NAV CLICK ───────────────────────────────────────────────────────── */
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setNav(false); 
    setActiveSection(link);

    const el = document.getElementById(link);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  return (
    <>
      {/* ── DESKTOP & MOBILE HEADER BAR ── */}
      <Motion.nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 border-b-2 ${
          scrolled || nav
            ? "bg-[#F1EFE7]/95 border-black/10 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-[#050505]/95 dark:border-white/10 dark:shadow-none"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full flex items-center justify-between">
          
          <div className="flex items-center gap-4 cursor-pointer" onClick={(e) => handleNavClick(e, "home")}>
            <div className="w-8 h-8 bg-[#050505] dark:bg-white flex items-center justify-center transition-colors duration-500">
              <span className="font-black text-white dark:text-black text-xl leading-none">B</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-lg uppercase leading-none tracking-tighter text-[#050505] dark:text-white">Brandon</span>
              <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#FF3355] dark:text-[#CCFF00]">Profile</span>
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map(({ id, link, label, index }) => {
              const isActive = activeSection === link;
              return (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative flex items-center gap-3 px-4 py-2 border-2 transition-all duration-300 font-mono text-[10px] uppercase tracking-widest font-bold ${
                      isActive 
                        ? "bg-[#CCFF00] border-[#CCFF00] text-black" 
                        : "bg-transparent border-transparent text-black/50 dark:text-white/50"
                    }`}
                  >
                    <span className={isActive ? "text-black/50" : "text-black/30 transition-colors dark:text-white/30"}>{index}</span>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={`hidden lg:flex items-center gap-3 border-2 px-6 py-2 transition-colors duration-300 ${
                activeSection === "contact"
                  ? "bg-[#FF3355] border-[#FF3355] text-black"
                  : "border-black text-black dark:border-white dark:text-white"
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Contact Me</span>
              <span className="transform -rotate-45 font-mono text-xs">→</span>
            </a>

            <button
              onClick={() => setNav(!nav)}
              className={`lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 border-2 items-center z-[70] relative transition-colors ${
                nav ? "border-[#CCFF00] bg-transparent" : "border-black/20 bg-white dark:border-white/20 dark:bg-[#0A0A0A]"
              }`}
              aria-label="Toggle Menu"
            >
              <Motion.span 
                animate={{ rotate: nav ? 45 : 0, y: nav ? 8 : 0 }} 
                className={`w-5 h-[2px] block origin-center transition-transform ${nav ? "bg-[#CCFF00]" : "bg-black dark:bg-white"}`} 
              />
              <Motion.span 
                animate={{ opacity: nav ? 0 : 1 }} 
                className="w-5 h-[2px] bg-black dark:bg-white block transition-opacity" 
              />
              <Motion.span 
                animate={{ rotate: nav ? -45 : 0, y: nav ? -8 : 0 }} 
                className={`w-5 h-[2px] block origin-center transition-transform ${nav ? "bg-[#CCFF00]" : "bg-black dark:bg-white"}`}
              />
            </button>
          </div>

        </div>
      </Motion.nav>

      {/* ── FULLSCREEN SYSTEM OVERRIDE MENU (Mobile/Tablet) ── */}
      <AnimatePresence>
        {nav && (
          <Motion.div
            key="mobile-menu"
            id="mobile-menu" /* <── TAMBAHKAN ID INI AGAR KURSOR BISA MENDETEKSI MENU */
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-[#F1EFE7] text-[#050505] dark:bg-[#050505] dark:text-white flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden border-b-8 border-[#CCFF00] transition-colors duration-500"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-10 z-0"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            <div className="absolute top-1/2 left-4 w-4 h-[1px] bg-black/30 dark:bg-white/30 z-0" />
            <div className="absolute top-1/2 right-4 w-4 h-[1px] bg-black/30 dark:bg-white/30 z-0" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none opacity-[0.03]">
              <span className="text-[30vw] font-black italic tracking-tighter uppercase leading-none">SYS</span>
            </div>

            <ul className="flex flex-col gap-2 relative z-10 mt-8">
              {NAV_LINKS.map(({ id, link, label, index }, i) => {
                const isActive = activeSection === link;
                return (
                  <Motion.li 
                    key={id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <a
                      href={`#${link}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className="flex items-end gap-6 py-4 border-b-2 border-black/10 dark:border-white/5 transition-colors"
                    >
                      <span className="font-mono text-sm md:text-base text-[#CCFF00] mb-2 md:mb-3">
                        {index}
                      </span>
                      <span className={`text-[clamp(3rem,10vw,6rem)] font-black uppercase tracking-tighter leading-none transition-colors ${
                        isActive ? "text-black dark:text-white" : "text-black/30 dark:text-white/30"
                      }`}>
                        {label}
                      </span>
                    </a>
                  </Motion.li>
                );
              })}
            </ul>

            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative z-10 flex flex-col gap-8 mt-12"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full bg-[#CCFF00] text-black font-black text-2xl uppercase tracking-tighter py-6 text-center transition-colors"
              >
                CONTACT ME →
              </a>

              <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-white/40">
                <span>STATUS: ONLINE</span>
                <span>LAT: -7.98 // LNG: 112.62</span>
              </div>
            </Motion.div>

          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
