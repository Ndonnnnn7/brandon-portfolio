import { useRef } from "react";
import {
  Globe,
  PenTool,
  Code2,
  Layers,
  MousePointer2,
  Calendar,
  Sparkles,
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

const introTags = ["Front End", "UI/UX", "Creative"];

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const MeterBar = ({ pct, color = "var(--metal)", delay = 0.18 }) => (
  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative backdrop-blur-sm">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ background: color }}
      className="absolute top-0 left-0 h-full rounded-full shadow-[0_0_10px_currentColor]"
    />
  </div>
);

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden text-[var(--bone)] bg-[#07070a]"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Background Layers - Optimized for aesthetics */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07070a]/50 to-[#07070a] pointer-events-none" />

      {/* Hardware Accelerated Blur Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu flex justify-center items-center z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.15] bg-[#D6B25E]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-[#D6B25E]" />
      </div>

      {/* Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-[5%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden select-none"
      >
        <span className="text-[clamp(6rem,20vw,20rem)] font-black italic leading-none whitespace-nowrap text-white/[0.02] tracking-tighter">
          ABOUT
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <FadeUp>
          <motion.div style={{ y: headY }} className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[var(--metal)] opacity-80" />
              <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[var(--metal)] font-mono font-semibold">
                Vol. 02 — The Architect
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,6rem)] font-light italic leading-[1] tracking-tight text-white/90">
              More than just{" "}
              <span className="font-extrabold not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#E5C98A] drop-shadow-[0_0_20px_rgba(214,178,94,0.3)]">
                CODE.
              </span>
            </h2>

            <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold italic leading-[1] tracking-tight text-transparent text-stroke-metal mt-2">
              I design solutions.
            </h2>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 font-mono">
                research · systems · execution
              </span>
            </div>
          </motion.div>
        </FadeUp>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-32">
          {/* Intro (2x2) */}
          <FadeUp delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#D6B25E]/30 transition-all duration-500 group overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D6B25E]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <Globe className="absolute -right-8 -top-8 w-64 h-64 text-[#D6B25E] opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:rotate-12 transition-all duration-700 stroke-[0.5]" />
              <span className="absolute bottom-6 right-8 text-7xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
                01
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[0.6rem] tracking-[0.3em] text-[#D6B25E] uppercase font-mono bg-[#D6B25E]/10 px-3 py-1 rounded-full border border-[#D6B25E]/20">
                    Intro
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-semibold italic text-white/90 mb-6 leading-[1.1]">
                  Hi, I'm Brandon.
                </h3>

                <div className="space-y-4 text-sm md:text-base text-white/60 leading-relaxed max-w-md font-light">
                  <p>
                    A product designer from Indonesia turning ideas into{" "}
                    <span className="text-white font-medium">simple</span>,{" "}
                    <span className="text-white font-medium">elegant</span>, and{" "}
                    <span className="text-[#D6B25E] font-medium">
                      fun-to-use
                    </span>{" "}
                    digital experiences.
                  </p>
                  <p>
                    I work where design meets code — making interfaces feel
                    intentional and alive.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-12 relative z-10">
                {introTags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#D6B25E] hover:text-black hover:border-[#D6B25E] transition-all duration-300 font-mono font-semibold cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Experience */}
          <FadeUp delay={0.2} className="md:col-span-1">
            <div className="h-full p-8 flex flex-col items-center justify-center text-center min-h-[220px] rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-[#D6B25E]/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-md">
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-[#D6B25E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-6xl md:text-7xl font-bold italic text-transparent bg-clip-text bg-gradient-to-b from-[#D6B25E] to-[#A38543] mb-3 group-hover:scale-110 transition-transform duration-500">
                2+
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 font-mono">
                Years Exp.
              </span>
            </div>
          </FadeUp>

          {/* Projects */}
          <FadeUp delay={0.3} className="md:col-span-1">
            <div className="h-full p-8 flex flex-col items-center justify-center text-center min-h-[220px] rounded-3xl bg-gradient-to-bl from-white/[0.03] to-transparent border border-white/[0.05] hover:border-[#D45D3A]/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-md">
              <span className="text-6xl md:text-7xl font-bold text-white/90 mb-3 group-hover:scale-110 transition-transform duration-500">
                10+
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 font-mono">
                Projects Done
              </span>
            </div>
          </FadeUp>

          {/* Terminal */}
          <FadeUp delay={0.4} className="md:col-span-2">
            <div className="h-full p-6 md:p-8 rounded-3xl bg-[#0a0a0f] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 group relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.05]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.5)]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.6rem] tracking-[0.2em] text-white/40 uppercase font-mono">
                    philosophy.ts
                  </span>
                </div>
              </div>

              <div className="font-mono text-[0.75rem] md:text-[0.85rem] leading-[2] text-white/70">
                <p>
                  <span className="text-[#C678DD]">const</span>{" "}
                  <span className="text-[#E5C07B]">philosophy</span>{" "}
                  <span className="text-[#56B6C2]">=</span> {"{"}
                </p>
                <p className="pl-6">
                  <span className="text-[#E06C75]">quality</span>:{" "}
                  <span className="text-[#98C379]">"uncompromised"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#E06C75]">efficiency</span>:{" "}
                  <span className="text-[#D19A66]">true</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#E06C75]">userFirst</span>:{" "}
                  <span className="text-[#D19A66]">true</span>,
                </p>
                <p>
                  {"}"}; <span className="animate-pulse text-[#61AFEF]">_</span>
                </p>
              </div>
              <Code2 className="absolute bottom-6 right-6 w-16 h-16 text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none" />
            </div>
          </FadeUp>

          {/* Design Skills */}
          <FadeUp delay={0.5} className="md:col-span-1 lg:col-span-1">
            <div className="h-full p-6 md:p-8 flex flex-col justify-between min-h-[280px] rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D6B25E]/30 transition-all duration-500 group relative backdrop-blur-md">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#D6B25E]/10 border border-[#D6B25E]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D6B25E] group-hover:rotate-6 transition-all duration-500">
                  <PenTool className="w-5 h-5 text-[#D6B25E] group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-2xl font-semibold italic text-white/90 mb-1">
                  Design
                </h4>
                <p className="text-[0.6rem] text-white/50 uppercase tracking-[0.2em] font-mono mb-8">
                  insight → impact
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between text-[0.6rem] font-mono tracking-[0.15em] mb-3 uppercase">
                    <span className="text-white/60">Figma</span>
                    <span className="text-[#D6B25E] font-bold">95%</span>
                  </div>
                  <MeterBar pct={95} color="#D6B25E" delay={0.2} />
                </div>
                <div>
                  <div className="flex justify-between text-[0.6rem] font-mono tracking-[0.15em] mb-3 uppercase">
                    <span className="text-white/60">Canva</span>
                    <span className="text-[#D6B25E] font-bold">80%</span>
                  </div>
                  <MeterBar pct={80} color="#D6B25E" delay={0.3} />
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Frontend Skills */}
          <FadeUp delay={0.6} className="md:col-span-1 lg:col-span-1">
            <div className="h-full p-6 md:p-8 flex flex-col justify-between min-h-[280px] rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#35d0ff]/30 transition-all duration-500 group relative backdrop-blur-md">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#35d0ff]/10 border border-[#35d0ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#35d0ff] group-hover:-rotate-6 transition-all duration-500">
                  <Code2 className="w-5 h-5 text-[#35d0ff] group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-2xl font-semibold italic text-white/90 mb-1">
                  Frontend
                </h4>
                <p className="text-[0.6rem] text-white/50 uppercase tracking-[0.2em] font-mono mb-8">
                  concept → code
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between text-[0.6rem] font-mono tracking-[0.15em] mb-3 uppercase">
                    <span className="text-white/60">React.js</span>
                    <span className="text-[#35d0ff] font-bold">90%</span>
                  </div>
                  <MeterBar pct={90} color="#35d0ff" delay={0.3} />
                </div>
                <div>
                  <div className="flex justify-between text-[0.6rem] font-mono tracking-[0.15em] mb-3 uppercase">
                    <span className="text-white/60">JavaScript</span>
                    <span className="text-[#35d0ff] font-bold">85%</span>
                  </div>
                  <MeterBar pct={85} color="#35d0ff" delay={0.4} />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-20 opacity-80">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D6B25E]/30 to-[#D6B25E]/30" />
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#D6B25E] font-mono font-semibold">
            Academic Pathway
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D6B25E]/30 to-[#D6B25E]/30" />
        </div>

        {/* Timeline Header */}
        <FadeUp className="text-center mb-20">
          <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light italic text-white/90 leading-tight mb-4">
            Educational{" "}
            <span className="font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#A38543]">
              Journey.
            </span>
          </h3>
          <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto leading-relaxed font-light">
            Shaping technical skills and creative thinking through structured
            learning.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-0 pb-10">
          {/* Main Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 z-0" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D6B25E] via-[#D6B25E]/50 to-transparent md:-translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(214,178,94,0.5)]"
          />

          <div className="space-y-20 md:space-y-32">
            {educationData.map((item, i) => {
              const isLeft = i % 2 === 0;
              const isCurrent = item.status === "current";

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Node */}
                  <div className="absolute left-[39px] md:left-1/2 top-8 md:top-12 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-full bg-[#0a0a0f] flex items-center justify-center border-4 shadow-xl transition-transform duration-500 hover:scale-110 ${
                        isCurrent
                          ? "border-[#D6B25E] shadow-[0_0_20px_rgba(214,178,94,0.4)]"
                          : "border-white/10"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          isCurrent
                            ? "bg-[#D6B25E] animate-pulse"
                            : "bg-white/30"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <FadeUp
                    delay={0.1}
                    className={`w-full pl-28 md:pl-0 md:w-[42%] ${isLeft ? "md:pr-24" : "md:pl-24"}`}
                  >
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D6B25E]/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] backdrop-blur-md relative overflow-hidden group">
                      {/* Subtle hover gradient inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D6B25E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[0.6rem] tracking-[0.2em] font-semibold uppercase font-mono ${
                              isCurrent
                                ? "border-[#D6B25E]/40 text-[#D6B25E] bg-[#D6B25E]/10"
                                : "border-white/10 text-white/60 bg-white/5"
                            }`}
                          >
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </div>
                          {isCurrent && (
                            <div className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B25E] opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6B25E]" />
                            </div>
                          )}
                        </div>

                        <h4 className="text-2xl md:text-3xl font-semibold mb-2 text-white/90 leading-tight">
                          {item.school}
                        </h4>

                        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#D6B25E] mb-6 font-mono font-bold">
                          {item.role}
                        </p>

                        <p className="text-sm text-white/60 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
