import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

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

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.985 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

const techListVariants = {
  visible: (index) => ({
    transition: {
      delayChildren: index * 0.05 + 0.18,
      staggerChildren: 0.04,
    },
  }),
  hover: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const techChipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  hover: (techIndex) => ({
    y: techIndex % 2 === 0 ? -4 : -2,
    scale: 1.04,
    borderColor: "rgba(204, 255, 0, 0.6)",
    color: "rgba(204, 255, 0, 0.96)",
    backgroundColor: "rgba(204, 255, 0, 0.08)",
    transition: {
      duration: 0.24,
      delay: techIndex * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const techGlowVariants = {
  hidden: { x: "-140%", opacity: 0 },
  visible: { x: "-140%", opacity: 0 },
  hover: (techIndex) => ({
    x: "150%",
    opacity: [0, 0.85, 0],
    transition: {
      duration: 0.7,
      delay: techIndex * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    rotate: 45,
    scale: 1.08,
    x: 2,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  const visibleProjects = projectsData.filter((project) => project.showInGrid !== false);
  const categories = ["All", ...new Set(visibleProjects.map((project) => project.category).filter(Boolean))];
  const filteredProjects =
    activeCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#070707] py-24 font-sans text-white selection:bg-[#CCFF00] selection:text-black md:py-40"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#070707_100%)]" />

      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-[10%] left-0 right-0 z-0 flex justify-center overflow-hidden opacity-[0.02] pointer-events-none select-none"
      >
        <span className="whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none tracking-tighter">
          ARCHIVE
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-12">
        <FadeUp>
          <motion.div
            style={{ y: headY }}
            className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end md:mb-32"
          >
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#CCFF00]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-[#CCFF00]">
                  Projects
                </span>
              </div>

              <h2 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-white">
                SELECTED <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                  WORKS.
                </span>
              </h2>

              <p className="mt-8 max-w-xl border-l-2 border-[#CCFF00] pl-4 font-mono text-xs uppercase tracking-widest leading-relaxed text-gray-500 md:text-sm">
                A curated archive of interface systems, shipped products, and brutal experiments-designed with taste, built with raw discipline.
              </p>
            </div>

            <div className="mt-8 w-full lg:mt-0 lg:w-auto">
              <div className="flex flex-wrap justify-start gap-2 md:gap-4 lg:justify-end">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative overflow-hidden border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 md:text-xs ${
                        isActive
                          ? "border-[#CCFF00] text-black"
                          : "border-white/20 bg-transparent text-white/50"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="project-category-pill"
                          className="absolute inset-0 bg-[#CCFF00]"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10 font-bold">[ {category} ]</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </FadeUp>

        <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const cardTech = project.tech?.length ? project.tech : (project.detailTech?.slice(0, 3) ?? []);

              return (
              <motion.article
                layout
                key={`${activeCategory}-${project.id}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative flex cursor-pointer flex-col"
              >
                <div className="flex items-center justify-between border border-b-0 border-white/10 bg-[#0A0A0A] px-4 py-2 transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <span className="border border-white/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:border-[#CCFF00]/60 group-hover:text-[#CCFF00]">
                    {project.category}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#FF3355]">
                    ID-{String(project.id).padStart(3, "0")}
                  </span>
                </div>

                <div className="relative aspect-[2064/1365] w-full overflow-hidden border border-white/10 bg-[#000] transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    initial={{ opacity: 0.92 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[140%] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[320%] group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="relative flex min-h-[208px] w-full flex-col border border-t-0 border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <motion.h3
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 + 0.08 }}
                    className="mb-2 min-h-[3.8rem] text-[clamp(1.8rem,2.2vw,2.5rem)] font-black uppercase leading-[1] tracking-tighter text-white transition-colors duration-300 group-hover:text-[#CCFF00]"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 + 0.14 }}
                    className="mb-6 min-h-[2.6rem] line-clamp-2 font-mono text-[9px] uppercase leading-relaxed text-gray-500 md:text-[10px]"
                  >
                    {project.description}
                  </motion.p>

                  <div className="mt-auto flex items-end justify-between gap-4">
                    <motion.div
                      custom={index}
                      variants={techListVariants}
                      className="flex flex-wrap gap-2"
                    >
                      {cardTech.map((tech, techIndex) => (
                        <motion.span
                          key={`${project.id}-${techIndex}`}
                          custom={techIndex}
                          variants={techChipVariants}
                          className="relative overflow-hidden border border-white/20 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/50"
                        >
                          <motion.span
                            custom={techIndex}
                            variants={techGlowVariants}
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/35 to-transparent"
                          />
                          <span className="relative z-10">{tech}</span>
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      variants={arrowVariants}
                      className="flex h-6 w-6 items-center justify-center border border-white/20 transition-colors duration-300 group-hover:border-[#FF3355] group-hover:bg-[#FF3355]"
                    >
                      <span className="font-mono text-[10px] text-white/50 transition-all duration-300 group-hover:text-white">
                        -&gt;
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <FadeUp delay={0.2}>
          <div className="relative z-10 mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#CCFF00]">
              System Status: Operational
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40"
              >
                Rendered {filteredProjects.length} data nodes in [ {activeCategory} ]
              </motion.p>
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Projects;
