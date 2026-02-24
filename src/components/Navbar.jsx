import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);

  const cardRef = useRef(null);

  const links = [
    { id: 1, link: "home", label: "Home", index: "01" },
    { id: 2, link: "about", label: "About", index: "02" },
    { id: 3, link: "skills", label: "Skills", index: "03" },
    { id: 4, link: "projects", label: "Projects", index: "04" },
    { id: 5, link: "achievements", label: "Achievements", index: "05" },
  ];

  /* ── 3D micro-tilt ───────────────────────────────────────── */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  const rX = useTransform(sy, [0, 1], [1.5, -1.5]);
  const rY = useTransform(sx, [0, 1], [-1.5, 1.5]);
  const glareX = useTransform(sx, [0, 1], [-10, 110]);
  const glareY = useTransform(sy, [0, 1], [-10, 110]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55) 0%, transparent 55%)`;

  const onMove = useCallback(
    (e) => {
      if (window.innerWidth < 768) return; 
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [mx, my]
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  /* ── SCROLL TRACKING ─────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 120;

      links.forEach(({ link }) => {
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
        scrollPos < contactEl.offsetTop + contactEl.offsetHeight
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── NAV CLICK ───────────────────────────────────────────────────────── */
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setNav(false);
    setActiveSection(link);

    const el = document.getElementById(link);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  return (
    <>
      <BackgroundAnimation />

      {/* ✅ PERBAIKAN: Gunakan AnimatePresence untuk menghilangkan Navbar saat 'nav' (drawer) true */}
      <AnimatePresence>
        {!nav && (
          <motion.nav
            key="main-navbar"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }} // ✅ Efek menghilang ke atas saat menu samping dibuka
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="transform-gpu"
            style={{
              position: "fixed",
              top: scrolled ? 12 : 20,
              left: 0,
              right: 0,
              margin: "0 auto",
              zIndex: 50,
              width: scrolled ? "min(92%, 980px)" : "min(96%, 1080px)",
              transition:
                "width .45s cubic-bezier(.22,1,.36,1), top .45s cubic-bezier(.22,1,.36,1)",
              perspective: 1000,
            }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className={`navArtifact navGrain ${scrolled ? 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] md:shadow-[0_15px_40px_-15px_rgba(214,178,94,0.15)]' : 'shadow-none'} transition-shadow duration-500 transform-gpu`}
              style={{
                rotateX: rX,
                rotateY: rY,
                transformStyle: "preserve-3d",
                padding: scrolled ? "10px 24px" : "14px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 18,
              }}
            >
              <div className="navTexture" />
              <div className="navTopo" />
              <div className="sheen" />

              {/* Glare */}
              <motion.div
                className="hidden md:block transform-gpu"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  pointerEvents: "none",
                  opacity: scrolled ? 0.28 : 0.22,
                  mixBlendMode: "overlay",
                  background: glareBackground,
                }}
              />
              
              <motion.button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                }}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="group outline-none"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span
                  className="md:group-hover:bg-[#ff6b6b] transition-colors duration-300"
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    background: "var(--metal)",
                    marginBottom: 2,
                    boxShadow: "0 0 14px rgba(214,178,94,0.25)",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="f-display"
                  style={{
                    color: "var(--bone)",
                    fontSize: scrolled ? 20 : 24,
                    fontWeight: 600,
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    transition: "font-size .35s",
                  }}
                >
                  My
                </span>
                <span
                  className="f-display md:group-hover:text-[var(--bone)] transition-colors duration-300"
                  style={{
                    color: "var(--metal2)",
                    fontSize: scrolled ? 20 : 24,
                    fontWeight: 350,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    transition: "font-size .35s, color .3s",
                  }}
                >
                  Portfolio
                </span>
              </motion.button>
              
              <ul
                className="mdFlex"
                style={{
                  alignItems: "center",
                  gap: 2,
                  listStyle: "none",
                  margin: 0,
                  padding: "2px 4px",
                  position: "relative",
                  zIndex: 2,
                  background: scrolled ? "rgba(255,255,255,0.02)" : "transparent",
                  borderRadius: 999,
                  border: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
                  transition: "all .4s ease",
                }}
              >
                {links.map(({ id, link, label, index }) => {
                  const isActive = activeSection === link;
                  const isHovered = hoveredLink === link;

                  return (
                    <li key={id} style={{ position: "relative" }}>
                      <a
                        href={`#${link}`}
                        onClick={(e) => handleNavClick(e, link)}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`navLink f-mono ${isActive ? "active" : ""}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 14px",
                          borderRadius: 999,
                          textDecoration: "none",
                          color: isActive
                            ? "var(--bone)"
                            : isHovered
                              ? "rgba(244,240,232,0.95)"
                              : "rgba(154,148,138,0.85)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          fontWeight: isActive ? 600 : 500,
                          transition: "all .25s",
                          background: isActive
                            ? "rgba(214,178,94,0.1)"
                            : isHovered
                              ? "rgba(255,255,255,0.04)"
                              : "transparent",
                          border: isActive
                            ? "1px solid rgba(214,178,94,0.25)"
                            : "1px solid transparent",
                          transform: isHovered && !isActive
                            ? "translateY(-1px)"
                            : "translateY(0)",
                          position: "relative",
                        }}
                      >
                        <span
                          className="idx"
                          style={{
                            fontSize: "0.55rem",
                            color: isActive ? "var(--metal2)" : "var(--metal)",
                            fontStyle: "italic",
                            lineHeight: 1,
                            transition: "color .3s",
                          }}
                        >
                          {index}
                        </span>

                        <span style={{ position: "relative" }}>
                          {label}
                          <span className="uLine" />
                        </span>

                        {isActive && (
                          <motion.span
                            layoutId="navDot"
                            style={{
                              position: "absolute",
                              bottom: 4,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "var(--metal)",
                              boxShadow: "0 0 10px rgba(214,178,94,0.8)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 34,
                            }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="ctaPulse mdFlex f-mono relative overflow-hidden group"
                  style={{
                    padding: "9px 18px",
                    borderRadius: 999,
                    background:
                      "linear-gradient(135deg, rgba(214,178,94,0.14), rgba(212,93,58,0.10))",
                    border: "1px solid rgba(214,178,94,0.50)",
                    color: "var(--metal2)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 650,
                    transition:
                      "transform .25s, background .25s, color .25s, border-color .25s",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(214,178,94,0.95), rgba(212,93,58,0.75))";
                    e.currentTarget.style.color = "var(--bg)";
                    e.currentTarget.style.borderColor = "rgba(214,178,94,0.10)";
                    e.currentTarget.style.boxShadow = "0 10px 20px -10px rgba(214,178,94,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(214,178,94,0.14), rgba(212,93,58,0.10))";
                    e.currentTarget.style.color = "var(--metal2)";
                    e.currentTarget.style.borderColor = "rgba(214,178,94,0.50)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Contact / Hire
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path
                      d="M1 5h10M6 1l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <button
                  onClick={() => setNav(!nav)}
                  aria-label="Toggle menu"
                  className="hamOnly md:hover:border-[rgba(214,178,94,0.6)] transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(214,178,94,0.22)",
                    borderRadius: 14,
                    padding: "10px 12px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "flex-end",
                  }}
                >
                  <motion.span
                    animate={{ rotate: nav ? 45 : 0, y: nav ? 8 : 0 }}
                    style={{
                      display: "block",
                      width: 22,
                      height: 1,
                      background: "var(--metal2)",
                      transformOrigin: "center",
                    }}
                  />
                  <motion.span
                    animate={{ opacity: nav ? 0 : 1, width: nav ? 0 : 14 }}
                    style={{
                      display: "block",
                      height: 1,
                      background: "rgba(154,148,138,0.9)",
                    }}
                  />
                  <motion.span
                    animate={{ rotate: nav ? -45 : 0, y: nav ? -8 : 0 }}
                    style={{
                      display: "block",
                      width: 22,
                      height: 1,
                      background: "var(--metal2)",
                      transformOrigin: "center",
                    }}
                  />
                </button>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setNav(false)}
            className="transform-gpu"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(7,7,10,0.85)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 48,
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav && (
          <motion.aside
            key="drawer"
            className="drawerGrain transform-gpu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "min(85vw, 340px)",
              height: "100dvh",
              background:
                "linear-gradient(180deg, rgba(7,7,10,0.98), rgba(7,7,10,0.95))",
              borderLeft: "1px solid rgba(214,178,94,0.22)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 0,
                backgroundImage:
                  "linear-gradient(rgba(214,178,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(214,178,94,0.03) 1px, transparent 1px)",
                backgroundSize: "46px 46px",
                opacity: 0.9,
                maskImage:
                  "radial-gradient(circle at 40% 10%, black 0%, black 55%, transparent 82%)",
                WebkitMaskImage: "radial-gradient(circle at 40% 10%, black 0%, black 55%, transparent 82%)"
              }}
            />
            <div
              className="transform-gpu"
              style={{
                position: "absolute",
                top: -90,
                right: -90,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(214,178,94,0.12), transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 24px",
                borderBottom: "1px solid rgba(214,178,94,0.16)",
              }}
            >
              <div>
                <p
                  className="f-mono"
                  style={{
                    color: "rgba(154,148,138,0.9)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Navigation
                </p>

                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 8 }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      background: "var(--metal)",
                      display: "inline-block",
                      flexShrink: 0,
                      boxShadow: "0 0 12px rgba(214,178,94,0.25)",
                    }}
                  />
                  <span
                    className="f-display"
                    style={{
                      color: "var(--bone)",
                      fontSize: 22,
                      fontWeight: 650,
                      fontStyle: "italic",
                    }}
                  >
                    My
                  </span>
                  <span
                    className="f-display"
                    style={{
                      color: "var(--metal2)",
                      fontSize: 22,
                      fontWeight: 350,
                    }}
                  >
                    Portfolio
                  </span>
                </div>
              </div>

              <button
                onClick={() => setNav(false)}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(214,178,94,0.18)",
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "rgba(154,148,138,0.95)",
                  transition: "border-color .2s, color .2s, background .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(214,178,94,0.50)";
                  e.currentTarget.style.color = "var(--metal2)";
                  e.currentTarget.style.background = "rgba(214,178,94,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(214,178,94,0.18)";
                  e.currentTarget.style.color = "rgba(154,148,138,0.95)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "12px 0",
                flex: 1,
                position: "relative",
                zIndex: 1,
                overflowY: "auto",
              }}
            >
              {links.map(({ id, link, label, index }, i) => {
                const isActive = activeSection === link;

                return (
                  <motion.li
                    key={id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.05 * i + 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={`#${link}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`mLink ${isActive ? "active" : ""}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 24px",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(214,178,94,0.06)",
                        background: isActive
                          ? "rgba(214,178,94,0.08)"
                          : "transparent",
                        transition: "background .25s",
                        position: "relative",
                      }}
                    >
                      <span className="mRail" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                        }}
                      >
                        <span
                          className="f-mono"
                          style={{
                            fontSize: "0.58rem",
                            letterSpacing: "0.18em",
                            fontStyle: "italic",
                            color: isActive
                              ? "var(--metal2)"
                              : "rgba(154,148,138,0.9)",
                            minWidth: 22,
                          }}
                        >
                          {index}
                        </span>
                        <span
                          className="f-display"
                          style={{
                            fontSize: 26,
                            fontWeight: isActive ? 600 : 350,
                            fontStyle: isActive ? "italic" : "normal",
                            color: isActive
                              ? "var(--bone)"
                              : "rgba(154,148,138,0.92)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {label}
                        </span>
                      </div>

                      <motion.div
                        animate={{
                          x: isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0.35,
                        }}
                        style={{
                          color: isActive
                            ? "var(--metal2)"
                            : "rgba(154,148,138,0.9)",
                        }}
                      >
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                        >
                          <path
                            d="M1 6h14M9 1l6 5-6 5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderTop: "1px solid rgba(214,178,94,0.16)",
                padding: "20px 24px 30px 24px",
              }}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="f-mono ctaPulse"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "16px 0",
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, rgba(214,178,94,0.95), rgba(212,93,58,0.75))",
                  color: "var(--bg)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  textDecoration: "none",
                  transition: "opacity .2s, transform .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.92";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact / Hire
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path
                    d="M1 5h10M6 1l5 4-5 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div style={{ marginTop: 16, opacity: 0.55 }}>
                <div
                  className="f-mono"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(154,148,138,0.92)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span>UI/UX</span>
                  <span style={{ color: "var(--rust)" }}>✦</span>
                  <span>Front End</span>
                  <span style={{ color: "var(--rust)" }}>✦</span>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;