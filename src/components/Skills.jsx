import React, { useRef, useEffect, useState } from "react";
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ─── TERMINAL LOGIC ────────────────────────────────────────────── */
const TerminalLogs = () => {
  const [logs, setLogs] = useState(["> Initializing core modules..."]);
  const allLogs = [
    "> Mounting React DOM...",
    "> Fetching state from store...",
    "> Hydrating Next.js chunks...",
    "> Compiling Tailwind utility classes...",
    "> SUCCESS: Module bundler ready.",
    "> Rendering spatial geometries...",
    "> Awaiting user interaction...",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, allLogs[index % allLogs.length]];
        return newLogs.length > 5 ? newLogs.slice(1) : newLogs;
      });
      index++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] md:text-xs text-[#61DAFB]/70 mt-6 h-20 md:h-24 overflow-hidden flex flex-col justify-end">
      {logs.map((log, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-1 truncate">
          {log}
        </motion.div>
      ))}
      <div className="animate-pulse w-2 h-3 bg-[#61DAFB] mt-1" />
    </div>
  );
};

/* ─── DATA BAR BRUTAL ───────────────────────────────────────────── */
const BrutalMeter = ({ label, pct, color }) => (
  <div className="w-full flex flex-col gap-1 mb-4">
    <div className="flex justify-between items-end">
      <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-white font-bold">{label}</span>
      <span className="font-black text-lg md:text-xl tracking-tighter" style={{ color }}>{pct}%</span>
    </div>
    <div className="w-full h-2 bg-white/10 flex">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full relative overflow-hidden"
        style={{ background: color }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
      </motion.div>
    </div>
  </div>
);

/* ─── MAIN SKILLS SECTION ───────────────────────────────────────── */
const Skills = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const fastProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // SVG Pathway Draw Effect
  const pathLength = useSpring(fastProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Adaptive Kinetic Typography (Kurangi jarak geser di Mobile agar tidak tembus layar)
  const headerLeftX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -50] : [0, -300]);
  const headerRightX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 50] : [0, 300]);
  
  // Parallax untuk Desktop (Dinonaktifkan di mobile agar tidak bertumpuk)
  const floatY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const floatY4 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-[120vh] bg-[#050505] text-white selection:bg-[#CCFF00] selection:text-black pt-24 md:pt-32 pb-24 md:pb-40 overflow-hidden"
    >
      {/* Target Crosshair Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 md:px-12 w-full h-full flex flex-col">
        
        {/* ── KINETIC HEADER ── */}
        <div className="mb-20 md:mb-32 relative z-20 pointer-events-none">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.5em] text-[#CCFF00] uppercase">
              [ 03 ] System Arsenal
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#CCFF00]/50 to-transparent" />
          </div>
          
          <div className="flex flex-col whitespace-nowrap overflow-visible">
            <motion.h2 
              className="text-[clamp(3.5rem,12vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter"
              style={{ x: headerLeftX }}
            >
              INSTRUMENTS
            </motion.h2>
            <motion.h2 
              className="text-[clamp(3.5rem,12vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-transparent pl-[5vw] md:pl-[20vw]"
              style={{ WebkitTextStroke: "2px white", x: headerRightX }}
            >
              OF CREATION.
            </motion.h2>
          </div>
        </div>

        {/* ── MAIN SPATIAL WORKSPACE (The Blueprint Area) ── */}
        <div className="relative w-full flex flex-col md:flex-row gap-12 md:gap-8 md:min-h-[800px]">
          
          {/* LEFT: THE REACT TERMINAL */}
          <motion.div 
            className="relative w-full md:w-[45%] lg:w-[40%] bg-[#080808] border border-white/10 z-20 shadow-[10px_10px_0px_rgba(97,218,251,0.05)] md:shadow-[20px_20px_0px_rgba(97,218,251,0.05)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center border-b border-white/10 p-3 md:p-4 bg-white/5">
              <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[#61DAFB]">
                process: React_Eco.exe
              </span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#61DAFB]" />
                <div className="w-2 h-2 bg-white/20" />
                <div className="w-2 h-2 bg-white/20" />
              </div>
            </div>

            <div className="p-6 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(97,218,251,0.05)_50%)] bg-[length:100%_4px] z-10" />

              <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 relative z-20">
                Front-End<br/>
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #61DAFB" }}>Architecture</span>
              </h3>
              <p className="font-mono text-[9px] md:text-[10px] text-white/50 leading-relaxed uppercase max-w-sm mb-8 md:mb-12 relative z-20">
                Engineering scalable web applications leveraging modern React methodologies and server-side rendering.
              </p>

              <div className="relative z-20">
                <BrutalMeter label="React.js / Hooks" pct={95} color="#61DAFB" />
                <BrutalMeter label="Next.js / SSR" pct={88} color="#ffffff" />
              </div>

              <TerminalLogs />
            </div>
          </motion.div>

          {/* RIGHT: FLOATING CONSTELLATION NODES */}
          <div className="relative w-full md:w-[55%] lg:w-[60%] flex flex-col gap-6 md:block mt-4 md:mt-0">
            
            {/* THE DYNAMIC PATHWAY SVG (Desktop Only) */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <circle cx="0" cy="400" r="600" stroke="rgba(255,255,255,0.04)" strokeWidth="2" fill="none" strokeDasharray="10 15" />
              <circle cx="0" cy="400" r="15" fill="white" />

              <path d="M 0 400 C 150 400, 200 150, 450 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 0 400 C 250 400, 400 350, 750 350" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 0 400 C 150 400, 300 650, 550 650" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 0 400 C 200 400, 450 850, 750 800" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

              <motion.path d="M 0 400 C 150 400, 200 150, 450 150" fill="none" stroke="#C2B227" strokeWidth="2" style={{ pathLength }} />
              <motion.path d="M 0 400 C 250 400, 400 350, 750 350" fill="none" stroke="#38B2AC" strokeWidth="2" style={{ pathLength }} />
              <motion.path d="M 0 400 C 150 400, 300 650, 550 650" fill="none" stroke="#E34F26" strokeWidth="2" style={{ pathLength }} />
              <motion.path d="M 0 400 C 200 400, 450 850, 750 800" fill="none" stroke="#F05032" strokeWidth="2" style={{ pathLength }} />
            </svg>

            {/* Mobile Vertical Pathway Line (Spine) */}
            <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/10 z-0" />
            <motion.div 
              className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px] bg-[#CCFF00] z-0 origin-top" 
              style={{ scaleY: pathLength }} 
            />

            {/* NODE 1: JavaScript */}
            <motion.div 
              className="relative md:absolute md:top-[12%] md:left-[45%] md:-translate-x-1/2 bg-[#C2B227] p-5 flex flex-row items-center gap-4 z-10 w-[85%] ml-auto md:ml-0 md:w-auto shadow-[6px_6px_0px_rgba(0,0,0,0.5)] border border-[#C2B227]"
              style={{ y: isMobile ? 0 : floatY1 }}
            >
              <div className="absolute top-1/2 right-[100%] w-6 md:w-0 h-[2px] bg-white/20 md:hidden" />
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center shrink-0">
                <span className="font-black text-xl text-white">JS</span>
              </div>
              <div className="overflow-hidden">
                <h4 className="font-black uppercase text-lg md:text-xl text-white tracking-tight leading-none mb-1">JavaScript</h4>
                <p className="font-mono text-[8px] md:text-[9px] text-white/80 uppercase truncate">ES6+ / Async Logic</p>
              </div>
            </motion.div>

            {/* NODE 2: Tailwind */}
            <motion.div 
              className="relative md:absolute md:top-[40%] md:left-[75%] md:-translate-x-1/2 bg-[#050505] border border-[#38B2AC]/40 p-5 flex flex-row items-center gap-4 z-10 w-[85%] ml-auto md:ml-0 md:w-auto"
              style={{ y: isMobile ? 0 : floatY2 }}
            >
              <div className="absolute top-1/2 right-[100%] w-6 md:w-0 h-[2px] bg-white/20 md:hidden" />
              <SiTailwindcss className="w-8 h-8 text-[#38B2AC] shrink-0" />
              <div className="overflow-hidden">
                <h4 className="font-black uppercase text-lg md:text-xl text-white tracking-tight leading-none mb-1">Tailwind</h4>
                <p className="font-mono text-[8px] md:text-[9px] text-[#38B2AC] uppercase truncate">Atomic Styling</p>
              </div>
            </motion.div>

            {/* NODE 3: HTML5 */}
            <motion.div 
              className="relative md:absolute md:top-[75%] md:left-[55%] md:-translate-x-1/2 bg-[#050505] border border-[#E34F26]/40 p-5 flex flex-row items-center gap-4 z-10 w-[85%] ml-auto md:ml-0 md:w-auto"
              style={{ y: isMobile ? 0 : floatY3 }}
            >
              <div className="absolute top-1/2 right-[100%] w-6 md:w-0 h-[2px] bg-white/20 md:hidden" />
              <FaHtml5 className="w-8 h-8 text-[#E34F26] shrink-0" />
              <div className="overflow-hidden">
                <h4 className="font-black uppercase text-lg md:text-xl text-white tracking-tight leading-none mb-1">HTML5</h4>
                <p className="font-mono text-[8px] md:text-[9px] text-[#E34F26] uppercase truncate">Semantic DOM</p>
              </div>
            </motion.div>

            {/* NODE 4: Git */}
            <motion.div 
              className="relative md:absolute md:top-[90%] md:left-[75%] md:-translate-x-1/2 bg-[#050505] border border-[#F05032]/40 p-5 flex flex-row items-center gap-4 z-10 w-[85%] ml-auto md:ml-0 md:w-auto"
              style={{ y: isMobile ? 0 : floatY4 }}
            >
              <div className="absolute top-1/2 right-[100%] w-6 md:w-0 h-[2px] bg-white/20 md:hidden" />
              <FaGitAlt className="w-8 h-8 text-[#F05032] shrink-0" />
              <div className="overflow-hidden">
                <h4 className="font-black uppercase text-lg md:text-xl text-white tracking-tight leading-none mb-1">Git</h4>
                <p className="font-mono text-[8px] md:text-[9px] text-[#F05032] uppercase truncate">Version Control</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── BOTTOM: CAD BLUEPRINT (FIGMA) ── */}
        <motion.div 
          className="mt-16 md:mt-32 relative w-full bg-[#E5E5E5] text-black border-2 border-black p-6 sm:p-8 md:p-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px]" />
          
          <div className="hidden sm:flex absolute top-4 left-0 w-full border-t border-black/30 justify-between px-4 font-mono text-[8px]">
            <span>| 0.00</span>
            <span>WIDTH: 100% |</span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-12">
            
            {/* Text & Title */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white flex items-center justify-center shrink-0">
                  <FaFigma className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-mono text-[9px] md:text-[10px] font-bold uppercase border border-black px-3 py-1">
                  Drafting // Prototyping
                </div>
              </div>
              
              <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
                Visual <br className="hidden sm:block"/> Architecture.
              </h3>
              
              <p className="font-mono text-[10px] md:text-xs uppercase leading-relaxed max-w-md font-bold text-black/60">
                Translating raw concepts into precise, mathematically sound UI components and interactive high-fidelity prototypes.
              </p>
            </div>

            {/* Stats */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="border-2 border-black p-5 md:p-6 bg-white shadow-[6px_6px_0px_rgba(255,51,85,1)] md:shadow-[10px_10px_0px_rgba(255,51,85,1)]">
                <div className="flex justify-between items-end mb-2 border-b border-black/20 pb-2">
                  <span className="font-mono text-[10px] md:text-xs font-black uppercase">UI/UX Systems</span>
                  <span className="font-black text-2xl md:text-3xl text-[#FF3355]">95%</span>
                </div>
                <div className="w-full h-3 md:h-4 border border-black mt-2 flex">
                  <div className="w-[95%] h-full bg-[#FF3355]" />
                </div>

                <div className="flex justify-between items-end mb-2 border-b border-black/20 pb-2 mt-6 md:mt-8">
                  <span className="font-mono text-[10px] md:text-xs font-black uppercase">Prototyping</span>
                  <span className="font-black text-2xl md:text-3xl text-black">88%</span>
                </div>
                <div className="w-full h-3 md:h-4 border border-black mt-2 flex">
                  <div className="w-[88%] h-full bg-black bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,white_4px,white_8px)]" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
