import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

/* ─── CUSTOM MAGNETIC CURSOR ────────────────────────────────────── */
/* ─── ANIMATION WRAPPER ─────────────────────────────────────────── */
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

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
const Achievements = () => {
  const sectionRef = useRef(null);

  // Accordion State: Set item pertama terbuka secara default
  const [activeId, setActiveId] = useState(1); 

  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);

  // --- DATA ---
  const competitions = [
    { id: 1, title: "Awardee Bakti Champions Scholarship 2025", location: "Bank Central Asia (BCA)", image: "img/Bca.jpeg", badge: "SCHOLARSHIP" },
    { id: 2, title: "1st Place I/O Fest Business Plan", location: "Tarumanagara University", image: "img/Untar.jpeg", badge: "WINNER" },
    { id: 3, title: "1st Place Bizznovation Business Plan", location: "Pradita University", image: "img/Bizzno.jpg", badge: "WINNER" },
    { id: 4, title: "2nd Place Business Plan Recursion", location: "University of Hasanuddin", image: "img/Recursion.jpg", badge: "WINNER" },
    { id: 5, title: "2nd Place Business Plan ITCC", location: "University of Udayana", image: "img/Udayana.jpg", badge: "WINNER" },
    { id: 6, title: "1st Place Business Plan TechX", location: "President University", image: "img/President.jpg", badge: "WINNER" },
    { id: 7, title: "1st Place Business Plan IT Convert", location: "University of Jember", image: "img/ITC.jpg", badge: "WINNER" },
    { id: 8, title: "1st Place Business Plan SEMET", location: "University of Gadjah Mada", image: "img/UGM.jpg", badge: "WINNER" },
    { id: 9, title: "2nd Place Business Idea Proposal", location: "UPN Veteran", image: "img/Ilpol.jpg", badge: "WINNER" },
  ];

  const certifications = [
    { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "2025", id: "53XEKYQ4KXRN" },
    { name: "Introduction to Software Engineering", issuer: "Revou Indonesia", date: "2025", id: "SEFC210425-01-1-00018" },
    { name: "Web Design for Beginners", issuer: "Udemy", date: "2025", id: "G-UX-25" },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050505] text-white py-24 md:py-40 font-sans selection:bg-[#CCFF00] selection:text-black"
    >
      {/* Background Blueprint Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Giant Parallax Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-[10%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-[0.03] select-none"
      >
        <span className="text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none whitespace-nowrap tracking-tighter">
          HONORS
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        
        {/* ── HEADER ── */}
        <FadeUp>
          <motion.div style={{ y: headY }} className="mb-24 md:mb-32">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b-2 border-white/10 pb-10">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-[#CCFF00]" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#CCFF00] font-mono font-bold">
                    Vol. 05 — Milestones
                  </span>
                </div>

                <h2 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-white">
                  MOMENTS <br/>
                  <span className="text-[#FF3355]">OF GLORY.</span>
                </h2>
                
                <p className="font-mono text-xs md:text-sm mt-8 text-gray-400 max-w-xl uppercase tracking-widest leading-relaxed border-l-2 border-[#FF3355] pl-4">
                  Highlights from battlegrounds, scholarships, and technical certifications. Curated proof of work.
                </p>
              </div>

              {/* Data Status Block */}
              <div className="w-full lg:w-auto mt-8 lg:mt-0">
                <div className="bg-white text-black p-6 border-2 border-black transform md:rotate-2 shadow-[8px_8px_0px_rgba(204,255,0,0.5)]">
                  <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-4">
                     <span className="font-mono text-[10px] font-bold uppercase">Total Awards</span>
                     <span className="font-black text-2xl text-[#FF3355]">{competitions.length}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/20 pb-2">
                     <span className="font-mono text-[10px] font-bold uppercase">Licenses</span>
                     <span className="font-black text-2xl">{certifications.length}</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </FadeUp>

        {/* ── COMPETITIONS LIST (Interactive Accordion Style) ── */}
        <div className="mb-32">
          
          {/* Table Header */}
          <FadeUp>
             <div className="hidden md:flex items-center justify-between py-4 px-4 font-mono text-[10px] tracking-widest uppercase text-white/40 border-b-2 border-white/10">
               <span className="w-16">ID</span>
               <span className="flex-1">Title / Designation</span>
               <span className="w-48 text-right">Location</span>
               <span className="w-32 text-right">Status</span>
               <span className="w-12 text-center">+/-</span>
             </div>
          </FadeUp>

          {competitions.map((item, idx) => {
            const isActive = activeId === item.id;

            return (
              <FadeUp key={item.id} delay={idx * 0.05}>
                <div className={`relative border-b border-white/10 transition-colors duration-300 ${isActive ? "bg-white/[0.03]" : ""}`}>
                  
                  {/* ROW HEADER (Clickable) */}
                  <div 
                    className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-4 gap-4"
                    onClick={() => setActiveId(isActive ? null : item.id)}
                  >
                    {/* ID & Title */}
                    <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1">
                      <span className={`w-8 md:w-16 font-mono text-[10px] md:text-xs font-bold tracking-widest mt-1 md:mt-0 ${isActive ? "text-[#CCFF00]" : "opacity-50"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight transition-colors duration-300 ${isActive ? "text-[#CCFF00]" : "text-white"}`}>
                          {item.title}
                        </h3>
                        {/* Mobile Location */}
                        <span className="md:hidden font-mono text-[9px] uppercase tracking-widest mt-2 block opacity-70">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Location (Desktop) & Badge */}
                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 pl-12 md:pl-0">
                      <span className="hidden md:block w-48 text-right font-mono text-xs uppercase tracking-widest opacity-60">
                        {item.location}
                      </span>
                      
                      <div className="w-32 text-left md:text-right">
                        <span className={`font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] border px-3 py-1 transition-colors ${isActive ? "border-[#CCFF00] text-[#CCFF00]" : "border-white/20"}`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className={`hidden md:flex w-12 items-center justify-center font-mono text-2xl font-light transition-transform duration-300 ${isActive ? "text-[#CCFF00] rotate-180" : "text-white/30"}`}>
                        {isActive ? "−" : "+"}
                      </div>
                    </div>
                  </div>

                  {/* ── EXPANDABLE IMAGE ACCORDION ── */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-8 md:pl-[5.5rem] md:pr-16">
                          <div className="relative w-full bg-[#030303] border-2 border-[#CCFF00] p-2 md:p-3">
                            
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-[200px] md:h-[500px] object-cover contrast-125"
                              loading="lazy"
                            />
                            
                            {/* Decorative Brutalist Accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-[#CCFF00]" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-[#CCFF00]" />
                            
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(204,255,0,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* ── CERTIFICATIONS (Barcode Tickets) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Title */}
          <FadeUp className="lg:col-span-4 sticky top-32">
            <h3 className="text-[clamp(3rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Licenses & <br/> <span className="text-[#CCFF00]">Certificates.</span>
            </h3>
            <p className="font-mono text-xs text-white/50 leading-relaxed uppercase border-l-2 border-[#CCFF00] pl-4">
              Continuous learning is the edge. These credentials validate foundations and technical growth.
            </p>
          </FadeUp>

          {/* Right Tickets */}
          <div className="lg:col-span-8 grid gap-8">
            {certifications.map((cert, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative bg-[#0A0A0A] border border-white/20 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center overflow-hidden">
                  
                  {/* Giant Background Number */}
                  <span className="absolute -right-4 -bottom-8 text-[120px] font-black text-white/[0.03] z-0 select-none">
                    {cert.date}
                  </span>

                  {/* Left: Info */}
                  <div className="relative z-10 flex-1 w-full md:w-auto mb-6 md:mb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-[#FF3355] animate-pulse" />
                      <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/50">
                        {cert.issuer}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-4">
                      {cert.name}
                    </h4>

                    {/* Fake Barcode */}
                    <div className="flex flex-col gap-2">
                       <div className="h-6 w-48 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_4px,#fff_4px,#fff_5px,transparent_5px,transparent_8px)] opacity-30" />
                       <span className="font-mono text-[10px] tracking-widest text-[#CCFF00]">
                         ID: {cert.id}
                       </span>
                    </div>
                  </div>

                  {/* Right: Verify Button */}
                  <a 
                    href="#" 
                    className="relative z-10 w-full md:w-auto text-center font-mono text-[10px] uppercase font-bold tracking-[0.2em] border-2 border-white px-6 py-4 flex justify-center items-center gap-2"
                  >
                    VERIFY <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  {/* Brutalist Cut-out corners */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#050505] border-r border-white/20 rounded-full" />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#050505] border-l border-white/20 rounded-full" />

                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
