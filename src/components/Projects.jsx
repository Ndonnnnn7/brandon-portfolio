import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Layers, Code2, Database, Layout } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  // --- DATA PROJECTS (Sama seperti sebelumnya) ---
  const projects = [
    {
      id: 1,
      title: "InterStellar",
      category: "Front End",
      image: "img/Interstellar.png",
      description: "Website to explore everything from tiny particles to the universe with AI",
      tech: ["Three.js", "API", "React"],
      links: { demo: "https://interstellar-phi-beryl.vercel.app/", github: "https://github.com/SakaGintoki/Interstellar" },
      featured: true
    },
    {
      id: 2,
      title: "Masakin Application",
      category: "Front End",
      image: "img/Masakin1.png",
      description: "Aplication with a chatbot to check calories, get recipes, and buy ingredients instantly.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 3,
      title: "Hack.id",
      category: "Front End",
      image: "img/Hack.id.png",
      description: "AI-powered website that helps you discover hackathon events from around the world.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "https://github.com/DarveshAziz/Hack.id" },
      featured: false
    },
    {
      id: 4,
      title: "DeafSpace",
      category: "UI/UX",
      image: "img/DeafSpace.png",
      description: "App that allows deaf individuals to easily order sign language interpreters",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/7pEBT3wVsdw42AHuchP96x/Raion-Hackjam-3?page-id=5%3A8&node-id=233-3135&viewport=641%2C-1842%2C0.24&t=sn4PMhe2xBdW7Gdf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=233%3A3458&show-proto-sidebar=1"},
      featured: false
    },
    {
      id: 5,
      title: "Kiddora",
      category: "UI/UX",
      image: "img/Kiddora.png",
      description: "A platform that helps families find dependable babysitters to ensure quality care for their little ones.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/nKv20vZ0eMc1lbcaPiIww4/Kiddora?page-id=1%3A3&node-id=249-2724&viewport=-3940%2C-2018%2C0.38&t=tl48gWN5NE12ucF8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A427&show-proto-sidebar=1"},
      featured: true
    },
    {
      id: 6,
      title: "Furever Pet Care",
      category: "UI/UX",
      image: "img/Furever.png",
      description: "App for pet services, providing care and support to ensure the well-being of animals.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 7,
      title: "Infotional",
      category: "UI/UX",
      image: "img/Infotional.png",
      description: "App that helps students access scholarships, mentorship, and various educational.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/6GqXh0ZABe9qsb78LuSOSG/Internship-(Infotional)?page-id=6%3A2&node-id=798-17189&p=f&viewport=133%2C342%2C0.05&t=1NdSEsLvWTE6OWkP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=798%3A1487",},
      featured: true
    },
    {
      id: 8,
      title: "LittleSteps",
      category: "UI/UX",
      image: "img/LittleKids.png",
      description: "Minimalist fashion store layout with focus on typography.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/SEqFf1D4euTttq0SXT3gub/LittleSteps?page-id=20%3A8589&node-id=55-1315&p=f&viewport=607%2C-1930%2C0.23&t=b2cKUrbFM73U9fb8-1&scaling=scale-down&content-scaling=fixed",},
      featured: false
    },
    {
      id: 9,
      title: "WeCare",
      category: "UI/UX",
      image: "img/WeCare.png",
      description: "App that enables victims of sexual harassment to quickly contact the police or authorities.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/VZnPxD4CemjN22jSCEJz3n/WeCare?page-id=467%3A726&node-id=467-727&p=f&viewport=1470%2C926%2C0.57&t=7o2mTgRz6Ds7aGhM-1&scaling=scale-down&content-scaling=fixed"},
      featured: false
    },
    {
      id: 10,
      title: "Bundaku",
      category: "UI/UX",
      image: "img/Bundaku.png",
      description: "App for moms and babies, for pregnancy monitoring and stunting.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/r3FH9ZgbTtkebwyflJlzQH/BundaKu?page-id=601%3A2195&node-id=601-2485&viewport=-1802%2C605%2C0.49&t=u0LlshESnMPJsH9l-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=601%3A2455"},
      featured: false
    },
    {
      id: 11,
      title: "Legana",
      category: "UI/UX",
      image: "img/Legana.png",
      description: "App that analyzes legal documents or issues from photos or text and suggests relevant laws and actions.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/pq9XdoJGny4CdaOK6i1gaT/Legana?page-id=3%3A496&node-id=3-507&p=f&viewport=833%2C475%2C0.16&t=mJnjHmtzCDlPMtTI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A507"},
      featured: true
    },
    {
      id: 12,
      title: "Sehat Mental UB ",
      category: "UI/UX",
      image: "img/Sehatmental.png",
      description: "Immersive travel experience design.",
      tech: ["Figma", "Prototyping", "User Testing"],
      links: { demo: "https://www.figma.com/proto/tvrM7wbl45nRcTfnLGnvQT/Sehat-Mental-UB?page-id=29%3A1902&node-id=29-1903&viewport=224%2C-351%2C0.5&t=9TVqvObvioflH02R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A1903&show-proto-sidebar=1"},
      featured: false
    },
    {
      id: 13,
      title: "Detection License Plate",
      category: "Data",
      image: "img/plate.avif",
      description: "Using a YOLOv8 model to detect vehicle license plates and EasyOCR to read the plate text.",
      tech: ["Phyton", "Pre-Trained Model", "Visualization"],
      links: { demo: "#", github: "#" },
      featured: true
    },
    {
      id: 14,
      title: "Senggreng Tourism Website",
      category: "Front End",
      image: "img/desasenggreng.png",
      description: "A tourism website for Senggreng Village, showcasing tourist attractions and restaurants.",
      tech: ["Three.js", "API", "React"],
      links: { demo: "https://desa-senggreng.vercel.app/home", github: "https://github.com/Weedanta/Desa-Senggreng" },
      featured: false
    },
  ];

  const categories = [
    { name: "All", icon: Layers },
    { name: "UI/UX", icon: Layout },
    { name: "Front End", icon: Code2 },
    { name: "Data", icon: Database },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // --- ANIMATION VARIANTS (Natural Feel) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <section id="projects" className="relative w-full min-h-screen py-24 text-white">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-accent"></span>
                  <span className="text-accent font-medium tracking-widest uppercase text-sm">Selected Works</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Digital</span> <br/>
                <span className="italic font-serif font-light text-gray-300">Experiences.</span>
              </h2>
           </div>

           {/* Modern Tabs */}
           <div className="flex flex-wrap gap-2">
             {categories.map((cat) => (
               <button
                 key={cat.name}
                 onClick={() => setActiveCategory(cat.name)}
                 className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                   activeCategory === cat.name
                     ? 'bg-white text-black border-white'
                     : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                 }`}
               >
                 {cat.name}
               </button>
             ))}
           </div>
        </div>

        {/* Project Grid (Masonry/Bento Logic) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
        >
           <AnimatePresence mode='popLayout'>
             {filteredProjects.map((project) => (
               <motion.div
                 layout
                 key={project.id}
                 // Gunakan variants untuk animasi masuk awal + filter
                 variants={cardVariants}
                 initial="hidden"
                 animate="visible"
                 exit="exit"
                 className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-500 ${
                   project.featured ? 'md:col-span-2 lg:col-span-2 row-span-2 min-h-[400px]' : 'col-span-1 min-h-[300px]'
                 }`}
                 onMouseEnter={() => setHoveredProject(project.id)}
                 onMouseLeave={() => setHoveredProject(null)}
               >
                  {/* Image Container */}
                  <div className="absolute inset-0 w-full h-full">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {/* Tags */}
                        <div className="flex items-center justify-between mb-3">
                           <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/10">
                              {project.category}
                           </span>
                           
                           {/* Links (Visible on Hover) */}
                           <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                              <a href={project.links.github} className="p-2 bg-white/20 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                                <Github className="w-4 h-4" />
                              </a>
                              <a href={project.links.demo} className="p-2 bg-white/20 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                           </div>
                        </div>

                        <h3 className={`font-bold text-white mb-2 ${project.featured ? 'text-3xl' : 'text-xl'}`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-gray-300 line-clamp-2 mb-4 ${project.featured ? 'text-base max-w-lg' : 'text-sm'}`}>
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                             <span key={i} className="text-xs text-gray-500 font-mono">#{t}</span>
                          ))}
                        </div>
                      </div>
                  </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

        {/* Show More Hint if too many */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
            <p className="text-gray-500 text-sm">Showing {filteredProjects.length} projects in {activeCategory}</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;