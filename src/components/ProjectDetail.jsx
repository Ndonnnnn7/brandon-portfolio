import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
// 1. Tambahkan useScroll dan useTransform
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers,
  Calendar,
  ImageIcon,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

// --- DATA PROJECTS ---
const projectsData = [
  {
    id: 1,
    title: "InterStellar",
    category: "Front End",
    image: "/img/Interstellar.png",
    gallery: [ "/img/projects/InterStellar1.png", "/img/projects/InterStellar2.png" ],
    description:
      "Website to explore everything from tiny particles to the universe with AI.",
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
    description:
      "Application with a chatbot to check calories, get recipes, and buy ingredients instantly.",
    fullDescription:
      "Masakin is a comprehensive culinary companion app designed to simplify meal planning. It integrates a smart chatbot that suggests recipes based on available ingredients and dietary restrictions. The app also features a calorie tracker and an instant ingredient purchasing system connected to local vendors.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
    role: "Mobile Developer & UI/UX Designer",
    year: "2025",
    links: {
      demo: "#",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 3,
    title: "Hack.id",
    category: "Front End",
    image: "/img/Hack.id.png",
    description:
      "AI-powered website that helps you discover hackathon events from around the world.",
    fullDescription:
      "Hack.id aggregates hackathon events globally, providing a centralized platform for developers to find competitions. The AI component personalizes recommendations based on the user's tech stack and interests, ensuring they find the most relevant events to boost their skills.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "Front End Developer",
    year: "2024",
    links: {
      demo: "#",
      github: "https://github.com/DarveshAziz/Hack.id",
      figma: "#",
    },
  },
  {
    id: 4,
    title: "DeafSpace",
    category: "UI/UX",
    image: "/img/DeafSpace.png",
    description:
      "App that allows deaf individuals to easily order sign language interpreters.",
    fullDescription:
      "DeafSpace addresses the communication barrier faced by the deaf community. This app provides an on-demand service to book certified sign language interpreters for various needs, such as medical appointments, legal consultations, or social gatherings. The design focuses on high accessibility and visual clarity.",
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
    description:
      "App for pet services, providing care and support to ensure the well-being of animals.",
    fullDescription:
      "Furever Pet Care creates an ecosystem for pet owners, connecting them with vets, groomers, and pet sitters. The project emphasized creating a friendly, calming user interface that reduces the stress often associated with finding emergency pet care.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2024",
    links: {
      demo: "#",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 7,
    title: "Infotional",
    category: "UI/UX",
    image: "/img/Infotional.png",
    description:
      "App that helps students access scholarships, mentorship, and various educational resources.",
    fullDescription:
      "Infotional is designed to democratize access to educational opportunities. By aggregating scholarships and mentorship programs, it helps students from all backgrounds find the support they need. The UX design prioritizes information architecture to make searching through thousands of listings intuitive.",
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
    description:
      "App that helps parents find trusted babysitters, ensuring quality care.",
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
      "WeCare is a critical safety application designed with a panic button feature for immediate assistance. The UI is designed to be accessible under high-stress situations, with large, clear interactions and a stealth mode for user safety.",
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
    gallery: ["/img/projects/Bundaku1.png", "/img/projects/Bundaku2.png"],
    description:
      "App for moms and babies, for pregnancy monitoring and stunting prevention.",
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
      "Legana simplifies legal literacy. By allowing users to upload documents or describe issues, the app uses AI logic to suggest relevant laws and legal actions. The design challenge was presenting dense legal information in a digestible, user-friendly format.",
    tech: ["Figma", "Prototyping", "User Testing"],
    role: "UI/UX Designer",
    year: "2025",
    links: {
      demo: "#",
      github: "#",
      figma: "https://www.figma.com/proto/pq9XdoJGny4CdaOK6i1gaT/Legana?page-id=3%3A496&node-id=3-507&p=f&viewport=833%2C475%2C0.16&t=mJnjHmtzCDlPMtTI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A507",
    },
  },
  {
    id: 12,
    title: "Sehat Mental UB",
    category: "UI/UX",
    image: "/img/Sehatmental.png",
    description:
      "A platform designed to help students access emotional and psychological support.",
    fullDescription:
      "Sehat Mental UB is a university-centric mental health platform. It connects students with counselors and provides self-help resources. The design prioritizes privacy, calmness, and ease of access to emergency hotlines.",
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
      "This project implements an automated number plate recognition (ANPR) system. By training a YOLOv8 model, the system can detect license plates in real-time video feeds or images. The detected regions are then processed using EasyOCR to extract the alphanumeric characters, useful for parking systems or traffic monitoring.",
    tech: ["Python", "YOLOv8", "EasyOCR", "Computer Vision"],
    role: "AI Engineer",
    year: "2025",
    links: {
      demo: "#",
      github: "#",
      figma: "#",
    },
  },
  {
    id: 14,
    title: "Senggreng Tourism Website",
    category: "Front End",
    image: "/img/desasenggreng.png",
    description:
      "A tourism website for Senggreng Village, showcasing tourist attractions and restaurants.",
    fullDescription:
      "This website serves as a digital portal for Senggreng Village tourism. It showcases local attractions, culinary spots, and homestays. Built with React, it features a responsive design and interactive maps to guide tourists through the village highlights.",
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

  const project = projectsData.find((p) => p.id === parseInt(id));

  const nextProject = projectsData.find(
    (p) => p.id === (project?.id === projectsData.length ? 1 : project?.id + 1)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // --- 2. LOGIKA PARALLAX ---
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0], ["0%", "0%"]);

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

  // --- VARIANTS ANIMASI ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Definisi scaleIn agar tidak error (digunakan di Hero Image)
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <article
      ref={containerRef}
      className="min-h-screen w-full bg-[#0a0a0a] text-white relative overflow-hidden selection:bg-purple-500/30"
    >
      {/* --- BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {/* --- BACK BUTTON --- */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-sm font-medium tracking-wide">
            Back to Projects
          </span>
        </motion.button>

        {/* --- HERO SECTION --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16 md:mb-24"
        >
          {/* Metadata Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3 mb-6 text-sm font-medium"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-purple-300 flex items-center gap-2 backdrop-blur-md">
              <Layers className="w-4 h-4" />
              {project.category}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 flex items-center gap-2 backdrop-blur-md">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              {project.title}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12"
          >
            {project.description}
          </motion.p>

          {/* --- HERO IMAGE WITH PARALLAX --- */}
          <motion.div
            variants={scaleIn}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl shadow-purple-900/20 backdrop-blur-sm group z-0"
          >
            {/* Wrapper untuk Parallax Movement */}
            <motion.div style={{ y: yParallax }} className="w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                // scale-110 penting agar tidak ada gap putih saat gambar bergerak
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>

            {/* Overlay Gradient (Diam, tidak ikut parallax agar tetap menutupi container) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-mono text-white/80 z-10">
              Featured Project
            </div>
          </motion.div>
        </motion.div>

        {/* --- ENHANCED CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* --- LEFT CONTENT (Narrative) --- */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            {/* Overview Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                  <Layers className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Overview
                </h3>
              </div>

              <div className="relative pl-6 border-l-2 border-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent">
                <p className="text-gray-300 text-lg leading-loose font-light">
                  {project.fullDescription || project.description}
                  <br />
                  <br />
                  {!project.fullDescription &&
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>
              </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-8 border-t border-white/5"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-blue-400" />
                Project Snapshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {project.gallery && project.gallery.length > 0 ? (
                  project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden relative group transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/40"
                    >
                      {/* Gambar Gallery */}
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay Effect (Opsional, agar tetap estetik) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent group-hover:from-transparent transition-all"></div>
                    </div>
                  ))
                ) : (
                  // Fallback jika tidak ada gallery di data (opsional)
                  <p className="text-gray-500 italic">
                    No snapshots available.
                  </p>
                )}
              </div>
            </motion.section>

            {/* ... kode setelahnya ... */}
          </div>

          {/* --- RIGHT SIDEBAR (Sticky) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md space-y-8">
              {/* Role */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div> Role
                </h3>
                <p className="text-xl font-semibold">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div> Tech
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 cursor-default hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                {project.links.demo && project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl text-center hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                <div className="flex gap-4">
                  {project.links.github && project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 border border-white/10 bg-white/5 text-center rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" /> Code
                    </a>
                  )}
                  {project.links.figma && project.links.figma !== "#" && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 border border-white/10 bg-white/5 text-center rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                    >
                      <FaFigma className="w-5 h-5" /> Design
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- NEXT PROJECT NAVIGATOR --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 hover:border-white/20 transition-all group">
            <div>
              <p className="text-gray-500 mb-3 text-sm font-mono uppercase tracking-wider">
                Next Project
              </p>
              <h3 className="text-3xl md:text-4xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
                {
                  projectsData.find(
                    (p) =>
                      p.id ===
                      (project.id === projectsData.length ? 1 : project.id + 1)
                  )?.title
                }
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                navigate(
                  `/project/${
                    project.id === projectsData.length ? 1 : project.id + 1
                  }`
                )
              }
              className="p-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm"
            >
              <ArrowUpRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default ProjectDetail;
