import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const educationData = [
  {
    id: 1,
    year: "2020",
    title: "ST. ALBERTUS",
    role: "SCIENCE MAJOR",
    desc: "Analytical foundation & systematic problem-solving.",
    align: "left",
    deskTop: "5%",
  },
  {
    id: 2,
    year: "2023",
    title: "BRAWIJAYA",
    role: "INFORMATICS ENG.",
    desc: "Front-End Dev, UI/UX, & Modern Web Architecture.",
    align: "right",
    deskTop: "40%",
  },
  {
    id: 3,
    year: "NOW",
    title: "MALANG, ID",
    role: "CREATIVE DEV",
    desc: "Building digital experiences that defy gravity.",
    align: "left",
    deskTop: "75%",
  },
];

const SKILLS_1 = ["FIGMA", "UI/UX", "PROTOTYPING", "CANVA", "RESEARCH", "WIREFRAMING"];
const SKILLS_2 = ["REACT", "TAILWIND", "FRAMER MOTION", "TYPESCRIPT", "NEXT.JS", "JAVASCRIPT"];

const MarqueeItem = ({ text, direction = 1, speed = 2 }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  const xTransform = useTransform(scrollVelocity, [0, 1], [0, direction * -100 * speed]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-2 flex w-full">
      <motion.div className="flex gap-4 md:gap-8 items-center will-change-transform" style={{ x: xTransform }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4 md:gap-8 items-center shrink-0">
            {text.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[clamp(1.75rem,6vw,5rem)] font-black uppercase tracking-tighter">
                  {item}
                </span>
                <span className="text-base md:text-3xl text-gray-500">*</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BrutalTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full flex flex-col gap-14 md:block md:min-h-[120vh] mt-14 md:mt-32">
      <svg
        className="hidden md:block absolute left-1/2 top-0 w-full h-full -translate-x-1/2 pointer-events-none z-0"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 50 0 C 80 200, 20 400, 50 600 C 80 800, 20 900, 50 1000"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeDasharray="10 10"
        />
        <motion.path
          d="M 50 0 C 80 200, 20 400, 50 600 C 80 800, 20 900, 50 1000"
          fill="none"
          stroke="#FF3355"
          strokeWidth="3"
          style={{ pathLength }}
        />
      </svg>

      <svg className="md:hidden absolute left-[1.15rem] top-0 w-2 h-full pointer-events-none z-0" preserveAspectRatio="none">
        <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
        <motion.line x1="1" y1="0" x2="1" y2="100%" stroke="#FF3355" strokeWidth="2" style={{ pathLength }} />
      </svg>

      {educationData.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className={`static md:absolute w-full pl-10 sm:pl-12 md:pl-0 md:w-[45vw] md:px-6 ${
            node.align === "left" ? "md:left-0 md:text-right md:pr-20" : "md:right-0 md:text-left md:pl-20"
          }`}
          style={{ top: node.deskTop }}
        >
          <div className="md:hidden absolute left-[0.9rem] w-3 h-3 bg-[#FF3355] rounded-full translate-y-2 z-10 shadow-[0_0_15px_#FF3355]" />

          <div className="inline-block w-full">
            <h4 className="text-[clamp(2.2rem,8vw,5vw)] font-black leading-none tracking-tighter uppercase">
              {node.title}
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#FF3355]">
                [{node.year}] - {node.role}
              </span>
              <p
                className={`text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-sm ${
                  node.align === "left" ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {node.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-[#FF3355] selection:text-white"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 w-full pt-20 md:pt-32 pb-28 md:pb-40 max-w-[1800px] mx-auto">
        <div className="px-4 md:px-12 mb-16 md:mb-32">
          <p className="font-mono text-[#CCFF00] tracking-widest mb-6 md:mb-8 text-[10px] md:text-sm uppercase">
            (01) The Architect Behind The Code
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-8 xl:gap-12 items-end">
            <div className="flex flex-col uppercase leading-[0.85] md:leading-[0.8] min-w-0">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="text-[clamp(3.4rem,15vw,12rem)] font-black tracking-tighter"
              >
                BRANDON
              </motion.h1>
              <motion.h1
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.1 }}
                className="text-[clamp(3.4rem,15vw,12rem)] font-black tracking-tighter text-transparent"
                style={{ WebkitTextStroke: "2px white" }}
              >
                GERALDO
              </motion.h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                className="text-[clamp(3.4rem,15vw,12rem)] font-black tracking-tighter text-[#FF3355]"
              >
                ADJI.
              </motion.h1>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "circOut", delay: 0.25 }}
              className="w-full xl:justify-self-end"
            >
              <div className="bg-white text-black p-4 sm:p-5 md:p-8 w-full max-w-[420px] xl:ml-auto xl:rotate-3 shadow-2xl">
                <p className="font-bold text-base md:text-xl leading-tight">
                  I don't just write React components. I engineer brutal, spatial, and hyper-functional experiences.
                </p>
                <div className="mt-4 md:mt-6 border-t border-black/20 pt-3 flex justify-between font-mono text-[10px] md:text-xs font-bold">
                  <span>UX + DEV</span>
                  <span>BASED IN ID</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-10 md:py-20 bg-white text-black transform -skew-y-2 md:-skew-y-3 overflow-hidden">
          <div className="mb-4 px-4 md:px-6 font-mono font-bold tracking-widest text-[10px] md:text-sm flex justify-between gap-4 border-b-2 border-black/10 pb-4">
            <span>// ARSENAL</span>
            <span>SCROLL VELOCITY MAPPED</span>
          </div>
          <MarqueeItem text={SKILLS_1} direction={1} speed={1.2} />
          <MarqueeItem text={SKILLS_2} direction={-1} speed={1.5} />
        </div>

        <div className="px-4 md:px-12 mt-20 md:mt-40 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-[rgba(255,255,255,0.2)] pb-4 mb-10 gap-4">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter uppercase leading-none">
              Academic <br className="hidden md:block" />{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                Pathway
              </span>
            </h2>
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-500 md:mb-2">
              002 / TIMELINE
            </span>
          </div>
          <BrutalTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;
