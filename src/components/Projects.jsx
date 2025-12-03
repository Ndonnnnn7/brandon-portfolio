import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Dashboard', 
      desc: 'Sistem manajemen toko online dengan analitik real-time dan dashboard interaktif.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    { 
      id: 2, 
      title: 'Portfolio Website', 
      desc: 'Website personal branding responsif dengan animasi modern dan UX terbaik.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
    },
    { 
      id: 3, 
      title: 'AI Image Generator', 
      desc: 'Aplikasi generate gambar AI menggunakan teknologi machine learning terkini.',
      tags: ['OpenAI', 'React', 'API'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div name="projects" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-12 text-center"
        >
          <motion.p 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Featured Projects
          </motion.p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Eksplorasi koleksi proyek terbaik saya dengan teknologi modern dan desain yang memukau
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0"
        >
          {projects.map(({ id, title, desc, tags, gradient }) => (
            <motion.div 
              key={id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20">
                
                {/* Image/Preview Section */}
                <div className="relative h-56 w-full bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></motion.div>
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <motion.div
                      animate={hoveredId === id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className={`text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                        {id}
                      </div>
                      <div className="text-gray-500 text-sm tracking-widest">PROJECT</div>
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                    animate={hoveredId === id ? { x: ['-100%', '100%'] } : { x: '-100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  ></motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-4 py-3 bg-gradient-to-r ${gradient} rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Demo
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                    </motion.button>

                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-bold hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Tertarik dengan proyek lainnya?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Lihat Semua Proyek
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;