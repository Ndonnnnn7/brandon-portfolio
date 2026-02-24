import React, { useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Calendar,
  ImageIcon,
  Sparkles,
  Code2,
  CornerDownRight,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "InterStellar",
    category: "Front End",
    image: "/img/Interstellar.png",
    gallery: ["/img/projects/InterStellar1.png", "/img/projects/InterStellar2.png"],
    description: "Website to explore everything from tiny particles to the universe with AI.",
    fullDescription:
      "InterStellar is an educational platform designed to bridge the gap between complex scientific data and students. Using Three.js for immersive 3D visualizations and OpenAI's API to generate explanations, users can zoom from the atomic level out to the observable universe. The main challenge was optimizing the 3D rendering to run smoothly on average devices while maintaining high-fidelity visuals.",
    tech: ["Three.js", "OpenAI API", "React", "TailwindCSS"],
    role: "Front End Developer",
    year: "2025",
    links: {
      demo: "https://interstellar-phi-beryl.vercel.app/",
      github: "https://github.com/SakaGintoki/Interstellar",
      figma: "#",
    },
  },
  {
    id: 2,
    title: "Masakin Application",
    category: "Front End",
    image: "/img/Masakin1.png",
    description: "Application with a chatbot to check calories, get recipes, and buy ingredients instantly.",
    fullDescription:
      "Masakin is a comprehensive culinary companion app designed to simplify meal planning. It integrates a smart chatbot that suggests recipes based on available ingredients and dietary restrictions. The app also features a calorie tracker and an instant ingredient purchasing system connected to local vendors.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
    role: "Mobile Developer & UI/UX Designer",
    year: "2025",
    links: { demo: "#", github: "#", figma: "#" },
  },
  {
    id: 3,
    title: "Hack.id",
    category: "Front End",
    image: "/img/Hack.id.png",
    description: "AI-powered website that helps you discover hackathon events from around the world.",
    fullDescription:
      "Hack.id aggregates hackathon events globally, providing a centralized platform for developers to find competitions. The AI component personalizes recommendations based on the user's tech stack and interests, ensuring they find the most relevant events to boost their skills.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "Front End Developer",
    year: "2024",
    links: { demo: "#", github: "https://github.com/DarveshAziz/Hack.id", figma: "#" },
  },
  {
    id: 4,
    title: "DeafSpace",
    category: "UI/UX",
    image: "/img/DeafSpace.png",
    description: "App that allows deaf individuals to easily order sign language interpreters.",
    fullDescription:
      "DeafSpace addresses the communication barrier faced by the deaf community. This app provides an on-demand service to book certified sign language interpreters for various needs. The design focuses on high accessibility and visual clarity.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "https://www.figma.com/proto/7pEBT3wVsdw42AHuchP96x/Raion-Hackjam-3?page-id=5%3A8&node-id=233-3135&viewport=641%2C-1842%2C0.24&t=sn4PMhe2xBdW7Gdf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=233%3A3458&show-proto-sidebar=1",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 5,
    title: "Kiddora",
    category: "UI/UX",
    image: "/img/Kiddora.png",
    gallery: ["/img/projects/Kiddora1.png", "/img/projects/Kiddora2.png"],
    description:
      "A platform that helps families find dependable babysitters to ensure quality care for their little ones.",
    fullDescription:
      "Kiddora was born from the need to provide parents with a safe, transparent way to find childcare. We focused heavily on the trust factor—implementing rigorous verification badges in the UI and creating a soothing, trustworthy color palette. The UX process involved interviewing 15 parents to understand their anxiety points when hiring sitters.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2025",
    links: {
      demo: "https://www.figma.com/proto/nKv20vZ0eMc1lbcaPiIww4/Kiddora?page-id=1%3A3&node-id=249-2724&viewport=-3940%2C-2018%2C0.38&t=tl48gWN5NE12ucF8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A427&show-proto-sidebar=1",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 6,
    title: "Furever Pet Care",
    category: "UI/UX",
    image: "/img/Furever.png",
    gallery: ["/img/projects/Furever1.png"],
    description: "App for pet services, providing care and support to ensure the well-being of animals.",
    fullDescription:
      "Furever Pet Care creates an ecosystem for pet owners, connecting them with vets, groomers, and pet sitters. The project emphasized creating a friendly, calming user interface that reduces the stress often associated with finding emergency pet care.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: { demo: "#", github: "#", figma: "#" },
  },
  {
    id: 7,
    title: "Infotional",
    category: "UI/UX",
    image: "/img/Infotional.png",
    description: "App that helps students access scholarships, mentorship, and various educational resources.",
    fullDescription:
      "Infotional is designed to democratize access to educational opportunities. By aggregating scholarships and mentorship programs, it helps students find the support they need. The UX design prioritizes information architecture to make searching through thousands of listings intuitive.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "https://www.figma.com/proto/6GqXh0ZABe9qsb78LuSOSG/Internship-(Infotional)?page-id=6%3A2&node-id=798-17189&p=f&viewport=133%2C342%2C0.05&t=1NdSEsLvWTE6OWkP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=798%3A1487",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 8,
    title: "LittleSteps",
    category: "Front End",
    image: "/img/LittleKids.png",
    gallery: ["/img/projects/LittleSteps1.png", "/img/projects/LittleSteps2.png"],
    description: "App that helps parents find trusted babysitters, ensuring quality care.",
    fullDescription:
      "LittleSteps translates the UI/UX concepts of childcare into a functional frontend application. The focus was on building responsive layouts and ensuring the booking flow was seamless on mobile devices.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "https://www.figma.com/proto/SEqFf1D4euTttq0SXT3gub/LittleSteps?page-id=20%3A8589&node-id=55-1315&p=f&viewport=607%2C-1930%2C0.23&t=b2cKUrbFM73U9fb8-1&scaling=scale-down&content-scaling=fixed",
      github: "https://github.com/SakaGintoki/LittleSteps",
      figma: "#",
    },
  },
  {
    id: 9,
    title: "WeCare",
    category: "UI/UX",
    image: "/img/WeCare.png",
    description:
      "App that enables victims of sexual harassment to quickly contact the police or authorities.",
    fullDescription:
      "WeCare is a critical safety application designed with a panic button feature. The UI is designed to be accessible under high-stress situations, with large, clear interactions and a stealth mode for user safety.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "https://www.figma.com/proto/VZnPxD4CemjN22jSCEJz3n/WeCare?page-id=467%3A726&node-id=467-727&p=f&viewport=1470%2C926%2C0.57&t=7o2mTgRz6Ds7aGhM-1&scaling=scale-down&content-scaling=fixed",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 10,
    title: "Bundaku",
    category: "UI/UX",
    image: "/img/Bundaku.png",
    gallery: ["/img/projects/Bundaku1.png"],
    description: "App for moms and babies, for pregnancy monitoring and stunting prevention.",
    fullDescription:
      "Bundaku focuses on maternal and child health in Indonesia. It provides tracking tools for pregnancy and child growth to prevent stunting. The interface is designed to be warm and welcoming, providing easy-to-understand health visualizations.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "https://www.figma.com/proto/r3FH9ZgbTtkebwyflJlzQH/BundaKu?page-id=601%3A2195&node-id=601-2485&viewport=-1802%2C605%2C0.49&t=u0LlshESnMPJsH9l-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=601%3A2455",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 11,
    title: "Legana",
    category: "UI/UX",
    image: "/img/Legana.png",
    gallery: ["/img/projects/Legana1.png", "/img/projects/Legana2.png"],
    description:
      "App that analyzes legal documents or issues from photos or text and suggests relevant laws.",
    fullDescription:
      "Legana simplifies legal literacy. By allowing users to upload documents or describe issues, the app suggests relevant laws and actions. The design challenge was presenting dense legal information in a digestible, user-friendly format.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2025",
    links: {
      demo: "#",
      github: "#",
      figma:
        "https://www.figma.com/proto/pq9XdoJGny4CdaOK6i1gaT/Legana?page-id=3%3A496&node-id=3-507&p=f&viewport=833%2C475%2C0.16&t=mJnjHmtzCDlPMtTI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A507",
    },
  },
  {
    id: 12,
    title: "Sehat Mental UB",
    category: "UI/UX",
    image: "/img/Sehatmental.png",
    description: "A platform designed to help students access emotional and psychological support.",
    fullDescription:
      "Sehat Mental UB connects students with counselors and self-help resources. The design prioritizes privacy, calmness, and ease of access to emergency hotlines.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2025",
    links: {
      demo: "https://www.figma.com/proto/tvrM7wbl45nRcTfnLGnvQT/Sehat-Mental-UB?page-id=29%3A1902&node-id=29-1903&viewport=224%2C-351%2C0.5&t=9TVqvObvioflH02R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A1903&show-proto-sidebar=1",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 13,
    title: "Detection License Plate",
    category: "Data",
    image: "/img/plate.avif",
    description:
      "Using a YOLOv8 model to detect vehicle license plates and EasyOCR to read the plate text.",
    fullDescription:
      "Automated number plate recognition (ANPR). YOLOv8 detects plates in real-time. EasyOCR extracts alphanumeric characters for parking/traffic monitoring.",
    tech: ["Python", "YOLOv8", "EasyOCR", "Computer Vision"],
    role: "AI Engineer",
    year: "2025",
    links: { demo: "#", github: "#", figma: "#" },
  },
  {
    id: 14,
    title: "Senggreng Tourism Website",
    category: "Front End",
    image: "/img/desasenggreng.png",
    description:
      "A tourism website for Senggreng Village, showcasing tourist attractions and restaurants.",
    fullDescription:
      "Digital portal for Senggreng Village tourism. Showcases attractions, culinary spots, and homestays. Built with React, responsive layouts, and maps to guide tourists.",
    tech: ["Three.js", "API", "React"],
    role: "Front End Developer",
    year: "2025",
    links: {
      demo: "https://desa-senggreng.vercel.app/home",
      github: "https://github.com/Weedanta/Desa-Senggreng",
      figma: "#",
    },
  },
];

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
    const nextId = project.id === projectsData.length ? 1 : project.id + 1;
    return projectsData.find((p) => p.id === nextId);
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // PARALLAX (hero image)
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.35], ["0%", "10%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.22], ["0px", "22px"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.72]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-white bg-[#0a0a0a]">
        <p className="text-xl text-gray-400">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.975, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <>
      <style>{`
        /* background system (match hero/footer) */
        .pd-bg{
          background:
            radial-gradient(900px 600px at 85% 0%, rgba(124,58,237,0.12), transparent 60%),
            radial-gradient(800px 600px at 0% 110%, rgba(20,184,166,0.10), transparent 62%),
            linear-gradient(180deg, #050507 0%, #0a0a0a 55%, #040406 100%);
        }
        .pd-blueprint{
          position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(214,178,94,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.07) 1px, transparent 1px),
            linear-gradient(rgba(214,178,94,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.02) 1px, transparent 1px);
          background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
          background-position: center top;
          mask-image: radial-gradient(ellipse at 50% 22%, black 0%, black 48%, transparent 82%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 22%, black 0%, black 48%, transparent 82%);
          opacity:.9;
        }
        .pd-topo{
          position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image: repeating-radial-gradient(
            circle at 110% 0%,
            transparent 0,
            transparent 52px,
            rgba(214,178,94,0.018) 52px,
            rgba(214,178,94,0.018) 53px
          );
          opacity:.75;
        }
        .pd-vignette{
          position:fixed; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(1100px 720px at 50% 0%, transparent 40%, rgba(0,0,0,0.65) 90%),
            radial-gradient(1200px 900px at 50% 120%, transparent 46%, rgba(0,0,0,0.72) 92%);
        }
        .pd-grain::after{
          content:'';
          position:fixed; inset:-200%;
          width:400%; height:400%;
          pointer-events:none; z-index:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
          opacity:0.04; mix-blend-mode:overlay;
          transform: rotate(4deg);
        }

        /* artifact cards */
        .artifact{
          position:relative;
          border-radius: 26px;
          background: rgba(7,7,10,0.58);
          box-shadow: 0 30px 110px rgba(0,0,0,0.72), 0 0 0 1px rgba(214,178,94,0.14) inset;
          backdrop-filter: blur(16px);
          overflow:hidden;
          transform: translateZ(0);
          transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s cubic-bezier(.22,1,.36,1), background .45s cubic-bezier(.22,1,.36,1);
        }
        .artifact:hover{
          transform: translateY(-4px);
          background: rgba(7,7,10,0.72);
          box-shadow: 0 38px 140px rgba(0,0,0,0.78), 0 0 0 1px rgba(214,178,94,0.20) inset;
        }
        .artifact::before{
          content:'';
          position:absolute; inset:0; padding:1px; border-radius:26px;
          background: linear-gradient(135deg,
            rgba(214,178,94,0.70),
            rgba(20,184,166,0.18),
            rgba(124,58,237,0.18),
            rgba(214,178,94,0.25)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity:.72; pointer-events:none;
        }
        .artifact::after{
          content:'';
          position:absolute; inset:0;
          background:
            radial-gradient(circle at 16% 18%, rgba(255,255,255,0.06), transparent 46%),
            radial-gradient(circle at 84% 16%, rgba(255,255,255,0.04), transparent 52%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 42%, rgba(0,0,0,0.24));
          opacity:.75; pointer-events:none;
        }

        @keyframes sheen {
          from { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          18%  { opacity: .35; }
          to   { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
        .sheen{
          position:absolute; inset:0;
          pointer-events:none; z-index:2;
          width:55%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
          transform: translateX(-140%) skewX(-18deg);
          opacity:0;
        }
        .artifact:hover .sheen{ animation: sheen 1.15s cubic-bezier(.22,1,.36,1); }

        .screw{
          position:absolute; width:10px; height:10px; z-index:3; opacity:.75;
          background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(0,0,0,0.55));
          border: 1px solid rgba(214,178,94,0.28);
          border-radius: 6px;
        }
        .screw::after{
          content:''; position:absolute; left:50%; top:50%;
          width:6px; height:1px; background: rgba(214,178,94,0.55);
          transform: translate(-50%,-50%) rotate(45deg);
        }

        .meshText{
          background: linear-gradient(120deg, var(--bone) 0%, var(--metal2) 40%, var(--rust) 78%, var(--bone) 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-size:200% auto;
          animation: meshMove 8s linear infinite;
        }
        @keyframes meshMove{ to{ background-position:200% center; } }

        .outlineText{
          -webkit-text-stroke: 1.3px rgba(214,178,94,0.42);
          color: transparent;
        }

        /* hero image hover: scan + focus */
        @keyframes scan {
          0% { transform: translateY(-120%); opacity: 0; }
          12% { opacity: .35; }
          100% { transform: translateY(120%); opacity: 0; }
        }
        .scanline{
          position:absolute; left:0; right:0; top:0; height:40%;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.10), transparent);
          mix-blend-mode: overlay;
          opacity:0;
          pointer-events:none;
        }
        .heroWrap:hover .scanline{ animation: scan 1.15s cubic-bezier(.22,1,.36,1); opacity:1; }

        /* gallery tiles */
        .tile{
          position:relative;
          border-radius: 22px;
          overflow:hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.10);
          transition: transform .45s cubic-bezier(.22,1,.36,1), border-color .45s, box-shadow .45s;
        }
        .tile:hover{
          transform: translateY(-6px);
          border-color: rgba(214,178,94,0.35);
          box-shadow: 0 26px 90px rgba(0,0,0,0.55);
        }
      `}</style>

      <article
        ref={containerRef}
        className="min-h-screen w-full text-[var(--bone)] relative overflow-hidden selection:bg-[rgba(124,58,237,0.35)] pd-bg pd-grain"
      >
        {/* background layers */}
        <div className="pd-blueprint" />
        <div className="pd-topo" />
        <div className="pd-vignette" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-[rgba(154,148,138,0.95)] hover:text-[var(--bone)] transition-colors mb-12"
          >
            <div className="p-2 rounded-full border border-[rgba(214,178,94,0.20)] bg-[rgba(255,255,255,0.03)] group-hover:bg-[rgba(255,255,255,0.06)] transition-all">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="f-mono text-[0.62rem] font-medium tracking-[0.28em] uppercase">
              Back to Projects
            </span>
          </motion.button>

          {/* HERO */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-16 md:mb-24">
            {/* meta badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full border border-[rgba(214,178,94,0.22)] bg-[rgba(255,255,255,0.03)] text-[var(--metal2)] flex items-center gap-2 backdrop-blur-md">
                <Layers className="w-4 h-4" />
                <span className="f-mono text-[0.6rem] tracking-[0.22em] uppercase">{project.category}</span>
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[rgba(244,240,232,0.8)] flex items-center gap-2 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-[rgba(154,148,138,0.95)]" />
                <span className="f-mono text-[0.6rem] tracking-[0.22em] uppercase">{project.year}</span>
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[rgba(244,240,232,0.8)] flex items-center gap-2 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[var(--haze)]" />
                <span className="f-mono text-[0.6rem] tracking-[0.22em] uppercase">Case Study</span>
              </span>
            </motion.div>

            <motion.div style={{ y: titleY, opacity: titleOpacity }}>
              <motion.h1
                variants={fadeInUp}
                className="f-display text-[clamp(3.2rem,7.2vw,6.6rem)] leading-[0.92] tracking-tight mb-6"
              >
                <span className="italic">{project.title}</span>{" "}
                <span className="outlineText font-black not-italic">.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="f-sans text-[1.05rem] md:text-[1.25rem] text-[rgba(244,240,232,0.72)] max-w-3xl leading-relaxed mb-10"
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* hero image */}
            <motion.div variants={scaleIn} className="artifact heroWrap">
              <div className="sheen" />
              <span className="screw" style={{ top: 14, left: 14 }} />
              <span className="screw" style={{ top: 14, right: 14 }} />
              <span className="screw" style={{ bottom: 14, left: 14 }} />
              <span className="screw" style={{ bottom: 14, right: 14 }} />

              <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[26px] overflow-hidden">
                <motion.div style={{ y: yParallax }} className="w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-[1.12] transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                  />
                </motion.div>

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,178,94,0.10),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="scanline" />

                {/* corner chips */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-md">
                  <Code2 className="w-4 h-4 text-[var(--metal2)]" />
                  <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-white/85">
                    Featured
                  </span>
                </div>

                <div className="absolute top-5 right-5 z-10 px-3 py-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-md">
                  <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-white/75">
                    ID / {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* bottom caption */}
                <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--rust)] opacity-80" />
                    <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-white/80">
                      Scroll for details
                    </span>
                  </div>

                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(214,178,94,0.26)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-[var(--metal2)]" />
                      <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-white/85">
                        Open live
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-8 flex flex-col gap-18">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl border border-[rgba(214,178,94,0.25)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[var(--metal2)]" />
                  </div>
                  <h3 className="f-display text-3xl md:text-4xl font-semibold italic">
                    Overview <span className="meshText not-italic">/</span>
                  </h3>
                </div>

                <div className="artifact p-7 md:p-9">
                  <div className="sheen" />
                  <span className="screw" style={{ top: 14, left: 14 }} />
                  <span className="screw" style={{ top: 14, right: 14 }} />
                  <span className="screw" style={{ bottom: 14, left: 14 }} />
                  <span className="screw" style={{ bottom: 14, right: 14 }} />

                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="hidden md:block w-1.5 min-h-[120px] rounded-full bg-gradient-to-b from-[rgba(214,178,94,0.55)] via-[rgba(124,58,237,0.22)] to-transparent" />
                    <p className="f-sans text-[1rem] md:text-[1.05rem] leading-loose text-[rgba(244,240,232,0.75)]">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[rgba(154,148,138,0.95)]">
                    <CornerDownRight className="w-4 h-4" />
                    <span className="f-mono text-[0.55rem] tracking-[0.24em] uppercase">
                      role:{" "}
                      <span className="text-[rgba(244,240,232,0.85)]">{project.role}</span>
                    </span>
                  </div>
                </div>
              </motion.section>

              {/* Gallery */}
              <motion.section
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="pt-10 border-t border-white/5"
              >
                <div className="flex items-center justify-between gap-6 mb-8">
                  <h3 className="f-display text-2xl md:text-3xl font-semibold italic flex items-center gap-3">
                    <ImageIcon className="w-6 h-6 text-[var(--haze)]" />
                    Snapshots
                  </h3>
                  <span className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.75)]">
                      gallery / {project.gallery?.length ?? 0}
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {project.gallery && project.gallery.length > 0 ? (
                    project.gallery.map((img, index) => (
                      <motion.div
                        key={index}
                        className="tile"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.08 }}
                        whileHover={{ rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover aspect-video transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 pointer-events-none" />
                        <div className="absolute bottom-4 left-4 px-3 py-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-md">
                          <span className="f-mono text-[0.52rem] tracking-[0.26em] uppercase text-white/80">
                            Shot {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No snapshots available.</p>
                  )}
                </div>
              </motion.section>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="artifact p-7">
                  <div className="sheen" />
                  <span className="screw" style={{ top: 14, left: 14 }} />
                  <span className="screw" style={{ top: 14, right: 14 }} />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[var(--metal2)]" />
                    </div>
                    <div>
                      <p className="f-mono text-[0.55rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                        project card
                      </p>
                      <p className="f-display text-xl font-semibold italic leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mb-7">
                    <h3 className="f-mono text-[0.55rem] font-medium text-[rgba(154,148,138,0.95)] uppercase tracking-[0.26em] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--rust)]" />
                      Role
                    </h3>
                    <p className="f-sans text-lg font-semibold text-[rgba(244,240,232,0.90)]">
                      {project.role}
                    </p>
                  </div>

                  {/* Tech */}
                  <div className="mb-8">
                    <h3 className="f-mono text-[0.55rem] font-medium text-[rgba(154,148,138,0.95)] uppercase tracking-[0.26em] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--haze)]" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[0.8rem] text-[rgba(244,240,232,0.78)] cursor-default hover:bg-white/10 hover:border-[rgba(214,178,94,0.25)] transition-colors f-sans"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-[rgba(214,178,94,0.32)] to-transparent my-7" />

                  {/* Actions */}
                  <div className="flex flex-col gap-4">
                    {project.links.demo && project.links.demo !== "#" && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="group w-full py-4 rounded-2xl text-center transition-all flex items-center justify-center gap-3 relative overflow-hidden border border-[rgba(214,178,94,0.28)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)]"
                      >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background:
                              "radial-gradient(circle at 20% 30%, rgba(214,178,94,0.18), transparent 55%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.16), transparent 52%)",
                          }}
                        />
                        <ExternalLink className="w-5 h-5 text-[var(--metal2)] relative z-10" />
                        <span className="f-mono text-[0.62rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.9)] relative z-10">
                          Live Demo
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-[rgba(244,240,232,0.75)] relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    <div className="flex gap-3">
                      {project.links.github && project.links.github !== "#" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[rgba(214,178,94,0.26)] transition-all flex items-center justify-center gap-2"
                        >
                          <Github className="w-5 h-5 text-[rgba(244,240,232,0.85)]" />
                          <span className="f-mono text-[0.58rem] tracking-[0.24em] uppercase text-[rgba(244,240,232,0.82)]">
                            Code
                          </span>
                        </a>
                      )}

                      {project.links.figma && project.links.figma !== "#" && (
                        <a
                          href={project.links.figma}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[rgba(214,178,94,0.26)] transition-all flex items-center justify-center gap-2"
                        >
                          <FaFigma className="w-5 h-5 text-[rgba(244,240,232,0.85)]" />
                          <span className="f-mono text-[0.58rem] tracking-[0.24em] uppercase text-[rgba(244,240,232,0.82)]">
                            Design
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Next project */}
                {next && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="artifact p-7"
                  >
                    <div className="sheen" />
                    <span className="screw" style={{ top: 14, left: 14 }} />
                    <span className="screw" style={{ top: 14, right: 14 }} />

                    <p className="f-mono text-[0.55rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.95)] mb-3">
                      Next Project
                    </p>

                    <h3 className="f-display text-2xl md:text-3xl font-semibold italic leading-tight">
                      <span className="meshText">{next.title}</span>
                    </h3>

                    <p className="f-sans text-sm text-[rgba(244,240,232,0.68)] mt-3 line-clamp-2">
                      {next.description}
                    </p>

                    <button
                      onClick={() => navigate(`/project/${next.id}`)}
                      className="mt-6 w-full py-3 rounded-2xl border border-[rgba(214,178,94,0.26)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-all flex items-center justify-center gap-2"
                    >
                      <span className="f-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(244,240,232,0.88)]">
                        Next
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[rgba(244,240,232,0.80)]" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          
        </div>
      </article>
    </>
  );
};

export default ProjectDetail;