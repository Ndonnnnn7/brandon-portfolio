import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion"; // Import useInView
import { Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const containerRef = useRef(null);
  // useInView untuk mentrigger animasi saat elemen masuk layar
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const competitions = [
    {
      id: 1,
      title: "1st Place I/O Festival Business Plan Competition",
      location: "Tarumanagara University", 
      image: "img/Untar.jpeg",
      badge: "WINNER",
    },
    {
      id: 2,
      title: "1st Place Bizznovation Business Plan Competition",
      location: "Pradita University",
      image: "img/Bizzno.jpg",
      badge: "WINNER",
    },
    {
      id: 3,
      title: "2nd Place Business Plan Competition Recursion 1.0",
      location: "University of Hasanuddin",
      image: "img/Recursion.jpg",
      badge: "WINNER",
    },
    {
      id: 4,
      title: "2nd Place Business Plan Competition ITCC",
      location: "University of Udayana", 
      image: "img/Udayana.jpg",
      badge: "WINNER",
    },
    {
      id: 5,
      title: "1st Place Business Plan Competition TechX",
      location: "President University", 
      image: "img/President.jpg",
      badge: "WINNER",
    },
    {
      id: 6,
      title: "1st Place Business Plan Competition IT Convert",
      location: "University of Jember", 
      image: "img/ITC.jpg",
      badge: "WINNER",
    },
    {
      id: 7,
      title: "1st Place Business Plan Competition SEMET",
      location: "University of Gadjah Mada", 
      image: "img/UGM.jpg",
      badge: "WINNER",
    },
    {
      id: 8,
      title: "2nd Place Business Idea Proposal Competitio",
      location: "UPN Veteran", 
      image: "img/Ilpol.jpg",
      badge: "WINNER",
    },
  ];

  const certifications = [
    {
      name: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "2025",
      id: "53XEKYQ4KXRN",
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "Revou Indonesia",
      date: "2025",
      id: "SEFC210425-01-1-00018",
    },
    {
      name: "Web Design for Beginners",
      issuer: "Udemy",
      date: "2025",
      id: "G-UX-25",
    },
  ];

  // --- VARIANTS ANIMASI ---
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda antar kartu
        delayChildren: 0.2
      }
    }
  };

  const polaroidEntry = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative w-full min-h-screen py-24 text-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent"></span>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Milestones
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic font-serif">Glory.</span>
          </h2>
        </motion.div>

        {/* --- MAIN SECTION: COMPETITION HIGHLIGHTS (Polaroid Style) --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
        >
          {competitions.map((item) => (
            <motion.div 
              key={item.id} 
              className="group relative"
              variants={polaroidEntry}
            >
              <div className="relative bg-white p-4 pb-6 rounded-sm shadow-xl transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/90 transform -rotate-2 backdrop-blur-sm z-20 shadow-sm"></div>

                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {item.badge}
                  </div>
                </div>

                <div className="text-center px-2">
                  <h3 className="font-bold text-xl text-gray-900 font-serif leading-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-8 bg-gray-300"></span>
                    <p className="text-xs text-gray-500 font-sans uppercase tracking-wide font-medium">
                      {item.location}
                    </p>
                    <span className="h-px w-8 bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- SECONDARY SECTION: CERTIFICATIONS (Ticket Style) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title */}
          <motion.div 
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-4">
              Licenses & <br />
              Certifications
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Continuous learning is key. Here are some professional
              certifications I've earned to validate my technical skills.
            </p>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </motion.div>

          {/* Right List */}
          <motion.div 
            className="lg:col-span-8 grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between overflow-hidden"
                variants={slideInRight}
              >
                <span className="absolute -right-4 -bottom-4 text-6xl font-black text-white/5 select-none pointer-events-none font-mono">
                  {cert.date}
                </span>

                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {cert.issuer} • ID: {cert.id}
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-white/50"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;