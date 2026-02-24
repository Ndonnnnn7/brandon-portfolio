import { ArrowUp, Sparkle, MapPin, Clock3 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // OPTIMASI: Menggunakan window.scrollY yang lebih modern daripada pageYOffset
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      <footer className="relative w-full pt-16 pb-10 text-[var(--bone)] overflow-hidden ft-bg ft-grain">
        {/* Background layers */}
        <div className="ft-blueprint" />
        <div className="ft-topo" />
        <div className="ft-vignette" />

        {/* Watermark */}
        <div className="absolute -top-6 left-0 right-0 z-0 pointer-events-none flex justify-center select-none transform-gpu">
          <span className="f-display ft-outline text-[clamp(5rem,18vw,16rem)] font-bold italic leading-none opacity-[0.45] md:opacity-[0.55]">
            FOOTER
          </span>
        </div>

        {/* subtle top runner line (not neon) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px transform-gpu"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(214,178,94,0.55), rgba(20,184,166,0.18), transparent)",
          }}
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Back to top — UI Desktop Enhanced */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 z-50 group"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.9,
            y: isVisible ? 0 : 10,
            pointerEvents: isVisible ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <div className="ft-card rounded-full px-4 py-3 flex items-center gap-3 md:group-hover:border-[rgba(214,178,94,0.5)] md:group-hover:bg-[rgba(20,20,22,0.95)] md:group-hover:shadow-[0_0_20px_rgba(214,178,94,0.15)] transition-all duration-300">
            <div className="ft-sheen" />
            <div className="w-9 h-9 rounded-full border border-[rgba(214,178,94,0.28)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center md:group-hover:bg-[rgba(214,178,94,0.1)] transition-colors duration-300">
              <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 1.1, repeat: Infinity }}>
                <ArrowUp className="w-4 h-4 text-[var(--bone)] md:group-hover:text-[var(--metal2)] transition-colors duration-300" />
              </motion.div>
            </div>
            <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.85)] hidden sm:block md:group-hover:text-[var(--metal2)] transition-colors duration-300">
              Back to top
            </span>
          </div>
        </motion.button>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main card - OPTIMASI: Hapus filter blur */}
          <motion.div
            className="ft-card p-7 md:p-10 relative overflow-hidden md:transition-all md:duration-500 md:hover:shadow-[0_20px_40px_-15px_rgba(214,178,94,0.08)] md:hover:border-[rgba(214,178,94,0.25)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ft-sheen" />
            <span className="ft-screw" style={{ top: 14, left: 14 }} />
            <span className="ft-screw" style={{ top: 14, right: 14 }} />
            <span className="ft-screw" style={{ bottom: 14, left: 14 }} />
            <span className="ft-screw" style={{ bottom: 14, right: 14 }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Brand */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-[var(--metal)] opacity-80" />
                  <span className="f-mono text-[0.58rem] tracking-[0.32em] uppercase text-[var(--metal)]">
                    Index / 05 — Closing Notes
                  </span>
                </div>

                <h2 className="f-display text-3xl md:text-4xl font-semibold italic leading-[1.05]">
                  Brandon{" "}
                  <span className="not-italic f-sans font-extrabold tracking-[-0.03em] text-[var(--metal2)]">
                    Geraldo
                  </span>
                  .
                </h2>

                <p className="f-sans text-sm md:text-[0.95rem] text-[rgba(244,240,232,0.72)] leading-relaxed mt-4 max-w-lg">
                  A front-end builder with a designer’s eye, shipping interfaces that feel{" "}
                  <span className="text-[var(--bone)] font-semibold">intentional</span>,{" "}
                  <span className="text-[var(--bone)] font-semibold">fast</span>, and{" "}
                  <span className="text-[var(--bone)] font-semibold">alive</span>.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="ft-chip px-4 py-2 f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[rgba(244,240,232,0.8)] inline-flex items-center gap-2 md:hover:bg-[rgba(214,178,94,0.1)] md:hover:text-[var(--metal)] transition-colors duration-300 cursor-default">
                    <MapPin className="w-3.5 h-3.5 text-[var(--metal)]" />
                    Malang, Indonesia
                  </span>

                  <span className="ft-chip px-4 py-2 f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[rgba(244,240,232,0.8)] inline-flex items-center gap-2 md:hover:bg-[rgba(124,58,237,0.15)] md:hover:text-[var(--haze)] transition-colors duration-300 cursor-default">
                    <Clock3 className="w-3.5 h-3.5 text-[var(--haze)]" />
                    <span suppressHydrationWarning>
                      {time.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        timeZone: "Asia/Jakarta",
                      })}
                    </span>
                  </span>

                  <motion.span
                    className="ft-chip px-4 py-2 f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[rgba(244,240,232,0.8)] inline-flex items-center gap-2 md:hover:border-[#3DDC84]/40 md:hover:bg-[#3DDC84]/10 transition-colors duration-300 cursor-default"
                    whileHover={{ y: -1 }}
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full bg-[#3DDC84]"
                      animate={{ scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Open to opportunities
                  </motion.span>
                </div>
              </div>

              {/* Meta / Credits */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Credits card - UI Desktop Enhanced */}
                  <div className="ft-card p-6 md:p-7 md:transition-all md:duration-500 md:hover:-translate-y-1 md:hover:border-[rgba(214,178,94,0.3)] md:hover:bg-[rgba(255,255,255,0.015)] group">
                    <div className="ft-sheen" />
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkle className="w-4 h-4 text-[var(--metal)] md:group-hover:animate-spin-slow" />
                      <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.85)] md:group-hover:text-[var(--metal)] transition-colors">
                        Craft Notes
                      </span>
                    </div>

                    <p className="f-sans text-sm text-[rgba(244,240,232,0.72)] leading-relaxed">
                      Designed in{" "}
                      <span className="text-[var(--bone)] font-semibold md:group-hover:text-[#ff6b6b] transition-colors">Figma</span>, coded in{" "}
                      <span className="text-[var(--bone)] font-semibold md:group-hover:text-[#35d0ff] transition-colors">VS Code</span>. Built with{" "}
                      <span className="text-[var(--haze)] font-semibold">React</span> &{" "}
                      <span className="text-[#14b8a6] font-semibold">Tailwind</span>.
                    </p>

                    <div className="mt-5 h-px bg-gradient-to-r from-[rgba(214,178,94,0.35)] to-transparent md:group-hover:from-[rgba(214,178,94,0.7)] transition-colors duration-500" />
                    <p className="mt-4 f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                      minimal · brutal · editorial
                    </p>
                  </div>

                  {/* Copyright card - UI Desktop Enhanced */}
                  <div className="ft-card p-6 md:p-7 md:transition-all md:duration-500 md:hover:-translate-y-1 md:hover:border-[rgba(214,178,94,0.3)] md:hover:bg-[rgba(255,255,255,0.015)] group">
                    <div className="ft-sheen" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-[var(--rust)] rounded-full opacity-80 md:group-hover:scale-150 transition-transform duration-500" />
                      <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.85)] md:group-hover:text-[var(--rust)] transition-colors">
                        Legal
                      </span>
                    </div>

                    <p className="f-sans text-sm text-[rgba(244,240,232,0.72)] leading-relaxed">
                      © {new Date().getFullYear()} Brandon Geraldo. All rights reserved.
                    </p>

                    <div className="mt-5 h-px bg-gradient-to-r from-[rgba(214,178,94,0.35)] to-transparent md:group-hover:from-[rgba(214,178,94,0.7)] transition-colors duration-500" />
                    <p className="mt-4 f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                      built to last
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* thin baseline accent */}
          <motion.div
            className="mt-10 h-px w-full md:hover:h-[2px] transition-all duration-300 transform-gpu"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(214,178,94,0.45), rgba(124,58,237,0.12), transparent)",
            }}
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* micro footer note */}
          <div className="mt-6 flex items-center justify-between flex-col md:flex-row gap-4 text-[rgba(154,148,138,0.95)]">
            <span className="f-mono text-[0.55rem] tracking-[0.28em] uppercase md:hover:text-[var(--metal)] transition-colors cursor-default">
              END / TRANSMISSION
            </span>
            <span className="f-mono text-[0.55rem] tracking-[0.28em] uppercase md:hover:text-[var(--metal)] transition-colors cursor-default">
              Thanks for scrolling.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;