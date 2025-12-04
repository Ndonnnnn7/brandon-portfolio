import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Layers, Code2, Database, Layout } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);


  const projects = [
    // --- FRONT END  ---
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Front End",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      description: "Complex dashboard with real-time analytics using React & Recharts.",
      tech: ["React", "Tailwind", "Recharts"],
      links: { demo: "#", github: "#" },
      featured: true // Besar
    },
    {
      id: 2,
      title: "Crypto Tracker",
      category: "Front End",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
      description: "Live cryptocurrency price tracking app connecting to CoinGecko API.",
      tech: ["Vue.js", "API", "CSS Modules"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 3,
      title: "Travel Booking UI",
      category: "Front End",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      description: "Responsive booking interface with smooth framer-motion animations.",
      tech: ["Next.js", "Framer Motion"],
      links: { demo: "#", github: "#" },
      featured: false
    },

    // --- DATA  ---
    {
      id: 4,
      title: "Sales Prediction Model",
      category: "Data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      description: "Python-based machine learning model to predict quarterly sales trends.",
      tech: ["Python", "Pandas", "Scikit-Learn"],
      links: { demo: "#", github: "#" },
      featured: false
    },

    // --- UI/UX ---
    {
      id: 5,
      title: "Banking App Redesign",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
      description: "Complete overhaul of a legacy banking application focusing on accessibility.",
      tech: ["Figma", "Prototyping"],
      links: { demo: "#", github: "#" },
      featured: true // Besar (Highlight UI/UX)
    },
    {
      id: 6,
      title: "Food Delivery Mobile",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1526304640152-d4619684e884?q=80&w=2073&auto=format&fit=crop",
      description: "User-centered design process for a local food delivery startup.",
      tech: ["Figma", "User Research"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 7,
      title: "Smart Home Controller",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2071&auto=format&fit=crop",
      description: "IoT interface design for controlling smart devices.",
      tech: ["Adobe XD", "Interaction"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 8,
      title: "Fashion E-commerce",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      description: "Minimalist fashion store layout with focus on typography.",
      tech: ["Figma", "Wireframing"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 9,
      title: "Health Tracker App",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      description: "Daily activity and health monitoring dashboard.",
      tech: ["Figma", "UI Design"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 10,
      title: "Learning Management",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
      description: "Student portal dashboard for online courses.",
      tech: ["Sketch", "Auto Layout"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 11,
      title: "NFT Marketplace",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      description: "Dark mode interface for digital asset trading.",
      tech: ["Figma", "Dark Mode"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 12,
      title: "Travel Guide App",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      description: "Immersive travel experience design.",
      tech: ["Figma", "Prototyping"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 13,
      title: "Podcast Player",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
      description: "Audio player interface with playlist management.",
      tech: ["Figma", "Component Set"],
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      id: 14,
      title: "Car Dashboard",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
      description: "HMI design for modern electric vehicle.",
      tech: ["Figma", "HMI"],
      links: { demo: "#", github: "#" },
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

  return (
    <section id="projects" className="relative w-full min-h-screen py-24 text-white">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-accent"></span>
                  <span className="text-accent font-medium tracking-widest uppercase text-sm">Project's</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Recent <span className="text-gray-500">Creations.</span>
              </h2>
           </div>

           {/* Filter Tabs - Modern Pill Style */}
           <div className="flex flex-wrap gap-2">
             {categories.map((cat) => (
               <button
                 key={cat.name}
                 onClick={() => setActiveCategory(cat.name)}
                 className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                   activeCategory === cat.name
                     ? 'bg-white text-black border-white'
                     : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                 }`}
               >
                 <cat.icon className="w-4 h-4" />
                 {cat.name}
               </button>
             ))}
           </div>
        </div>

        {/* Project Grid (Masonry/Bento Logic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <AnimatePresence mode='popLayout'>
             {filteredProjects.map((project, index) => (
               <motion.div
                 layout
                 key={project.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-500 ${
                   // Logika Bento: Jika project 'featured' DAN kita sedang di tab 'All' atau tab kategori-nya, dia jadi besar
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
        </div>

        {/* Show More Hint if too many */}
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">Showing {filteredProjects.length} projects in {activeCategory}</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;