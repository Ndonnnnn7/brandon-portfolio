import React, { useEffect, useRef, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight, ExternalLink, Camera, Database } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { projectsData } from "../data/projects";

const BrutalistCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      setIsHovering(tagName === "a" || tagName === "button");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="hidden md:flex fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference items-center justify-center border-2 border-white"
      style={{ x: cursorXSpring, y: cursorYSpring }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "white" : "transparent",
        borderRadius: isHovering ? "0%" : "50%",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="text-[4px] text-black font-black uppercase tracking-widest mix-blend-normal"
      >
        ACT
      </motion.span>
    </motion.div>
  );
};

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const project = useMemo(
    () => projectsData.find((p) => p.id === parseInt(id, 10)),
    [id]
  );

  const next = useMemo(() => {
    if (!project) return null;
    const visibleProjects = projectsData.filter((item) => item.showInGrid !== false);
    const currentIndex = visibleProjects.findIndex((item) => item.id === project.id);
    const nextIndex = currentIndex === visibleProjects.length - 1 ? 0 : currentIndex + 1;
    return visibleProjects[nextIndex] ?? null;
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {!project ? (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-white bg-[#050505] font-mono">
          <p className="text-xl text-[#FF3355]">[ ERROR: NODE NOT FOUND ]</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 border-2 border-white transition-colors uppercase tracking-widest text-xs font-bold"
          >
            RETURN_TO_BASE
          </button>
        </div>
      ) : (
        <article
          ref={containerRef}
          className="min-h-screen w-full bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-[#CCFF00] selection:text-black pt-24 pb-32"
        >
          <BrutalistCursor />

          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/#projects")}
              className="flex items-center gap-4 text-white/50 transition-colors mb-16 md:mb-24"
            >
              <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
                Abort Mission
              </span>
            </motion.button>

            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-white/10 pb-8 mb-12">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-widest font-bold uppercase">
                    <span className="bg-white/10 px-3 py-1 border border-white/20 text-[#CCFF00]">
                      {project.category}
                    </span>
                    <span className="text-white/50">DEPLOYED: {project.year}</span>
                  </div>

                  <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-white mb-6">
                    {project.title}
                  </h1>

                  <p className="font-mono text-xs md:text-sm text-gray-400 uppercase leading-relaxed max-w-2xl border-l-2 border-[#CCFF00] pl-4">
                    {project.description}
                  </p>
                </div>

                <div className="w-full md:w-auto">
                  <span className="font-black text-6xl md:text-8xl text-white/5 tracking-tighter select-none">
                    ID-{String(project.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative w-full aspect-video border-2 border-white/10 bg-black transition-colors duration-500 overflow-hidden mb-16 md:mb-32">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/30 z-20 transition-colors" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/30 z-20 transition-colors" />

                <motion.div style={{ y: yParallax }} className="w-full h-[120%] -top-[10%] relative origin-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover contrast-125"
                  />
                </motion.div>

                <div className="absolute bottom-0 left-0 w-full bg-[#050505] border-t border-white/10 p-2 flex justify-between font-mono text-[8px] uppercase tracking-widest text-white/40">
                  <span>CAMERA_01 // MAIN_FEED</span>
                  <span>STATUS: SECURE</span>
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b-2 border-white/10 pb-16 md:pb-32 mb-16 md:mb-32">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <FadeUp>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#0A0A0A] border border-white/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white/50" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">System Overview</h3>
                  </div>
                  <p className="font-mono text-sm md:text-base leading-loose text-white/70 uppercase">
                    {project.fullDescription || project.description}
                  </p>
                </FadeUp>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-12">
                <FadeUp>
                  <div className="border border-white/10 bg-[#0A0A0A] p-6">
                    <h3 className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4 border-b border-white/10 pb-2">
                      Role Designation
                    </h3>
                    <p className="font-black text-xl md:text-2xl uppercase tracking-tighter text-[#CCFF00]">
                      {project.role}
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="border border-white/10 bg-[#0A0A0A] p-6">
                    <h3 className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4 border-b border-white/10 pb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(project.detailTech || project.tech).map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] uppercase tracking-widest font-bold border border-white/20 px-3 py-2 text-white transition-colors cursor-default"
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
                      className="w-full py-4 border-2 border-white transition-colors flex items-center justify-center gap-4"
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
                        className="flex-1 py-3 border border-white/20 transition-colors flex items-center justify-center gap-2"
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
                        className="flex-1 py-3 border border-white/20 transition-colors flex items-center justify-center gap-2"
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

            <div className="mb-24 md:mb-32">
              <FadeUp>
                <div className="flex items-center justify-between gap-6 mb-12 border-b border-white/10 pb-4">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-4">
                    <Camera className="w-6 h-6 text-[#FF3355]" />
                    Surveillance Log
                  </h3>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF3355] border border-[#FF3355] px-3 py-1">
                    FILES: {project.gallery?.length ?? 0}
                  </span>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {project.gallery && project.gallery.length > 0 ? (
                  project.gallery.map((img, index) => (
                    <FadeUp key={index} delay={index * 0.1}>
                      <div className="relative border border-white/10 bg-[#0A0A0A] p-2 transition-colors">
                        <img
                          src={img}
                          loading="lazy"
                          alt={`Snapshot ${index + 1}`}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute top-4 left-4 font-mono text-[8px] bg-black/60 px-2 py-1 text-white/50 backdrop-blur-md border border-white/10">
                          CAM_0{index + 2}
                        </div>
                      </div>
                    </FadeUp>
                  ))
                ) : (
                  <p className="font-mono text-sm text-white/30 uppercase tracking-widest col-span-2">
                    [ NO SURVEILLANCE DATA FOUND ]
                  </p>
                )}
              </div>
            </div>

            {next && (
              <FadeUp>
                <div className="border-t-2 border-white/10 pt-16 md:pt-24 mb-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                        // NEXT_DIRECTIVE
                      </p>
                      <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-black uppercase tracking-tighter leading-none">
                        {next.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => navigate(`/project/${next.id}`)}
                      className="w-full md:w-auto px-8 py-4 bg-[#CCFF00] text-black font-black uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-4"
                    >
                      PROCEED
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectDetail;
