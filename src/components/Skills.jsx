import React, { useRef, useCallback } from "react";
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 26, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const BlueprintBar = ({ pct, color, delay = 0.18 }) => (
  <div className="relative w-full h-[7px] mt-2 overflow-hidden rounded-full">
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
        className="w-1.5 h-1.5 transition-all duration-500"
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
      <style>{`
        /* Grid overlay tetap ada namun transparan ke background global */
        .grid-overlay{
          position:absolute; inset:0;
          pointer-events:none;
          z-index:1;
          opacity:.55;
          background-image:
            linear-gradient(rgba(214,178,94,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.035) 1px, transparent 1px);
          background-size: 92px 92px;
          background-position: center top;
          mask-image: linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%);
          filter: blur(0.2px);
        }

        .outline{
          -webkit-text-stroke: 1.35px rgba(214,178,94,0.40);
          color: transparent;
        }

        .card{
          position:relative;
          background: rgba(7,7,10,0.62);
          border-radius: 22px;
          border: 1px solid rgba(214,178,94,0.14);
          backdrop-filter: blur(14px);
          overflow:hidden;
          box-shadow: 0 26px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(214,178,94,0.08) inset;
          transition: all .45s cubic-bezier(.22,1,.36,1);
        }
        .card:hover{
          transform: translateY(-4px);
          border-color: rgba(214,178,94,0.26);
          box-shadow: 0 34px 92px rgba(0,0,0,0.62), 0 0 0 1px rgba(214,178,94,0.10) inset;
        }

        .card::before{
          content:''; position:absolute; inset:0; padding:1px; border-radius:22px;
          background: linear-gradient(135deg, rgba(214,178,94,0.62), rgba(20,184,166,0.16), rgba(124,58,237,0.14), rgba(214,178,94,0.16));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity:.55; pointer-events:none; z-index:2;
        }

        .card::after{
          content:""; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(214,178,94,0.10), transparent 52%),
            radial-gradient(170px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.055), transparent 56%);
          opacity:0; transition: opacity .25s ease; mix-blend-mode: screen; z-index:2;
        }
        .card:hover::after{ opacity:1; }

        .screw{
          position:absolute; width:14px; height:14px; border-radius:999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.26), rgba(255,255,255,0.06) 40%, rgba(0,0,0,0.55) 75%);
          box-shadow: 0 6px 14px rgba(0,0,0,0.42); border: 1px solid rgba(214,178,94,0.14);
          z-index:3; opacity:.9;
        }
        .screw::after{
          content:''; position:absolute; left:50%; top:50%; width:9px; height:1px;
          background: rgba(214,178,94,0.40); transform: translate(-50%,-50%) rotate(18deg); opacity:.75;
        }

        .topline{
          position:absolute; left:0; right:0; top:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(214,178,94,0.55), transparent);
          opacity:0; transition: opacity .35s ease; z-index:3;
        }
        .card:hover .topline{ opacity:.9; }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-transparent pt-24 pb-20 md:pt-32 md:pb-24"
      >
        <div className="grid-overlay" />

        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-[8%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-40 select-none"
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
              <div className="lg:max-w-xs border-l-2 border-[rgba(214,178,94,0.55)] pl-6 py-2 text-[rgba(154,148,138,0.92)]">
                <p className="f-sans text-xs md:text-sm leading-[1.85]">
                  A curated set of tools I use to craft systems, interfaces, and production-ready experiences.
                </p>
              </div>
            </motion.div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            <FadeUp delay={0.1} className="md:col-span-12 lg:col-span-7">
              <div className="card h-full p-8 md:p-12 group min-h-[380px]" onMouseMove={onCardMove} onMouseLeave={onCardLeave}>
                <div className="topline" />
                <div className="screw" style={{ top: 12, left: 12 }} /><div className="screw" style={{ top: 12, right: 12 }} />
                <div className="absolute -right-16 -top-16 opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-700 pointer-events-none">
                  <FaFigma className="w-72 h-72 text-[#ff6b6b] p-12" />
                </div>
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="w-16 h-16 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[18px] flex items-center justify-center shadow-2xl"><FaFigma className="w-7 h-7 text-[#ff6b6b]" /></div>
                  <span className="f-mono text-[0.58rem] tracking-[0.22em] text-[rgba(154,148,138,0.92)] uppercase border border-[rgba(214,178,94,0.16)] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.02)]">01 / Primary</span>
                </div>
                <div className="relative z-10">
                  <h3 className="f-display text-4xl md:text-5xl font-semibold italic text-[var(--bone)] mb-4 leading-none">Figma</h3>
                  <p className="f-sans text-xs leading-relaxed max-w-sm mb-10">My core environment for architecting UI systems, component libraries, and prototypes.</p>
                  <div className="space-y-6 max-w-md">
                    {[{ label: "UI/UX System Design", pct: 95, color: "#ff6b6b", lvl: 5 }, { label: "Interactive Prototyping", pct: 88, color: "var(--metal)", lvl: 4 }].map((m, i) => (
                      <div key={m.label}>
                        <div className="flex justify-between items-end mb-1">
                          <div className="flex flex-col gap-1"><span className="f-mono text-[0.56rem] tracking-[0.22em] uppercase">{m.label}</span><TechSquares level={m.lvl} color={m.color} /></div>
                          <span className="f-mono text-[0.56rem] tracking-[0.22em]" style={{ color: m.color }}>{m.pct}%</span>
                        </div>
                        <BlueprintBar pct={m.pct} color={m.color} delay={0.25 + i * 0.15} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="md:col-span-12 lg:col-span-5">
              <div className="card h-full p-8 md:p-10 group min-h-[380px]" onMouseMove={onCardMove} onMouseLeave={onCardLeave}>
                <div className="topline" />
                <div className="screw" style={{ top: 12, left: 12 }} /><div className="screw" style={{ top: 12, right: 12 }} />
                <FaReact className="absolute -bottom-10 -right-10 w-64 h-64 text-[#35d0ff] opacity-[0.05] group-hover:opacity-[0.10] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" />
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[16px] flex items-center justify-center shadow-xl relative z-20"><FaReact className="w-6 h-6 text-[#35d0ff]" /></div>
                    <div className="w-12 h-12 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[16px] flex items-center justify-center shadow-xl relative z-10"><SiNextdotjs className="w-5 h-5 text-[var(--bone)]" /></div>
                  </div>
                  <span className="f-mono text-[0.58rem] tracking-[0.22em] text-[rgba(154,148,138,0.92)] uppercase border border-[rgba(214,178,94,0.16)] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.02)]">02 / Engine</span>
                </div>
                <div className="relative z-10">
                  <h3 className="f-display text-3xl md:text-4xl font-semibold italic text-[var(--bone)] mb-4 leading-none">React Eco</h3>
                  <p className="f-sans text-xs leading-relaxed mb-8">Building scalable, performant apps with modern patterns and Next.js framework.</p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-end mb-1">
                        <div className="flex flex-col gap-1"><span className="f-mono text-[0.56rem] tracking-[0.22em] uppercase">React.js / Next.js</span><TechSquares level={5} color="#35d0ff" /></div>
                        <span className="f-mono text-[0.56rem] tracking-[0.22em] text-[#35d0ff]">92%</span>
                      </div>
                      <BlueprintBar pct={92} color="#35d0ff" delay={0.35} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3} className="md:col-span-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
                {[{ id: "03", icon: FaJs, name: "JavaScript", type: "Logic", color: "#F7DF1E" }, { id: "04", icon: SiTailwindcss, name: "Tailwind", type: "Styling", color: "#14b8a6" }, { id: "05", icon: FaHtml5, name: "HTML", type: "Markup", color: "#E34F26" }, { id: "06", icon: FaGitAlt, name: "Git", type: "Version", color: "#F05032" }].map((it) => (
                  <div key={it.id} className="card p-6 flex flex-col items-center justify-center text-center group min-h-[180px]" onMouseMove={onCardMove} onMouseLeave={onCardLeave}>
                    <div className="topline" />
                    <div className="screw" style={{ top: 12, left: 12 }} />
                    <span className="absolute top-8 left-4 f-mono text-[0.52rem] tracking-[0.22em] opacity-70">{it.id}</span>
                    <div className="w-14 h-14 border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] rounded-[18px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 relative z-10"><it.icon className="w-6 h-6 opacity-90" style={{ color: it.color }} /></div>
                    <h4 className="f-display text-xl italic text-[var(--bone)] mb-1 relative z-10">{it.name}</h4>
                    <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase relative z-10">{it.type}</span>
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