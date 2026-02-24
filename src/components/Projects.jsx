import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Layers, Code2, Database, Layout } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Parallax watermark
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  // Mouse specular (Cahaya bulat mengikuti kursor)
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

  // --- DATA PROJECTS ---
  const projects = [
    {
      id: 1,
      title: "InterStellar",
      category: "Front End",
      image: "img/Interstellar.png",
      description: "Website to explore everything from tiny particles to the universe with AI",
      tech: ["Three.js", "API", "React"],
      links: {
        demo: "https://interstellar-phi-beryl.vercel.app/",
        github: "https://github.com/SakaGintoki/Interstellar",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Masakin Application",
      category: "Front End",
      image: "img/Masakin1.png",
      description: "Aplication with a chatbot to check calories, get recipes, and buy ingredients instantly.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
      links: { demo: "#", github: "#" },
      featured: false,
    },
    {
      id: 3,
      title: "Hack.id",
      category: "Front End",
      image: "img/Hack.id.png",
      description: "AI-powered website that helps you discover hackathon events from around the world.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "https://github.com/DarveshAziz/Hack.id" },
      featured: false,
    },
    {
      id: 4,
      title: "DeafSpace",
      category: "UI/UX",
      image: "img/DeafSpace.png",
      description: "App that allows deaf individuals to easily order sign language interpreters",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 5,
      title: "Kiddora",
      category: "UI/UX",
      image: "img/Kiddora.png",
      description: "A platform that helps families find dependable babysitters to ensure quality care for their little ones.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 6,
      title: "Furever Pet Care",
      category: "UI/UX",
      image: "img/Furever.png",
      description: "App for pet services, providing care and support to ensure the well-being of animals.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "#" },
      featured: false,
    },
    {
      id: 7,
      title: "Infotional",
      category: "UI/UX",
      image: "img/Infotional.png",
      description: "App that helps students access scholarships, mentorship, and various educational resources.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 8,
      title: "LittleSteps",
      category: "Front End",
      image: "img/LittleKids.png",
      description: "App that helps parents find trusted babysitters, ensuring quality care.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "https://github.com/SakaGintoki/LittleSteps" },
      featured: false,
    },
    {
      id: 9,
      title: "WeCare",
      category: "UI/UX",
      image: "img/WeCare.png",
      description: "App that enables victims of sexual harassment to quickly contact the police or authorities.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 10,
      title: "Bundaku",
      category: "UI/UX",
      image: "img/Bundaku.png",
      description: "App for moms and babies, for pregnancy monitoring and stunting.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 11,
      title: "Legana",
      category: "UI/UX",
      image: "img/Legana.png",
      description: "App that analyzes legal documents or issues from photos or text and suggests relevant laws.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 12,
      title: "Sehat Mental UB",
      category: "UI/UX",
      image: "img/Sehatmental.png",
      description: "A platform designed to help students access emotional and psychological support more easily.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 13,
      title: "Detection License Plate",
      category: "Data",
      image: "img/plate.avif",
      description: "Using a YOLOv8 model to detect vehicle license plates and EasyOCR to read the plate text.",
      tech: ["Python", "YOLOv8", "EasyOCR"],
      links: { demo: "#", github: "#" },
      featured: true,
    },
    {
      id: 14,
      title: "Senggreng Tourism Website",
      category: "Front End",
      image: "img/desasenggreng.png",
      description: "A tourism website for Senggreng Village, showcasing tourist attractions and restaurants.",
      tech: ["Three.js", "API", "React"],
      links: { demo: "https://desa-senggreng.vercel.app/home", github: "https://github.com/Weedanta/Desa-Senggreng" },
      featured: false,
    },
  ];

  const categories = [
    { name: "All", icon: Layers },
    { name: "UI/UX", icon: Layout },
    { name: "Front End", icon: Code2 },
    { name: "Data", icon: Database },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Animation
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* Overflow-hidden mencegah grain bocor */}
      <section
        id="projects"
        ref={sectionRef}
        className="relative w-full proj-bg grain overflow-hidden text-[var(--bone)] py-24 md:py-32"
      >
        {/* ── RICH & SEAMLESS BACKGROUND ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          {/* Base Seamless Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-100 z-10" />

          {/* New Circular Dot Grid */}
          <div className="dot-grid" />

          {/* Animated Circular Studio Lights */}
          <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.06] bg-[var(--plum)] animate-pulse-slow" />
          <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[160px] opacity-[0.05] bg-[var(--haze)] animate-float-slow" />
          <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.06] bg-[var(--metal)] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Vignette */}
        <div className="vignette" />

        {/* Watermark Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-[5%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30 select-none"
        >
          <span className="f-display text-[clamp(7rem,22vw,22rem)] font-bold italic outline leading-none whitespace-nowrap">
            WORKS
          </span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ── HEADER ── */}
          <FadeUp>
            <motion.div
              style={{ y: headY }}
              className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[var(--metal)] opacity-80" />
                  <span className="f-mono text-[0.62rem] tracking-[0.32em] uppercase text-[var(--metal)]">
                    Vol. 04 — Selected Works
                  </span>
                </div>

                <h2 className="f-display text-[clamp(3.2rem,6.8vw,6.2rem)] font-light italic leading-[0.92] tracking-tight">
                  Crafting
                </h2>
                <h2 className="f-sans text-[clamp(3.1rem,6.6vw,6.0rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]">
                  Digital{" "}
                  <span
                    className="f-display italic font-semibold"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.2px rgba(214,178,94,0.55)",
                    }}
                  >
                    Experiences.
                  </span>
                </h2>

                <p className="f-sans mt-6 text-sm md:text-base leading-[1.9] text-[rgba(154,148,138,0.92)] max-w-xl">
                  A curated archive of interface systems, shipped products, and experiments—designed with taste, built with discipline.
                </p>
              </div>

              {/* ── ROUNDED TABS ── */}
              <div className="seg">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    data-active={activeCategory === cat.name}
                    className="f-mono text-[0.62rem] tracking-[0.22em] uppercase"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </FadeUp>

          {/* ── CARDS GRID ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={containerStagger}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => navigate(`/project/${project.id}`)}
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  className={`card group cursor-pointer ${
                    project.featured
                      ? "md:col-span-2 lg:col-span-2 row-span-2 min-h-[420px]"
                      : "min-h-[320px]"
                  }`}
                >
                  <div className="topline" />
                  
                  {/* Circular Screws */}
                  <div className="screw" style={{ top: 16, left: 16 }} />
                  <div className="screw" style={{ top: 16, right: 16 }} />

                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="film" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.18)] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-4">
                      {/* Rounded Pill Badge */}
                      <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase px-4 py-1.5 rounded-full border border-[rgba(214,178,94,0.25)] bg-[rgba(0,0,0,0.4)] backdrop-blur-md text-[rgba(244,240,232,0.92)]">
                        {project.category}
                      </span>

                      <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[rgba(154,148,138,0.9)] bg-[rgba(0,0,0,0.4)] backdrop-blur-md px-3 py-1 rounded-full">
                        ID-{String(project.id).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className={`text-[var(--bone)] leading-tight ${
                        project.featured
                          ? "f-display text-3xl md:text-4xl font-semibold italic"
                          : "f-display text-2xl font-semibold italic"
                      }`}
                    >
                      {project.title}
                    </h3>

                   

                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="f-mono text-[0.6rem] tracking-[0.14em] text-[rgba(214,178,94,0.85)]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Micro hover hint */}
                    <div className="mt-6 flex items-center gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[var(--metal)]">
                        Open case study
                      </span>
                      <div className="h-px flex-1 bg-[rgba(214,178,94,0.22)]" />
                      <span className="f-mono text-[0.55rem] tracking-[0.22em] uppercase text-[rgba(244,240,232,0.78)]">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Footer count */}
          <motion.div
            className="mt-14 text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <p className="f-mono text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(154,148,138,0.85)] bg-[rgba(255,255,255,0.03)] inline-block px-6 py-2 rounded-full border border-[rgba(214,178,94,0.15)]">
              Showing {filteredProjects.length} projects — {activeCategory}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/* Small helper to match other sections */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 26, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

export default Projects;