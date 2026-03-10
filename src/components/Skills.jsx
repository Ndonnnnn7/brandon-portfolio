import React, { useRef, useCallback } from "react";
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const BlueprintBar = ({ pct, color, delay = 0.18 }) => (
  <div className="relative w-full h-1.5 mt-2 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
    <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_100%]" />
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="absolute left-0 top-0 bottom-0 rounded-full"
      style={{
        background: color,
        boxShadow: `0 0 15px ${color}80, 0 0 5px ${color}`,
      }}
    />
  </div>
);

const TechSquares = ({ level, color }) => (
  <div className="flex gap-1.5 mt-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-sm transition-all duration-500"
        style={{
          backgroundColor: i <= level ? color : "rgba(255,255,255,0.05)",
          boxShadow: i <= level ? `0 0 8px ${color}80` : "none",
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

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  // Spotlight Effect Logic
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#07070a] pt-24 pb-20 md:pt-32 md:pb-32"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-[8%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-40 select-none"
      >
        <span className="text-[clamp(6rem,20vw,20rem)] font-black italic leading-none whitespace-nowrap text-white/[0.02] tracking-tighter">
          TOOLKIT
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <FadeUp>
          <motion.div
            style={{ y: headY }}
            className="mb-20 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#D6B25E] opacity-80" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#D6B25E] font-mono font-semibold">
                  Vol. 03 — Arsenal
                </span>
              </div>
              <h2 className="text-[clamp(3.5rem,6vw,6.5rem)] font-light italic leading-[1] tracking-tight text-white/90 mb-2">
                Instruments of
              </h2>
              <h2 className="text-[clamp(3.5rem,6vw,6.5rem)] font-extrabold uppercase leading-[1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#E5C98A]">
                Creation.
              </h2>
            </div>
            <div className="lg:max-w-xs border-l-2 border-[#D6B25E]/50 pl-6 py-2 text-white/60 hover:border-[#D6B25E] transition-colors duration-500">
              <p className="font-light text-sm leading-relaxed">
                A curated set of tools I use to craft systems, interfaces, and
                production-ready experiences.
              </p>
            </div>
          </motion.div>
        </FadeUp>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Figma Card */}
          <FadeUp delay={0.1} className="md:col-span-12 lg:col-span-7">
            <div
              onMouseMove={handleMouseMove}
              className="group relative h-full p-8 md:p-12 min-h-[380px] rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ff6b6b]/30 transition-colors duration-500 overflow-hidden backdrop-blur-md shadow-2xl"
            >
              {/* Hover Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,107,107,0.1), transparent 40%)`,
                }}
              />

              <div className="absolute -right-16 -top-16 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none z-0">
                <FaFigma className="w-80 h-80 text-[#ff6b6b]" />
              </div>

              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="w-16 h-16 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-[#ff6b6b]/10 group-hover:border-[#ff6b6b]/30 group-hover:scale-110 transition-all duration-500">
                  <FaFigma className="w-7 h-7 text-[#ff6b6b]" />
                </div>
                <span className="text-[0.6rem] tracking-[0.25em] text-white/50 uppercase border border-white/10 px-4 py-2 rounded-full bg-white/5 group-hover:border-[#ff6b6b]/30 group-hover:text-[#ff6b6b] transition-all duration-500 font-mono">
                  01 / Primary
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-semibold italic text-white/90 mb-4 leading-none">
                  Figma
                </h3>
                <p className="font-light text-sm leading-relaxed max-w-sm mb-10 text-white/60">
                  My core environment for architecting UI systems, component
                  libraries, and prototypes.
                </p>
                <div className="space-y-6 max-w-md">
                  {[
                    { label: "UI/UX System Design", pct: 95, color: "#ff6b6b", lvl: 5 },
                    { label: "Interactive Prototyping", pct: 88, color: "#D6B25E", lvl: 4 },
                  ].map((m, i) => (
                    <div key={m.label} className="group/item">
                      <div className="flex justify-between items-end mb-2">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/60 group-hover/item:text-white transition-colors">
                            {m.label}
                          </span>
                          <TechSquares level={m.lvl} color={m.color} />
                        </div>
                        <span
                          className="font-mono text-[0.6rem] tracking-[0.2em] font-bold"
                          style={{ color: m.color }}
                        >
                          {m.pct}%
                        </span>
                      </div>
                      <BlueprintBar pct={m.pct} color={m.color} delay={0.2 + i * 0.15} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* React Eco Card */}
          <FadeUp delay={0.2} className="md:col-span-12 lg:col-span-5">
            <div
              onMouseMove={handleMouseMove}
              className="group relative h-full p-8 md:p-10 min-h-[380px] rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#35d0ff]/30 transition-colors duration-500 overflow-hidden backdrop-blur-md shadow-2xl"
            >
              {/* Hover Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(53,208,255,0.1), transparent 40%)`,
                }}
              />

              <FaReact className="absolute -bottom-12 -right-12 w-72 h-72 text-[#35d0ff] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 z-0" />

              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="flex -space-x-3 group-hover:space-x-2 transition-all duration-500">
                  <div className="w-14 h-14 border border-white/10 bg-[#07070a] rounded-2xl flex items-center justify-center shadow-xl relative z-20 group-hover:bg-[#35d0ff]/10 group-hover:border-[#35d0ff]/30 transition-colors duration-500">
                    <FaReact className="w-7 h-7 text-[#35d0ff]" />
                  </div>
                  <div className="w-14 h-14 border border-white/10 bg-[#07070a] rounded-2xl flex items-center justify-center shadow-xl relative z-10 group-hover:bg-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <SiNextdotjs className="w-6 h-6 text-white/90" />
                  </div>
                </div>
                <span className="text-[0.6rem] tracking-[0.25em] text-white/50 uppercase border border-white/10 px-4 py-2 rounded-full bg-white/5 group-hover:border-[#35d0ff]/30 group-hover:text-[#35d0ff] transition-all duration-500 font-mono">
                  02 / Engine
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-semibold italic text-white/90 mb-4 leading-none">
                  React Eco
                </h3>
                <p className="font-light text-sm leading-relaxed mb-12 text-white/60">
                  Building scalable, performant apps with modern patterns and
                  Next.js framework.
                </p>
                <div className="space-y-6">
                  <div className="group/item">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/60 group-hover/item:text-white transition-colors">
                          React.js / Next.js
                        </span>
                        <TechSquares level={5} color="#35d0ff" />
                      </div>
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] font-bold text-[#35d0ff]">
                        92%
                      </span>
                    </div>
                    <BlueprintBar pct={92} color="#35d0ff" delay={0.3} />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Tools Grid */}
          <FadeUp delay={0.3} className="md:col-span-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {[
                { id: "03", icon: FaJs, name: "JavaScript", type: "Logic", color: "#F7DF1E" },
                { id: "04", icon: SiTailwindcss, name: "Tailwind", type: "Styling", color: "#38B2AC" },
                { id: "05", icon: FaHtml5, name: "HTML5", type: "Markup", color: "#E34F26" },
                { id: "06", icon: FaGitAlt, name: "Git", type: "Version", color: "#F05032" },
              ].map((it) => (
                <div
                  key={it.id}
                  onMouseMove={handleMouseMove}
                  className="group relative p-6 flex flex-col items-center justify-center text-center min-h-[190px] rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden backdrop-blur-md"
                >
                  {/* Subtle Hover Gradient Logic based on Tool Color */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${it.color}15, transparent 50%)`,
                    }}
                  />

                  <span className="absolute top-6 left-6 font-mono text-[0.55rem] tracking-[0.25em] text-white/30 group-hover:text-white/80 transition-colors duration-500">
                    {it.id}
                  </span>

                  <div className="w-14 h-14 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg">
                    <it.icon
                      className="w-7 h-7 opacity-90 transition-colors duration-500 group-hover:opacity-100"
                      style={{ color: it.color }}
                    />
                  </div>

                  <h4 className="text-xl font-semibold italic text-white/90 mb-1 relative z-10">
                    {it.name}
                  </h4>
                  <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-white/40 group-hover:text-white/80 transition-colors duration-500 relative z-10">
                    {it.type}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Skills;