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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..800,0..100&family=Sora:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap');

        :root{
          --bg:#07070a;
          --bone:#F4F0E8;
          --muted:#9A948A;
          --metal:#D6B25E;
          --rust:#D45D3A;
          --haze:#14B8A6;
          --plum:#7C3AED;
        }

        .f-display{ font-family:'Fraunces', serif; }
        .f-sans{ font-family:'Sora', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
        .f-mono{ font-family:'IBM Plex Mono', ui-monospace, monospace; }

        /* ── SEAMLESS BACKGROUND ── */
        .proj-bg {
          background-color: var(--bg);
        }

        /* ── CIRCULAR DOT GRID (Pengganti Kotak) ── */
        .dot-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image: radial-gradient(rgba(214,178,94,0.12) 1.5px, transparent 1.5px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%);
          opacity: 0.7;
        }

        /* Grain */
        .grain::after{
          content:''; position:absolute; inset: -50%; width: 200%; height: 200%; pointer-events:none; z-index:3;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
          opacity: 0.045; mix-blend-mode:overlay; transform: rotate(4deg);
        }

        /* Vignette (gelap di ujung) */
        .vignette{
          position:absolute; inset:0; pointer-events:none; z-index:4;
          background: radial-gradient(100vw 100vh at 50% 50%, transparent 40%, var(--bg) 100%);
        }

        /* Animations for circular ambient lights */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.09; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }

        /* Watermark outline */
        .outline{
          -webkit-text-stroke: 1px rgba(214,178,94,0.30);
          color: transparent;
        }

        /* ── ROUNDED TABS ── */
        .seg{
          display:flex; flex-wrap:wrap; gap:10px; padding:8px;
          border-radius: 999px; /* ROUNDED PILL */
          border:1px solid rgba(214,178,94,0.16);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
        }
        .seg button{
          position:relative; padding: 10px 20px;
          border-radius: 999px; /* ROUNDED PILL */
          border:1px solid transparent;
          color: rgba(154,148,138,0.95);
          transition: all .35s ease;
        }
        .seg button:hover{
          color: var(--bone); background: rgba(255,255,255,0.04);
        }
        .seg button[data-active="true"]{
          color: #07070a;
          background: linear-gradient(180deg, rgba(244,240,232,0.95), rgba(214,178,94,0.85));
          border-color: rgba(244,240,232,0.35);
          box-shadow: 0 10px 30px rgba(214,178,94,0.15);
        }

        /* ── ROUNDED ARTIFACT CARDS ── */
        .card{
          position:relative;
          border-radius: 24px; /* BEAUTIFUL ROUNDED CORNERS */
          background: rgba(7,7,10,0.65);
          border: 1px solid rgba(214,178,94,0.14);
          backdrop-filter: blur(14px);
          overflow:hidden;
          box-shadow: 0 26px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(214,178,94,0.08) inset;
          transition: transform .45s ease, box-shadow .45s ease, border-color .45s ease;
        }
        .card:hover{
          transform: translateY(-5px);
          border-color: rgba(214,178,94,0.3);
          box-shadow: 0 34px 92px rgba(0,0,0,0.65), 0 0 0 1px rgba(214,178,94,0.12) inset;
        }

        /* Inner Glow Edge */
        .card::before{
          content:''; position:absolute; inset:0; padding:1px; border-radius:24px;
          background: linear-gradient(135deg, rgba(214,178,94,0.65), rgba(20,184,166,0.15), rgba(124,58,237,0.15), rgba(214,178,94,0.18));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity:.55; pointer-events:none; z-index:2;
        }

        /* Circular Specular Glow Follows Mouse */
        .card::after{
          content:""; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(214,178,94,0.12), transparent 50%),
            radial-gradient(150px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.06), transparent 50%);
          opacity:0; transition: opacity .3s ease; mix-blend-mode: screen; z-index:2;
        }
        .card:hover::after{ opacity:1; }

        /* Circular Screws */
        .screw{
          position:absolute; width:12px; height:12px; border-radius:50%; /* CIRCLE */
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.5) 75%);
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          border: 1px solid rgba(214,178,94,0.2); z-index:3; opacity:.85;
        }
        .screw::after{
          content:''; position:absolute; left:50%; top:50%; width:7px; height:1px;
          background: rgba(214,178,94,0.5); transform: translate(-50%,-50%) rotate(45deg);
        }

        /* Subtle Top Shimmer */
        .topline{
          position:absolute; left:0; right:0; top:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(214,178,94,0.6), transparent);
          opacity:0; transition: opacity .4s ease; z-index:3;
        }
        .card:hover .topline{ opacity:1; }

        /* Film overlay for images */
        .film{
          position:absolute; inset:0; pointer-events:none;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.75)),
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 50%);
          mix-blend-mode: overlay; opacity: .8;
        }
      `}</style>

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