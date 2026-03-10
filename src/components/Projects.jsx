import React, { useState, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Layers, Code2, Database, Layout } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Parallax watermark
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  // Mouse Spotlight Effect
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  // --- DATA PROJECTS ---
  // --- DATA PROJECTS ---
  const projects = [
    {
      id: 1,
      title: "InterStellar",
      category: "Front End",
      image: "img/Interstellar.png",
      description:
        "Website to explore everything from tiny particles to the universe with AI",
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
      description:
        "Aplication with a chatbot to check calories, get recipes, and buy ingredients instantly.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
      links: { demo: "#", github: "#" },
      featured: false,
    },
    {
      id: 3,
      title: "Hack.id",
      category: "Front End",
      image: "img/Hack.id.png",
      description:
        "AI-powered website that helps you discover hackathon events from around the world.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "https://github.com/DarveshAziz/Hack.id" },
      featured: false,
    },
    {
      id: 4,
      title: "DeafSpace",
      category: "UI/UX",
      image: "img/DeafSpace.png",
      description:
        "App that allows deaf individuals to easily order sign language interpreters",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 5,
      title: "Kiddora",
      category: "UI/UX",
      image: "img/Kiddora.png",
      description:
        "A platform that helps families find dependable babysitters to ensure quality care for their little ones.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 6,
      title: "Furever Pet Care",
      category: "UI/UX",
      image: "img/Furever.png",
      description:
        "App for pet services, providing care and support to ensure the well-being of animals.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "#" },
      featured: false,
    },
    {
      id: 7,
      title: "Infotional",
      category: "UI/UX",
      image: "img/Infotional.png",
      description:
        "App that helps students access scholarships, mentorship, and various educational resources.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 8,
      title: "LittleSteps",
      category: "Front End",
      image: "img/LittleKids.png",
      description:
        "App that helps parents find trusted babysitters, ensuring quality care.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: {
        demo: "#",
        github: "https://github.com/SakaGintoki/LittleSteps",
      },
      featured: false,
    },
    {
      id: 9,
      title: "WeCare",
      category: "UI/UX",
      image: "img/WeCare.png",
      description:
        "App that enables victims of sexual harassment to quickly contact the police or authorities.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 10,
      title: "Bundaku",
      category: "UI/UX",
      image: "img/Bundaku.png",
      description:
        "App for moms and babies, for pregnancy monitoring and stunting.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 11,
      title: "Legana",
      category: "UI/UX",
      image: "img/Legana.png",
      description:
        "App that analyzes legal documents or issues from photos or text and suggests relevant laws.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: true,
    },
    {
      id: 12,
      title: "Sehat Mental UB",
      category: "UI/UX",
      image: "img/Sehatmental.png",
      description:
        "A platform designed to help students access emotional and psychological support more easily.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#" },
      featured: false,
    },
    {
      id: 13,
      title: "Detection License Plate",
      category: "Data",
      image: "img/plate.avif",
      description:
        "Using a YOLOv8 model to detect vehicle license plates and EasyOCR to read the plate text.",
      tech: ["Python", "YOLOv8", "EasyOCR"],
      links: { demo: "#", github: "#" },
      featured: true,
    },
    {
      id: 14,
      title: "Senggreng Tourism Website",
      category: "Front End",
      image: "img/desasenggreng.png",
      description:
        "A tourism website for Senggreng Village, showcasing tourist attractions and restaurants.",
      tech: ["Three.js", "API", "React"],
      links: {
        demo: "https://desa-senggreng.vercel.app/home",
        github: "https://github.com/Weedanta/Desa-Senggreng",
      },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#07070a] py-24 md:py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#D6B25E]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#7C3AED]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transform-gpu" />

      {/* Watermark Parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-[5%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30 select-none"
      >
        <span className="text-[clamp(6rem,20vw,20rem)] font-black italic leading-none whitespace-nowrap text-white/[0.02] tracking-tighter">
          WORKS
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <FadeUp>
          <motion.div
            style={{ y: headY }}
            className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#D6B25E] opacity-80" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#D6B25E] font-mono font-semibold">
                  Vol. 04 — Selected Works
                </span>
              </div>

              <h2 className="text-[clamp(3.2rem,6vw,6.2rem)] font-light italic leading-[1] tracking-tight text-white/90">
                Crafting
              </h2>
              <h2 className="text-[clamp(3.1rem,6vw,6.0rem)] font-extrabold uppercase leading-[1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#E5C98A]">
                Digital Experiences.
              </h2>

              <p className="font-light mt-6 text-sm md:text-base leading-relaxed text-white/60 max-w-xl">
                A curated archive of interface systems, shipped products, and
                experiments—designed with taste, built with discipline.
              </p>
            </div>

            {/* PERBAIKAN TABS: Layout flex horizontal dengan hide scrollbar untuk HP */}
            <div className="w-full lg:w-auto overflow-hidden">
              <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex bg-white/[0.02] border border-white/10 p-1.5 rounded-full backdrop-blur-md w-max">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.name;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`relative px-6 py-2.5 rounded-full font-mono text-[0.6rem] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-500 ${
                          isActive
                            ? "text-[#07070a] font-bold"
                            : "text-white/50 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-[#D6B25E] to-[#E5C98A] rounded-full shadow-[0_0_15px_rgba(214,178,94,0.4)]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                            style={{ zIndex: -1 }}
                          />
                        )}
                        <span className="relative z-10">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </FadeUp>

        {/* CARDS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
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
                onMouseMove={handleMouseMove}
                className={`group cursor-pointer relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D6B25E]/30 transition-colors duration-500 backdrop-blur-md ${
                  project.featured
                    ? "md:col-span-2 lg:col-span-2 row-span-2 min-h-[420px]"
                    : "min-h-[320px]"
                }`}
              >
                {/* Spotlight Hover Glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214,178,94,0.15), transparent 40%)`,
                  }}
                />

                {/* Decorative Screws */}
                <div className="absolute top-5 left-5 w-2 h-2 rounded-full border border-white/20 flex items-center justify-center z-20 opacity-50">
                  <div className="w-0.5 h-0.5 bg-white/50 rounded-full" />
                </div>
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full border border-white/20 flex items-center justify-center z-20 opacity-50">
                  <div className="w-0.5 h-0.5 bg-white/50 rounded-full" />
                </div>

                {/* Image & Gradients */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07070a]/40 to-[#07070a] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/80 group-hover:border-[#D6B25E]/50 group-hover:text-[#D6B25E] transition-colors duration-500">
                      {project.category}
                    </span>

                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-white/40 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full group-hover:text-white/80 transition-colors duration-500">
                      ID-{String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`text-white/90 leading-tight drop-shadow-lg ${
                      project.featured
                        ? "text-3xl md:text-4xl font-semibold italic group-hover:text-[#D6B25E] transition-colors duration-500"
                        : "text-2xl font-semibold italic group-hover:text-[#D6B25E] transition-colors duration-500"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="font-mono text-[0.6rem] tracking-[0.15em] text-[#D6B25E]/70 group-hover:text-white/90 transition-colors duration-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Micro hover interaction desktop */}
                  <div className="mt-6 hidden md:flex items-center gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#D6B25E]">
                      Open case study
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D6B25E]/50 to-transparent" />
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-white/80 group-hover:translate-x-1 transition-transform duration-500">
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
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white/50 bg-white/5 inline-block px-6 py-2.5 rounded-full border border-white/10 hover:border-[#D6B25E]/40 hover:text-white transition-colors duration-500 cursor-default backdrop-blur-sm">
            Showing {filteredProjects.length} projects — {activeCategory}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
