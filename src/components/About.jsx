import React, { useRef } from "react";
import {
  Globe,
  PenTool,
  Code2,
  Layers,
  MousePointer2,
  Calendar,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const educationData = [
  {
    id: 1,
    school: "Catholic High School St. Albertus",
    period: "2020 – 2023",
    role: "Science Major",
    desc: "Built a strong foundation in analytical thinking and systematic problem-solving.",
    status: "completed",
    index: "01",
  },
  {
    id: 2,
    school: "Brawijaya University",
    period: "2023 – Present",
    role: "Informatics Engineering",
    desc: "Focusing on Front-End Development, UI/UX Design, and building interactive web experiences with React & Modern Tech.",
    status: "current",
    index: "02",
  },
];

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const MeterBar = ({ pct, color = "var(--metal)", delay = 0.18 }) => (
  <div className="ab-meter">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ background: color }}
      className="ab-meterFill"
    />
    <div className="ab-meterSheen" />
  </div>
);

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-56px"]);

  return (
    <>
      <style>{`
        /* ───────────────── Background Stack ───────────────── */
        .ab-bg{
          background:
            radial-gradient(1100px 700px at 18% 18%, rgba(124,58,237,0.14), transparent 60%),
            radial-gradient(900px 600px at 82% 24%, rgba(20,184,166,0.10), transparent 58%),
            radial-gradient(980px 680px at 55% 112%, rgba(214,178,94,0.11), transparent 62%),
            linear-gradient(180deg, #05050a 0%, #090912 55%, #05050a 100%);
        }

        /* Microgrid (anti "garis band"): low opacity + mask + tiny blur */
        .ab-grid{
          position:absolute; inset:0; pointer-events:none; z-index:1;
          background-image:
            linear-gradient(rgba(214,178,94,0.040) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.030) 1px, transparent 1px);
          background-size: 92px 92px;
          background-position: center top;
          mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%);
          filter: blur(.25px);
          opacity:.75;
        }

        /* Paper fiber (lebih "human") */
        .ab-fiber{
          position:absolute; inset:0; pointer-events:none; z-index:2;
          background:
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.05), transparent 45%),
            radial-gradient(circle at 82% 18%, rgba(255,255,255,0.035), transparent 42%),
            radial-gradient(circle at 50% 110%, rgba(255,255,255,0.03), transparent 55%);
          opacity:.55;
          mix-blend-mode: overlay;
        }

        /* Topography haze (very soft, no hard rings) */
        .ab-topo{
          position:absolute; inset:0; pointer-events:none; z-index:2;
          background-image:
            repeating-radial-gradient(circle at 100% 0%,
              rgba(214,178,94,0.018) 0px,
              rgba(214,178,94,0.018) 1px,
              transparent 54px,
              transparent 62px
            );
          opacity:.55;
          filter: blur(.25px);
          mask-image: radial-gradient(circle at 70% 20%, black 0%, transparent 70%);
        }

        /* Grain */
        .ab-grain::after{
          content:'';
          position:absolute;
          inset:-200%;
          width:400%;
          height:400%;
          pointer-events:none;
          z-index:4;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
          opacity:0.045;
          mix-blend-mode: overlay;
          transform: rotate(4deg);
        }

        /* Print dust */
        .ab-dust{
          position:absolute; inset:0; pointer-events:none; z-index:3;
          background:
            radial-gradient(circle at 22% 38%, rgba(255,255,255,0.07) 0.5px, transparent 1px),
            radial-gradient(circle at 64% 22%, rgba(255,255,255,0.06) 0.6px, transparent 1px),
            radial-gradient(circle at 78% 66%, rgba(255,255,255,0.05) 0.6px, transparent 1px);
          background-size: 260px 260px;
          opacity:.12;
          mix-blend-mode: overlay;
          filter: blur(.15px);
        }

        /* Vignette */
        .ab-vignette{
          position:absolute; inset:0; pointer-events:none; z-index:3;
          background:
            radial-gradient(860px 580px at 50% 8%, rgba(0,0,0,0.0), rgba(0,0,0,0.40) 72%),
            radial-gradient(900px 720px at 50% 112%, rgba(0,0,0,0.0), rgba(0,0,0,0.62) 74%);
        }

        .ab-watermark{
          -webkit-text-stroke: 1.2px rgba(214,178,94,0.35);
          color: transparent;
        }

        /* ───────────────── Artifact Card (Rounded, premium) ───────────────── */
        .ab-card{
          position:relative;
          border-radius: 24px;
          background: rgba(7,7,10,0.62);
          border: 1px solid rgba(214,178,94,0.14);
          backdrop-filter: blur(14px);
          overflow:hidden;
          box-shadow:
            0 26px 70px rgba(0,0,0,0.58),
            0 0 0 1px rgba(214,178,94,0.08) inset;
          transform: translateZ(0);
          transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s cubic-bezier(.22,1,.36,1), border-color .45s cubic-bezier(.22,1,.36,1);
        }
        .ab-card:hover{
          transform: translateY(-5px);
          border-color: rgba(214,178,94,0.26);
          box-shadow:
            0 34px 92px rgba(0,0,0,0.66),
            0 0 0 1px rgba(214,178,94,0.10) inset;
        }

        /* Gradient edge */
        .ab-card::before{
          content:'';
          position:absolute; inset:0;
          padding:1px;
          border-radius:24px;
          background: linear-gradient(135deg,
            rgba(214,178,94,0.62),
            rgba(20,184,166,0.16),
            rgba(124,58,237,0.14),
            rgba(214,178,94,0.16)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity:.55;
          pointer-events:none;
          z-index:2;
        }

        /* Inner film */
        .ab-film{
          position:absolute; inset:0;
          pointer-events:none;
          background:
            radial-gradient(circle at 18% 18%, rgba(255,255,255,0.06), transparent 45%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 35%, rgba(0,0,0,0.22));
          opacity:.75;
          z-index:1;
        }

        /* Sheen sweep */
        @keyframes ab-sheen {
          from { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          22%  { opacity: .34; }
          to   { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
        .ab-sheen{
          position:absolute; inset:0;
          pointer-events:none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
          width:55%;
          transform: translateX(-140%) skewX(-18deg);
          opacity:0;
          z-index:3;
        }
        .ab-card:hover .ab-sheen{ animation: ab-sheen 1.2s cubic-bezier(.22,1,.36,1); }

        /* Screws (round like HERO) */
        .ab-screw{
          position:absolute;
          width:14px; height:14px;
          border-radius:999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.26), rgba(255,255,255,0.06) 40%, rgba(0,0,0,0.55) 75%);
          box-shadow: 0 6px 14px rgba(0,0,0,0.42);
          border: 1px solid rgba(214,178,94,0.14);
          z-index:4;
          opacity:.95;
        }
        .ab-screw::after{
          content:'';
          position:absolute; left:50%; top:50%;
          width:9px; height:1px;
          background: rgba(214,178,94,0.40);
          transform: translate(-50%,-50%) rotate(18deg);
          opacity:.75;
        }

        /* Corner reg marks (clean) */
        .ab-reg{ position:absolute; width:12px; height:12px; z-index:4; opacity:.55; transition: opacity .35s ease; }
        .ab-reg::before, .ab-reg::after{ content:''; position:absolute; background: var(--metal); opacity:.7; }
        .ab-reg::before{ top:50%; left:0; right:0; height:1px; transform:translateY(-50%); }
        .ab-reg::after{ left:50%; top:0; bottom:0; width:1px; transform:translateX(-50%); }
        .ab-card:hover .ab-reg{ opacity: 1; }
        .ab-tl{ top:-6px; left:-6px; }
        .ab-tr{ top:-6px; right:-6px; }
        .ab-bl{ bottom:-6px; left:-6px; }
        .ab-br{ bottom:-6px; right:-6px; }

        /* Halftone accent */
        .ab-halftone{
          position:absolute;
          right:-18px; top:-18px;
          width:150px; height:150px;
          background-image: radial-gradient(rgba(214,178,94,0.18) 1px, transparent 1px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle at 40% 40%, black 0%, transparent 72%);
          opacity:.35;
          pointer-events:none;
          z-index:1;
        }

        /* Chips */
        .ab-chip{
          border:1px solid rgba(214,178,94,0.18);
          background: rgba(255,255,255,0.02);
          border-radius: 999px;
          color: rgba(154,148,138,0.92);
          transition: all .35s cubic-bezier(.22,1,.36,1);
        }
        .ab-chip:hover{
          border-color: rgba(244,240,232,0.65);
          color: rgba(244,240,232,0.95);
          background: rgba(255,255,255,0.06);
        }

        /* Meter */
        .ab-meter{
          width:100%;
          height:4px;
          position:relative;
          overflow:hidden;
          border:1px solid rgba(214,178,94,0.18);
          background: rgba(255,255,255,0.02);
          border-radius: 999px;
        }
        .ab-meterFill{
          position:absolute; left:0; top:0; bottom:0;
          box-shadow: 0 0 18px rgba(214,178,94,0.18);
        }
        .ab-meterSheen{
          position:absolute; inset:0;
          pointer-events:none;
          opacity:.40;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="relative w-full overflow-hidden text-[var(--bone)] ab-bg ab-grain"
        style={{ paddingTop: 112, paddingBottom: 120 }}
      >
        {/* Background layers */}
        <div className="ab-grid" />
        <div className="ab-fiber" />
        <div className="ab-topo" />
        <div className="ab-dust" />
        <div className="ab-vignette" />

        {/* Studio lighting (match HERO) */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div className="absolute top-[-8%] left-[-10%] w-[52vw] h-[52vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.10] bg-[var(--metal)]" />
          <div className="absolute bottom-[-10%] right-[-12%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[170px] opacity-[0.07] bg-[var(--plum)]" />
          <div className="absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] rounded-full mix-blend-screen blur-[190px] opacity-[0.03] bg-[var(--haze)]" />
        </div>

        {/* Watermark */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-[5%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden select-none"
        >
          <span className="f-display ab-watermark text-[clamp(7rem,22vw,22rem)] font-bold italic leading-none whitespace-nowrap opacity-[0.55]">
            ABOUT
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <FadeUp>
            <motion.div style={{ y: headY }} className="mb-16 md:mb-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--metal)] opacity-80" />
                <span className="f-mono text-[0.62rem] tracking-[0.32em] uppercase text-[var(--metal)]">
                  Vol. 02 — The Architect
                </span>
              </div>

              <h2 className="f-display text-[clamp(3rem,6.5vw,6rem)] font-light italic leading-[0.92] tracking-tight text-[var(--bone)]">
                More than just{" "}
                <span className="f-sans font-extrabold not-italic tracking-[-0.03em] text-[var(--metal2)] drop-shadow-[0_0_20px_rgba(242,216,154,0.28)]">
                  CODE.
                </span>
              </h2>

              <h2
                className="f-display text-[clamp(3rem,6.5vw,6rem)] font-bold italic leading-[0.92] tracking-tight mt-2"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.35px rgba(214,178,94,0.78)",
                }}
              >
                I design solutions.
              </h2>

              <div className="mt-6 flex items-center gap-4">
                <span className="f-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                  research · systems · execution
                </span>
                <span className="hidden md:block w-16 h-px bg-[rgba(214,178,94,0.28)]" />
              </div>
            </motion.div>
          </FadeUp>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-24 md:mb-32">
            {/* Intro (2x2) */}
            <FadeUp delay={0.12} className="md:col-span-2 md:row-span-2">
              <div className="ab-card h-full p-8 md:p-10 group">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-halftone" />

                <div className="ab-screw" style={{ top: 12, left: 12 }} />
                <div className="ab-screw" style={{ top: 12, right: 12 }} />
                <div className="ab-screw" style={{ bottom: 12, left: 12 }} />
                <div className="ab-screw" style={{ bottom: 12, right: 12 }} />

                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <Globe className="absolute -right-10 -top-10 w-56 h-56 text-[var(--metal)] opacity-[0.04] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700 stroke-[0.6]" />
                <span className="f-display font-bold absolute bottom-4 right-6 text-6xl text-[var(--metal)] opacity-[0.04] select-none">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="f-mono text-[0.58rem] tracking-[0.28em] text-[var(--metal)] uppercase">
                      01 / Intro
                    </span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(214,178,94,0.28)] to-transparent" />
                  </div>

                  <h3 className="f-display text-3xl md:text-4xl lg:text-5xl font-semibold italic text-[var(--bone)] mb-6 leading-[1.08]">
                    Hi, I'm Brandon.
                  </h3>

                  <div className="space-y-4 f-sans text-xs md:text-sm text-[rgba(244,240,232,0.86)] leading-relaxed max-w-md">
                    <p>
                      A product designer from Indonesia turning ideas into{" "}
                      <span className="text-[var(--metal2)] font-semibold">
                        simple
                      </span>
                      ,{" "}
                      <span className="text-[var(--metal2)] font-semibold">
                        elegant
                      </span>
                      , and{" "}
                      <span className="text-[var(--metal2)] font-semibold">
                        fun-to-use
                      </span>{" "}
                      digital experiences.
                    </p>
                    <p>
                      I work where design meets code — making interfaces feel{" "}
                      <span className="text-[var(--metal)]">intentional</span>{" "}
                      and <span className="text-[var(--metal)]">alive</span>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-10 relative z-10">
                  {["Front End", "UI/UX", "Creative"].map((t) => (
                    <span
                      key={t}
                      className="ab-chip f-mono text-[0.55rem] tracking-[0.18em] uppercase px-4 py-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Experience */}
            <FadeUp delay={0.22} className="md:col-span-1">
              <div className="ab-card h-full p-8 flex flex-col items-center justify-center text-center min-h-[210px]">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-screw" style={{ top: 12, left: 12 }} />
                <div className="ab-screw" style={{ top: 12, right: 12 }} />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <span className="f-display text-6xl md:text-7xl font-bold italic text-[var(--metal)] mb-2 drop-shadow-[0_0_15px_rgba(214,178,94,0.18)]">
                  2+
                </span>
                <span className="f-mono text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.92)] mt-2">
                  Years / Experience
                </span>
                <div className="w-16 mt-5">
                  <MeterBar pct={100} delay={0.35} />
                </div>
                <span className="f-display font-bold absolute bottom-2 right-4 text-4xl text-[var(--metal)] opacity-[0.04] select-none">
                  02
                </span>
              </div>
            </FadeUp>

            {/* Projects */}
            <FadeUp delay={0.32} className="md:col-span-1">
              <div className="ab-card h-full p-8 flex flex-col items-center justify-center text-center min-h-[210px]">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-screw" style={{ top: 12, left: 12 }} />
                <div className="ab-screw" style={{ top: 12, right: 12 }} />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <span className="f-display text-6xl md:text-7xl font-bold text-[var(--bone)] mb-2 drop-shadow-[0_0_15px_rgba(244,240,232,0.12)]">
                  10+
                </span>
                <span className="f-mono text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.92)] mt-2">
                  Projects / Completed
                </span>
                <div className="w-16 mt-5">
                  <MeterBar pct={100} color="var(--rust)" delay={0.42} />
                </div>
                <span className="f-display font-bold absolute bottom-2 right-4 text-4xl text-[var(--metal)] opacity-[0.04] select-none">
                  03
                </span>
              </div>
            </FadeUp>

            {/* Terminal */}
            <FadeUp delay={0.42} className="md:col-span-2">
              <div className="ab-card h-full p-6 md:p-8 group">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-screw" style={{ top: 12, left: 12 }} />
                <div className="ab-screw" style={{ top: 12, right: 12 }} />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <span className="f-display font-bold absolute bottom-2 right-4 text-5xl text-[var(--metal)] opacity-[0.04] select-none z-0">
                  04
                </span>

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(214,178,94,0.18)] relative z-10">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f2d89a] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#14b8a6] opacity-80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--metal)] animate-pulse" />
                    <span className="f-mono text-[0.56rem] tracking-[0.2em] text-[rgba(154,148,138,0.95)] uppercase">
                      philosophy.ts
                    </span>
                  </div>
                </div>

                <div className="f-mono text-[0.72rem] md:text-[0.8rem] text-[rgba(244,240,232,0.82)] leading-[2.2] relative z-10">
                  <p>
                    <span style={{ color: "var(--metal)" }}>const</span>{" "}
                    <span style={{ color: "var(--bone)" }}>philosophy</span> ={" "}
                    {"{"}
                  </p>
                  <p className="pl-6">
                    quality:{" "}
                    <span style={{ color: "var(--haze)" }}>
                      "uncompromised"
                    </span>
                    ,
                  </p>
                  <p className="pl-6">
                    efficiency:{" "}
                    <span style={{ color: "var(--rust)" }}>true</span>,
                  </p>
                  <p className="pl-6">
                    userFirst:{" "}
                    <span style={{ color: "var(--rust)" }}>true</span>,
                  </p>
                  <p>
                    {"}"};{" "}
                    <span
                      className="animate-pulse"
                      style={{ color: "var(--metal)" }}
                    >
                      _
                    </span>
                  </p>
                </div>

                <Code2 className="absolute bottom-6 right-8 w-12 h-12 text-[var(--bone)] opacity-[0.05] group-hover:scale-110 transition-transform z-0" />
              </div>
            </FadeUp>

            {/* Design */}
            <FadeUp delay={0.52} className="md:col-span-1 lg:col-span-1">
              <div className="ab-card h-full p-6 md:p-8 flex flex-col justify-between min-h-[270px]">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <span className="f-display font-bold absolute bottom-2 right-4 text-5xl text-[var(--metal)] opacity-[0.04] select-none">
                  05
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-[rgba(214,178,94,0.22)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center rounded-xl">
                      <PenTool className="w-4 h-4 text-[var(--metal)]" />
                    </div>
                    <span className="f-mono text-[0.5rem] tracking-[0.2em] text-[var(--metal)] uppercase bg-[rgba(214,178,94,0.10)] px-3 py-1.5 border border-[rgba(214,178,94,0.22)] rounded-full">
                      User-Centric
                    </span>
                  </div>

                  <h4 className="f-display text-2xl font-semibold italic mb-1 text-[var(--bone)]">
                    Design
                  </h4>
                  <p className="f-mono text-[0.6rem] text-[rgba(154,148,138,0.9)] mb-8 uppercase tracking-[0.22em]">
                    insight → impact
                  </p>
                </div>

                <div className="space-y-5 relative z-10">
                  <div>
                    <div className="flex justify-between text-[0.56rem] f-mono tracking-[0.18em] mb-2 uppercase">
                      <span className="text-[rgba(244,240,232,0.85)]">
                        Figma
                      </span>
                      <span className="text-[var(--metal)] font-bold">95%</span>
                    </div>
                    <MeterBar pct={95} delay={0.28} />
                  </div>

                  <div>
                    <div className="flex justify-between text-[0.56rem] f-mono tracking-[0.18em] mb-2 uppercase">
                      <span className="text-[rgba(244,240,232,0.85)]">
                        Canva
                      </span>
                      <span className="text-[var(--metal)] font-bold">80%</span>
                    </div>
                    <MeterBar pct={80} delay={0.36} />
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Frontend */}
            <FadeUp delay={0.62} className="md:col-span-1 lg:col-span-1">
              <div className="ab-card h-full p-6 md:p-8 flex flex-col justify-between min-h-[270px]">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <span className="f-display font-bold absolute bottom-2 right-4 text-5xl text-[var(--metal)] opacity-[0.04] select-none">
                  06
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-[rgba(53,208,255,0.22)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center rounded-xl">
                      <Code2 className="w-4 h-4 text-[#35d0ff]" />
                    </div>
                    <span className="f-mono text-[0.5rem] tracking-[0.2em] text-[#35d0ff] uppercase bg-[rgba(53,208,255,0.10)] px-3 py-1.5 border border-[rgba(53,208,255,0.22)] rounded-full">
                      Dev Stack
                    </span>
                  </div>

                  <h4 className="f-display text-2xl font-semibold italic mb-1 text-[var(--bone)]">
                    Frontend
                  </h4>
                  <p className="f-mono text-[0.6rem] text-[rgba(154,148,138,0.9)] mb-8 uppercase tracking-[0.22em]">
                    concept → code
                  </p>
                </div>

                <div className="space-y-5 relative z-10">
                  <div>
                    <div className="flex justify-between text-[0.56rem] f-mono tracking-[0.18em] mb-2 uppercase">
                      <span className="text-[rgba(244,240,232,0.85)]">
                        React.js
                      </span>
                      <span className="text-[#35d0ff] font-bold">90%</span>
                    </div>
                    <MeterBar pct={90} color="#35d0ff" delay={0.33} />
                  </div>

                  <div>
                    <div className="flex justify-between text-[0.56rem] f-mono tracking-[0.18em] mb-2 uppercase">
                      <span className="text-[rgba(244,240,232,0.85)]">
                        JavaScript
                      </span>
                      <span className="text-[#35d0ff] font-bold">85%</span>
                    </div>
                    <MeterBar pct={85} color="#35d0ff" delay={0.41} />
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Spec Sheet */}
            <FadeUp delay={0.72} className="md:col-span-2 lg:col-span-4">
              <div className="ab-card p-6 md:p-10">
                <div className="ab-film" />
                <div className="ab-sheen" />
                <div className="ab-reg ab-tl" />
                <div className="ab-reg ab-tr" />
                <div className="ab-reg ab-bl" />
                <div className="ab-reg ab-br" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[rgba(214,178,94,0.18)]">
                  <div className="flex items-center gap-4">
                    <Layers className="w-5 h-5 text-[var(--metal)]" />
                    <span className="f-mono text-xs tracking-[0.2em] text-[var(--bone)] uppercase font-semibold">
                      design-system.tokens
                    </span>
                  </div>
                  <span className="f-mono text-[0.55rem] tracking-[0.25em] border border-[rgba(214,178,94,0.22)] px-4 py-2 text-[var(--metal)] uppercase bg-[rgba(214,178,94,0.08)] rounded-full">
                    Status: maintained
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(214,178,94,0.14)]">
                  <div className="md:pr-8">
                    <p className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] mb-5">
                      Color Tokens
                    </p>
                    <div className="flex gap-3 mb-4">
                      {[
                        "#07070a",
                        "#D6B25E",
                        "#D45D3A",
                        "#14B8A6",
                        "#7C3AED",
                        "#F4F0E8",
                      ].map((c) => (
                        <div
                          key={c}
                          className="w-8 h-8 border border-[rgba(255,255,255,0.18)] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] rounded-xl"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                    <p className="f-mono text-[0.55rem] text-[rgba(154,148,138,0.9)] tracking-[0.24em] uppercase">
                      ink · metal · rust · haze · plum · bone
                    </p>
                  </div>

                  <div className="md:px-8">
                    <p className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] mb-5">
                      Type Pairing
                    </p>
                    <div className="border-l-2 border-[var(--metal)] pl-5">
                      <h4 className="f-display text-4xl font-semibold italic text-[var(--bone)] leading-none">
                        Aa Display
                      </h4>
                      <p className="f-sans text-[0.7rem] text-[rgba(244,240,232,0.85)] mt-3 tracking-wide">
                        Fraunces × Manrope × IBM Plex Mono
                      </p>
                    </div>
                  </div>

                  <div className="md:pl-8 flex flex-col justify-center relative">
                    <p className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] mb-5">
                      Components
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-[var(--metal)] text-[var(--bg)] f-mono text-[0.55rem] font-bold tracking-[0.2em] uppercase hover:bg-[var(--bone)] transition-colors rounded-full">
                        Primary
                      </button>
                      <button className="px-6 py-3 border border-[rgba(214,178,94,0.22)] text-[rgba(244,240,232,0.95)] f-mono text-[0.55rem] font-bold tracking-[0.2em] uppercase hover:bg-[rgba(255,255,255,0.05)] transition-colors rounded-full">
                        Ghost
                      </button>
                    </div>
                    <MousePointer2 className="absolute bottom-[-15px] right-8 w-6 h-6 text-[var(--bone)] opacity-60 -rotate-12" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 mb-16 md:mb-24 opacity-90">
            <div className="flex-1 h-px bg-[rgba(214,178,94,0.18)]" />
            <span className="f-mono text-[0.6rem] tracking-[0.3em] uppercase text-[rgba(214,178,94,0.92)]">
              Academic Pathway
            </span>
            <div className="flex-1 h-px bg-[rgba(214,178,94,0.18)]" />
          </div>

          {/* Timeline Header */}
          <FadeUp className="text-center mb-16 md:mb-24">
            <h3 className="f-display text-[clamp(2.5rem,5vw,4.5rem)] font-light italic text-[var(--bone)] leading-none mb-4">
              Educational{" "}
              <span className="font-bold not-italic text-[var(--metal2)] drop-shadow-[0_0_15px_rgba(242,216,154,0.18)]">
                Journey.
              </span>
            </h3>
            <p className="f-sans text-[0.8rem] text-[rgba(154,148,138,0.95)] max-w-md mx-auto leading-relaxed">
              Shaping technical skills and creative thinking through structured
              learning.
            </p>
          </FadeUp>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto px-4 md:px-0">
            <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-px bg-[rgba(214,178,94,0.16)] md:-translate-x-1/2 z-0" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--metal)] to-transparent md:-translate-x-1/2 z-0 origin-top opacity-70"
            />

            <div className="space-y-16 md:space-y-24">
              {educationData.map((item, i) => {
                const isLeft = i % 2 === 0;
                const isCurrent = item.status === "current";

                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    {/* Node (rounded) */}
                    <div className="absolute left-[38px] md:left-1/2 top-6 md:top-10 -translate-x-1/2 z-10 flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl border bg-[rgba(7,7,10,0.88)] backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] ${
                          isCurrent
                            ? "border-[rgba(214,178,94,0.55)]"
                            : "border-[rgba(214,178,94,0.22)]"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            isCurrent
                              ? "bg-[#3DDC84] shadow-[0_0_15px_rgba(61,220,132,0.85)]"
                              : "bg-[rgba(154,148,138,0.7)]"
                          }`}
                        />
                      </div>
                      <span
                        className={`f-mono text-[0.55rem] tracking-[0.28em] mt-4 font-bold ${isCurrent ? "text-[var(--metal)]" : "text-[rgba(154,148,138,0.9)]"}`}
                      >
                        {item.index}
                      </span>
                    </div>

                    {/* Content card (rounded artifact) */}
                    <FadeUp
                      delay={0.12}
                      className={`w-full pl-24 md:pl-0 md:w-[45%] ${isLeft ? "md:pr-20" : "md:pl-20"}`}
                    >
                      <div className="ab-card p-6 md:p-10 group relative">
                        <div className="ab-film" />
                        <div className="ab-sheen" />
                        <div className="ab-halftone" />
                        <div
                          className="ab-screw"
                          style={{ top: 12, left: 12 }}
                        />
                        <div
                          className="ab-screw"
                          style={{ top: 12, right: 12 }}
                        />
                        <div className="ab-reg ab-tl" />
                        <div className="ab-reg ab-tr" />
                        <div className="ab-reg ab-bl" />
                        <div className="ab-reg ab-br" />

                        <div
                          className={`absolute top-0 bottom-0 w-[3px] bg-[var(--metal)] opacity-0 group-hover:opacity-100 transition-opacity ${isLeft ? "right-0" : "left-0"}`}
                        />

                        <div className="relative z-10 flex items-center gap-4 mb-6">
                          <div
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border f-mono text-[0.55rem] tracking-[0.2em] font-semibold uppercase ${
                              isCurrent
                                ? "border-[rgba(214,178,94,0.45)] text-[var(--metal)] bg-[rgba(214,178,94,0.10)]"
                                : "border-[rgba(214,178,94,0.20)] text-[rgba(244,240,232,0.9)] bg-[rgba(255,255,255,0.02)]"
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </div>

                          {isCurrent && (
                            <div className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC84] opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DDC84]" />
                            </div>
                          )}
                        </div>

                        <h4
                          className={`relative z-10 f-display text-2xl md:text-3xl mb-3 leading-snug ${isCurrent ? "font-semibold italic text-[var(--bone)]" : "text-[rgba(244,240,232,0.92)]"}`}
                        >
                          {item.school}
                        </h4>

                        <p className="relative z-10 f-mono text-[0.65rem] tracking-[0.26em] uppercase text-[var(--metal)] mb-6 font-bold opacity-90">
                          {item.role}
                        </p>

                        <div className="relative z-10 w-12 h-[2px] bg-[rgba(214,178,94,0.28)] mb-6" />

                        <p className="relative z-10 f-sans text-[0.82rem] text-[rgba(244,240,232,0.86)] leading-[1.85]">
                          {item.desc}
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
