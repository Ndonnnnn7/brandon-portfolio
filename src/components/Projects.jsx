import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const categories = ["All", "UI/UX", "Front End", "Data"];
  const visibleProjects = projectsData.filter((project) => project.showInGrid !== false);
  const filteredProjects =
    activeCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#070707] text-white py-24 md:py-40 font-sans selection:bg-[#CCFF00] selection:text-black"
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
        className="absolute top-[10%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-[0.02] select-none"
      >
        <span className="text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none whitespace-nowrap tracking-tighter">
          ARCHIVE
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 w-full">
        <FadeUp>
          <motion.div
            style={{ y: headY }}
            className="mb-20 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-white/10 pb-10"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#CCFF00]" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#CCFF00] font-mono font-bold">
                  Vol. 04 - Deployment Log
                </span>
              </div>

              <h2 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-white">
                SELECTED <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                  WORKS.
                </span>
              </h2>

              <p className="font-mono text-xs md:text-sm mt-8 text-gray-500 max-w-xl uppercase tracking-widest leading-relaxed border-l-2 border-[#CCFF00] pl-4">
                A curated archive of interface systems, shipped products, and brutal experiments-designed with taste, built with raw discipline.
              </p>
            </div>

            <div className="w-full lg:w-auto mt-8 lg:mt-0">
              <div className="flex flex-wrap gap-2 md:gap-4 justify-start lg:justify-end">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative px-4 py-2 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                        isActive
                          ? "bg-[#CCFF00] border-[#CCFF00] text-black font-bold"
                          : "bg-transparent border-white/20 text-white/50"
                      }`}
                    >
                      [ {category} ]
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.04}>
              <article
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex justify-between items-center border border-white/10 border-b-0 px-4 py-2 bg-[#0A0A0A] transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/50 border border-white/10 px-2 py-1 transition-colors duration-300 group-hover:border-[#CCFF00]/60 group-hover:text-[#CCFF00]">
                    {project.category}
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#FF3355]">
                    ID-{String(project.id).padStart(3, "0")}
                  </span>
                </div>

                <div className="relative w-full overflow-hidden border border-white/10 bg-[#000] aspect-[2064/1365] transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="relative w-full min-h-[208px] border border-white/10 border-t-0 p-6 flex flex-col bg-[#0A0A0A] transition-colors duration-300 group-hover:border-[#CCFF00]/60">
                  <h3 className="font-black uppercase tracking-tighter text-white mb-2 min-h-[3.8rem] text-[clamp(1.8rem,2.2vw,2.5rem)] leading-[1] transition-colors duration-300 group-hover:text-[#CCFF00]">
                    {project.title}
                  </h3>

                  <p className="font-mono text-[9px] md:text-[10px] text-gray-500 uppercase leading-relaxed line-clamp-2 min-h-[2.6rem] mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={`${project.id}-${techIndex}`}
                          className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/50 border border-white/20 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-6 h-6 flex items-center justify-center border border-white/20 transition-colors duration-300 group-hover:border-[#FF3355] group-hover:bg-[#FF3355]">
                      <span className="text-white/50 text-[10px] transform -rotate-45 font-mono transition-all duration-300 group-hover:rotate-0 group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center relative z-10">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#CCFF00]">
              System Status: Operational
            </p>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Rendered {filteredProjects.length} data nodes in [ {activeCategory} ]
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Projects;
