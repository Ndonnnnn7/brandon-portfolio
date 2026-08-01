import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Database } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { projectsData } from "../data/projects";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </Motion.div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(
    () => projectsData.find((p) => p.id === parseInt(id, 10)),
    [id]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const heroImageSrc = project?.image || "";

  return (
    <>
      {!project ? (
        <div className="theme-section min-h-screen flex flex-col gap-4 items-center justify-center text-ink bg-canvas font-mono">
          <p className="text-xl text-[#8FE8F6]">[ ERROR: NODE NOT FOUND ]</p>
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer rounded-full border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            RETURN_TO_BASE
          </button>
        </div>
      ) : (
        <article
          className="theme-section min-h-screen w-full bg-canvas text-ink relative overflow-hidden font-sans selection:bg-primary selection:text-ink pt-24 pb-32"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,18,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,20,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
            <Motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/#projects")}
              className="mb-16 flex cursor-pointer items-center gap-4 rounded-full pr-5 text-ink/50 transition-colors hover:bg-primary/15 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mb-24"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-line transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
                Abort Mission
              </span>
            </Motion.button>

            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-line pb-8 mb-12">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-widest font-bold uppercase">
                    <span className="rounded-full border border-line bg-primary/15 px-3 py-1 text-primaryInk">
                      {project.category}
                    </span>
                    <span className="text-ink/50">DEPLOYED: {project.year}</span>
                  </div>

                  <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-ink mb-6">
                    {project.title}
                  </h1>

                  <p className="font-mono text-xs md:text-sm text-gray-400 uppercase leading-relaxed max-w-2xl border-l-2 border-[#8FE8F6] pl-4">
                    {project.description}
                  </p>
                </div>

                <div className="w-full md:w-auto">
                  <span className="font-black text-6xl md:text-8xl text-ink/5 tracking-tighter select-none">
                    ID-{String(project.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-3xl border-2 border-line bg-surface-soft shadow-[0_18px_50px_rgba(11,18,20,0.08)] transition-colors duration-500 md:mb-32">

                <div className="relative h-full w-full origin-center">
                  {heroImageSrc ? (
                    <img
                      src={heroImageSrc}
                      alt={project.title}
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-contain bg-surface-soft"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 bg-surface-soft px-6 text-center">
                      <span className="rounded-full border border-primary/60 bg-primary/15 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primaryInk">
                        Local image pending
                      </span>
                      <span className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tighter text-ink/15">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-white border-t border-line p-2 flex justify-between font-mono text-[8px] uppercase tracking-widest text-muted/70">
                  <span>CAMERA_01 // MAIN_FEED</span>
                  <span>STATUS: SECURE</span>
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b-2 border-line pb-16 md:pb-32 mb-16 md:mb-32">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <FadeUp>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white">
                      <Database className="w-5 h-5 text-ink/50" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">System Overview</h3>
                  </div>
                  <p className="font-mono text-sm md:text-base leading-loose text-muted uppercase">
                    {project.fullDescription || project.description}
                  </p>
                </FadeUp>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-12">
                <FadeUp>
                  <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_12px_32px_rgba(11,18,20,0.05)]">
                    <h3 className="font-mono text-[10px] tracking-widest uppercase text-muted/70 mb-4 border-b border-line pb-2">
                      Role Designation
                    </h3>
                    <p className="font-black text-xl md:text-2xl uppercase tracking-tighter text-[#8FE8F6]">
                      {project.role}
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_12px_32px_rgba(11,18,20,0.05)]">
                    <h3 className="font-mono text-[10px] tracking-widest uppercase text-muted/70 mb-4 border-b border-line pb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(project.detailTech || project.tech).map((tech, idx) => (
                        <span
                          key={idx}
                          className="cursor-default rounded-full border border-line px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-ink transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.2} className="flex flex-col gap-4">
                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-4 rounded-full border-2 border-ink py-4 transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        Deploy Live Link
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <div className="flex gap-4">
                    {project.links.github && project.links.github !== "#" && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 transition-colors hover:border-primary hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
                          Source Code
                        </span>
                      </a>
                    )}
                    {project.links.figma && project.links.figma !== "#" && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 transition-colors hover:border-primary hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        <FaFigma className="w-4 h-4" />
                        <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
                          Design File
                        </span>
                      </a>
                    )}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectDetail;
