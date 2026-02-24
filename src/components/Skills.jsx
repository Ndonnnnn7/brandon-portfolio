import React, { useRef, useCallback } from "react";
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";

// OPTIMASI: Menghapus filter blur untuk mencegah frame drop di HP
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const BlueprintBar = ({ pct, color, delay = 0.18 }) => (
  <div className="relative w-full h-[7px] mt-2 overflow-hidden rounded-full transform-gpu">
    <div className="absolute inset-0 bg-[rgba(255,255,255,0.03)] border border-[rgba(214,178,94,0.14)] rounded-full" />
    <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(214,178,94,0.20)_1px,transparent_1px)] bg-[size:10px_100%]" />
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay }}
      className="absolute left-0 top-0 bottom-0 rounded-full"
      style={{ background: color, boxShadow: `0 0 18px ${color}55` }}
    />
    <div className="absolute inset-0 pointer-events-none opacity-[0.4] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
  </div>
);

const TechSquares = ({ level, color }) => (
  <div className="flex gap-1.5 mt-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 transition-all duration-500 md:group-hover:scale-110"
        style={{
          backgroundColor: i <= level ? color : "transparent",
          border: i <= level ? "none" : "1px solid rgba(214,178,94,0.22)",
          boxShadow: i <= level ? `0 0 10px ${color}55` : "none",
        }}
      />
    ))}
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  const onCardMove = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  }, []);

  const onCardLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }, []);

  return (
    <>
      <section
        id="skills"
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-transparent pt-24 pb-20 md:pt-32 md:pb-24"
      >
        <div className="grid-overlay" />

        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-[8%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-40 select-none transform-gpu"
        >
          <span className="f-display text-[clamp(7rem,22vw,22rem)] font-bold italic outline leading-none whitespace-nowrap">
            TOOLKIT
          </span>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12">
          <FadeUp>
            <motion.div style={{ y: headY }} className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[var(--metal)] opacity-80" />
                  <span className="f-mono text-[0.62rem] tracking-[0.32em] uppercase text-[var(--metal)]">
                    Vol. 03 — Arsenal
                  </span>
                </div>
                <h2 className="f-display text-[clamp(3.5rem,7vw,6.5rem)] font-light italic leading-[0.92] tracking-tight text-[var(--bone)] mb-2">
                  Instruments of
                </h2>
                <h2
                  className="f-sans text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]"
                  style={{ color: "transparent", WebkitTextStroke: "1.2px rgba(214,178,94,0.55)" }}
                >
                  Creation.
                </h2>
              </div>
              <div className="lg:max-w-xs border-l-2 border-[rgba(214,178,94,0.55)] pl-6 py-2 text-[rgba(154,148,138,0.92)] md:hover:border-[var(--metal)] transition-colors duration-500">
                <p className="f-sans text-xs md:text-sm leading-[1.85]">
                  A curated set of tools I use to craft systems, interfaces, and production-ready experiences.
                </p>
              </div>
            </motion.div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            
            {/* Figma Card - Desktop UI Enhancements */}
            <FadeUp delay={0.1} className="md:col-span-12 lg:col-span-7">
              <div 
                className="card h-full p-8 md:p-12 group min-h-[380px] md:transition-all md:duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_-15px_rgba(255,107,107,0.15)] md:hover:border-[rgba(255,107,107,0.3)] relative overflow-hidden" 
                onMouseMove={onCardMove} 
                onMouseLeave={onCardLeave}
              >
                <div className="topline" />
                <div className="screw" style={{ top: 12, left: 12 }} />
                <div className="screw" style={{ top: 12, right: 12 }} />
                <div className="absolute -right-16 -top-16 opacity-[0.05] md:group-hover:opacity-[0.12] md:group-hover:scale-110 md:group-hover:-rotate-6 transition-all duration-700 pointer-events-none z-0">
                  <FaFigma className="w-72 h-72 text-[#ff6b6b] p-12" />
                </div>
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="w-16 h-16 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[18px] flex items-center justify-center shadow-2xl md:group-hover:bg-[rgba(255,107,107,0.1)] md:group-hover:border-[rgba(255,107,107,0.3)] transition-all duration-500">
                    <FaFigma className="w-7 h-7 text-[#ff6b6b]" />
                  </div>
                  <span className="f-mono text-[0.58rem] tracking-[0.22em] text-[rgba(154,148,138,0.92)] uppercase border border-[rgba(214,178,94,0.16)] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.02)] md:group-hover:border-[rgba(255,107,107,0.3)] md:group-hover:text-[#ff6b6b] transition-all duration-500">
                    01 / Primary
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="f-display text-4xl md:text-5xl font-semibold italic text-[var(--bone)] mb-4 leading-none">Figma</h3>
                  <p className="f-sans text-xs leading-relaxed max-w-sm mb-10 text-[rgba(244,240,232,0.85)]">My core environment for architecting UI systems, component libraries, and prototypes.</p>
                  <div className="space-y-6 max-w-md">
                    {[{ label: "UI/UX System Design", pct: 95, color: "#ff6b6b", lvl: 5 }, { label: "Interactive Prototyping", pct: 88, color: "var(--metal)", lvl: 4 }].map((m, i) => (
                      <div key={m.label} className="group/item">
                        <div className="flex justify-between items-end mb-1">
                          <div className="flex flex-col gap-1">
                            <span className="f-mono text-[0.56rem] tracking-[0.22em] uppercase md:group-hover/item:text-[var(--bone)] transition-colors">
                              {m.label}
                            </span>
                            <TechSquares level={m.lvl} color={m.color} />
                          </div>
                          <span className="f-mono text-[0.56rem] tracking-[0.22em]" style={{ color: m.color }}>{m.pct}%</span>
                        </div>
                        <BlueprintBar pct={m.pct} color={m.color} delay={0.25 + i * 0.15} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* React Card - Desktop UI Enhancements */}
            <FadeUp delay={0.2} className="md:col-span-12 lg:col-span-5">
              <div 
                className="card h-full p-8 md:p-10 group min-h-[380px] md:transition-all md:duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_-15px_rgba(53,208,255,0.15)] md:hover:border-[rgba(53,208,255,0.3)] relative overflow-hidden" 
                onMouseMove={onCardMove} 
                onMouseLeave={onCardLeave}
              >
                <div className="topline" />
                <div className="screw" style={{ top: 12, left: 12 }} />
                <div className="screw" style={{ top: 12, right: 12 }} />
                <FaReact className="absolute -bottom-10 -right-10 w-64 h-64 text-[#35d0ff] opacity-[0.05] md:group-hover:opacity-[0.12] transition-all duration-700 md:group-hover:rotate-12 md:group-hover:scale-110 z-0" />
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="flex -space-x-3 md:group-hover:space-x-1 transition-all duration-500">
                    <div className="w-12 h-12 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[16px] flex items-center justify-center shadow-xl relative z-20 md:group-hover:bg-[rgba(53,208,255,0.1)] md:group-hover:border-[rgba(53,208,255,0.3)] transition-colors duration-500">
                      <FaReact className="w-6 h-6 text-[#35d0ff]" />
                    </div>
                    <div className="w-12 h-12 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[16px] flex items-center justify-center shadow-xl relative z-10 md:group-hover:bg-[rgba(255,255,255,0.05)] md:group-hover:border-[rgba(255,255,255,0.2)] transition-colors duration-500">
                      <SiNextdotjs className="w-5 h-5 text-[var(--bone)]" />
                    </div>
                  </div>
                  <span className="f-mono text-[0.58rem] tracking-[0.22em] text-[rgba(154,148,138,0.92)] uppercase border border-[rgba(214,178,94,0.16)] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.02)] md:group-hover:border-[rgba(53,208,255,0.3)] md:group-hover:text-[#35d0ff] transition-all duration-500">
                    02 / Engine
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="f-display text-3xl md:text-4xl font-semibold italic text-[var(--bone)] mb-4 leading-none">React Eco</h3>
                  <p className="f-sans text-xs leading-relaxed mb-8 text-[rgba(244,240,232,0.85)]">Building scalable, performant apps with modern patterns and Next.js framework.</p>
                  <div className="space-y-6">
                    <div className="group/item">
                      <div className="flex justify-between items-end mb-1">
                        <div className="flex flex-col gap-1">
                          <span className="f-mono text-[0.56rem] tracking-[0.22em] uppercase md:group-hover/item:text-[var(--bone)] transition-colors">
                            React.js / Next.js
                          </span>
                          <TechSquares level={5} color="#35d0ff" />
                        </div>
                        <span className="f-mono text-[0.56rem] tracking-[0.22em] text-[#35d0ff]">92%</span>
                      </div>
                      <BlueprintBar pct={92} color="#35d0ff" delay={0.35} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Tool Grid - Desktop UI Enhancements */}
            <FadeUp delay={0.3} className="md:col-span-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
                {[
                  { id: "03", icon: FaJs, name: "JavaScript", type: "Logic", color: "#F7DF1E" }, 
                  { id: "04", icon: SiTailwindcss, name: "Tailwind", type: "Styling", color: "#14b8a6" }, 
                  { id: "05", icon: FaHtml5, name: "HTML", type: "Markup", color: "#E34F26" }, 
                  { id: "06", icon: FaGitAlt, name: "Git", type: "Version", color: "#F05032" }
                ].map((it) => (
                  <div 
                    key={it.id} 
                    className="card p-6 flex flex-col items-center justify-center text-center group min-h-[180px] md:transition-all md:duration-500 md:hover:-translate-y-1.5 md:hover:shadow-[0_15px_30px_-10px_rgba(214,178,94,0.1)] md:hover:border-[rgba(214,178,94,0.25)] relative overflow-hidden" 
                    onMouseMove={onCardMove} 
                    onMouseLeave={onCardLeave}
                  >
                    <div className="topline md:group-hover:bg-[rgba(214,178,94,0.4)] transition-colors" />
                    <div className="screw" style={{ top: 12, left: 12 }} />
                    <span className="absolute top-8 left-4 f-mono text-[0.52rem] tracking-[0.22em] opacity-70 md:group-hover:opacity-100 md:group-hover:text-[var(--metal)] transition-colors">{it.id}</span>
                    <div 
                      className="w-14 h-14 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[18px] flex items-center justify-center mb-5 md:group-hover:scale-110 md:group-hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 relative z-10"
                      style={{ borderColor: `var(--hover-color, rgba(214,178,94,0.18))` }}
                    >
                      <it.icon className="w-6 h-6 opacity-90" style={{ color: it.color }} />
                    </div>
                    <h4 className="f-display text-xl italic text-[var(--bone)] mb-1 relative z-10">{it.name}</h4>
                    <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase relative z-10 text-[rgba(154,148,138,0.8)] md:group-hover:text-[var(--metal)] transition-colors">{it.type}</span>
                    
                    {/* Subtle background glow on desktop hover */}
                    <div 
                      className="absolute inset-0 opacity-0 md:group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none z-0"
                      style={{ background: `radial-gradient(circle at center, ${it.color} 0%, transparent 70%)` }}
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;