import React, { useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </Motion.div>
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

const ProjectCard = ({ project, index, onSelect, mobile = false }) => {
  const cardTech = project.tech?.length
    ? project.tech
    : (project.detailTech?.slice(0, 3) ?? []);
  const imageSrc = project.image || "";
  const animationIndex = mobile ? 0 : index;

  return (
    <Motion.article
      layout={!mobile}
      custom={animationIndex}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={mobile ? undefined : "hover"}
      onClick={onSelect}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_14px_36px_rgba(11,18,20,0.08)]"
    >
      <div className="flex items-center justify-between border-b border-line bg-white px-4 py-2 transition-colors duration-300 group-hover:border-primary/60">
        <span className="rounded-full border border-line px-2 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-ink/50 transition-colors duration-300 group-hover:border-primary/60 group-hover:text-primaryInk">
          {project.category}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8FE8F6]">
          ID-{String(project.id).padStart(3, "0")}
        </span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-surface-soft transition-colors duration-300 group-hover:border-primary/60">
        {imageSrc ? (
          <Motion.img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            initial={{ opacity: 0.92 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: animationIndex * 0.05 }}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="rounded-full border border-primary/60 bg-primary/15 px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-primaryInk">
              Local image pending
            </span>
            <span className="text-2xl font-black uppercase tracking-tighter text-ink/20">
              {project.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[140%] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[320%] group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative flex min-h-[208px] w-full flex-col bg-white p-6">
        <Motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: animationIndex * 0.05 + 0.08 }}
          className="mb-2 min-h-[3.8rem] text-[clamp(1.8rem,2.2vw,2.5rem)] font-black uppercase leading-[1] tracking-tighter text-ink transition-colors duration-300 group-hover:text-primaryInk"
        >
          {project.title}
        </Motion.h3>

        <Motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: animationIndex * 0.05 + 0.14 }}
          className="mb-6 min-h-[2.6rem] line-clamp-2 font-mono text-[9px] uppercase leading-relaxed text-gray-500 md:text-[10px]"
        >
          {project.description}
        </Motion.p>

        <div className="mt-auto flex items-end justify-between gap-4">
          <Motion.div
            custom={animationIndex}
            variants={techListVariants}
            className="flex flex-wrap gap-2"
          >
            {cardTech.map((tech, techIndex) => (
              <Motion.span
                key={`${project.id}-${techIndex}`}
                custom={techIndex}
                variants={techChipVariants}
                className="relative overflow-hidden rounded-full border border-line px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-ink/50 transition-colors duration-200 group-hover:border-accentInk/50 group-hover:bg-primary group-hover:text-accentInk"
              >
                <Motion.span
                  custom={techIndex}
                  variants={techGlowVariants}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/55 to-transparent"
                />
                <span className="relative z-10">{tech}</span>
              </Motion.span>
            ))}
          </Motion.div>

          <Motion.div
            variants={arrowVariants}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-primary group-hover:bg-primary"
          >
            <span className="font-mono text-[10px] text-ink/50 transition-all duration-300 group-hover:text-accentInk">
              -&gt;
            </span>
          </Motion.div>
        </div>
      </div>
    </Motion.article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
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
  const mobileProject = filteredProjects[mobileProjectIndex] ?? filteredProjects[0];

  const selectCategory = (category) => {
    setActiveCategory(category);
    setMobileProjectIndex(0);
  };

  const showPreviousMobileProject = () => {
    setMobileProjectIndex((currentIndex) =>
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length,
    );
  };

  const showNextMobileProject = () => {
    setMobileProjectIndex((currentIndex) =>
      (currentIndex + 1) % filteredProjects.length,
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="theme-section relative w-full overflow-hidden bg-canvas py-24 font-sans text-ink selection:bg-primary selection:text-ink md:py-40"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, var(--color-canvas) 100%)" }}
      />

      <Motion.div
        style={{ y: watermarkY }}
        className="absolute top-[10%] left-0 right-0 z-0 flex justify-center overflow-hidden opacity-[0.02] pointer-events-none select-none"
      >
        <span className="whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none tracking-tighter">
          ARCHIVE
        </span>
      </Motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-12">
        <FadeUp>
          <Motion.div
            style={{ y: headY }}
            className="mb-16 flex flex-col justify-between gap-10 border-b border-line pb-10 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#8FE8F6]" />
              </div>

              <h2 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-ink">
                SELECTED <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-primary)" }}>
                  WORKS.
                </span>
              </h2>

              <p className="mt-8 max-w-xl border-l-2 border-[#8FE8F6] pl-4 font-mono text-xs uppercase tracking-widest leading-relaxed text-gray-500 md:text-sm">
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
                      onClick={() => selectCategory(category)}
                      className={`relative overflow-hidden rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 md:text-xs ${
                        isActive
                          ? "border-primary text-accentInk"
                          : "border-line bg-transparent text-ink/50"
                      }`}
                    >
                      {isActive && (
                        <Motion.span
                          layoutId="project-category-pill"
                          className="absolute inset-0 bg-[#8FE8F6]"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10 font-bold"> {category} </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Motion.div>
        </FadeUp>

        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {mobileProject && (
              <ProjectCard
                key={`${activeCategory}-mobile-${mobileProject.id}`}
                project={mobileProject}
                index={0}
                mobile
                onSelect={() => navigate(`/project/${mobileProject.id}`)}
              />
            )}
          </AnimatePresence>

          <div
            className="relative z-20 mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-line bg-white p-2 shadow-[var(--shadow-md)]"
            aria-label="Mobile project carousel controls"
          >
            <button
              type="button"
              onClick={showPreviousMobileProject}
              disabled={filteredProjects.length <= 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-primaryInk hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Show previous project"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>

            <p
              className="min-w-16 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-ink">{String(mobileProjectIndex + 1).padStart(2, "0")}</span>
              {" / "}
              {String(filteredProjects.length).padStart(2, "0")}
            </p>

            <button
              type="button"
              onClick={showNextMobileProject}
              disabled={filteredProjects.length <= 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-primary text-accentInk transition-colors duration-200 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Show next project"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Motion.div layout className="hidden gap-x-8 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeCategory}-${project.id}`}
                project={project}
                index={index}
                onSelect={() => navigate(`/project/${project.id}`)}
              />
            ))}
          </AnimatePresence>
        </Motion.div>

        <FadeUp delay={0.2}>
          <div className="relative z-10 mt-20 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-center md:flex-row">
            <AnimatePresence mode="wait">
              <Motion.p
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70"
              >
                Rendered {filteredProjects.length} data
              </Motion.p>
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Projects;
