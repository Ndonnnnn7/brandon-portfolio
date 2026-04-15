import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Copy, ArrowUpRight, Github, Linkedin, Instagram, Terminal, Activity } from "lucide-react";

/* ─── CUSTOM MAGNETIC CURSOR ────────────────────────────────────── */
/* ─── KINETIC MARQUEE SOCIALS ──────────────────────────────────── */
const KineticSocials = () => {
  const socials = [
    { name: "GITHUB", icon: Github, href: "https://github.com/Ndonnnnn7" },
    { name: "LINKEDIN", icon: Linkedin, href: "https://linkedin.com/in/brandongeraldoadji" },
    { name: "INSTAGRAM", icon: Instagram, href: "https://instagram.com/brandonngeraldo" },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#080808] py-8 overflow-hidden group">
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {socials.map((s) => (
              <a 
                key={s.name} 
                href={s.href} 
                target="_blank" 
                className="flex items-center gap-4 text-white/30"
              >
                <s.icon className="w-6 h-6" />
                <span className="font-black text-4xl md:text-6xl tracking-tighter uppercase italic">{s.name}</span>
                <span className="text-[#FF3355] text-2xl">//</span>
              </a>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── MAIN CONTACT COMPONENT ────────────────────────────────────── */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brandon.geraldo28@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CCFF00] selection:text-black overflow-hidden pt-32 pb-12"
    >
      {/* Background System Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "100px 100px" }}
      />

      {/* Cinematic Watermark */}
      <motion.div style={{ x: watermarkX }} className="absolute top-[20%] left-0 whitespace-nowrap pointer-events-none opacity-[0.02] z-0">
        <span className="text-[25vw] font-black uppercase italic leading-none tracking-tighter">ESTABLISHED_2023</span>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* ── SYSTEM STATUS BAR ── */}
        <div className="flex flex-wrap justify-between items-center border-b border-white/10 pb-6 mb-16 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-[#CCFF00]" /> System: Live</span>
            <span className="hidden md:block">Lat: -7.9839 | Long: 112.6214</span>
          </div>
          <div className="flex gap-8">
            <span>MLG_IDN // {time}</span>
            <span className="text-[#FF3355]">Transmission_Active</span>
          </div>
        </div>

        {/* ── HERO TEXT ── */}
        <div className="mb-24">
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-black uppercase leading-[0.8] tracking-tighter italic">
            Ready to <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>Infiltrate</span> <br/>
            The Market?
          </h2>
        </div>

        {/* ── THE COMMAND CENTER (GRID) ── */}
        <div className="grid lg:grid-cols-12 gap-1 px-1 bg-white/10 border border-white/10 mb-24">
          
          {/* Email Interaction Node */}
          <div 
            onClick={handleCopyEmail}
            className="lg:col-span-8 bg-[#0a0a0a] p-8 md:p-16 flex flex-col justify-between min-h-[400px] relative overflow-hidden"
          >
            <div className="flex justify-between relative z-10">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-[#CCFF00]">EMAIL</span>
                <span className="font-black text-2xl tracking-tighter">CONTACT ME</span>
              </div>
              <Terminal className="w-6 h-6 text-white/20" />
            </div>

            <div className="relative z-10">
              <p className="font-mono text-[10px] uppercase mb-4 opacity-50 italic">Click to clone transmission ID</p>
              <h3 className="text-[clamp(1.5rem,5vw,5rem)] font-black uppercase tracking-tighter break-all leading-none">
                {copied ? "ID_CLONED_SUCCESS" : "brandon.geraldo28@gmail.com"}
              </h3>
            </div>

            {/* Visual Accents */}
            <div className="h-1 w-full bg-white/5 mt-8 overflow-hidden">
              <motion.div 
                className="h-full bg-[#CCFF00]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circOut" }}
              />
            </div>
          </div>

          {/* Secondary Info Node */}
          <div className="lg:col-span-4 bg-[#0a0a0a] p-8 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-8">
              <a href="https://wa.me/6285855462022" className="block border-l-2 border-white/10 pl-6">
                <span className="font-mono text-[9px] text-white/40 block mb-2 uppercase">Comms Line</span>
                <span className="text-2xl font-black italic block">+62 858 5546 2022</span>
              </a>

              <div className="border-l-2 border-white/10 pl-6">
                <span className="font-mono text-[9px] text-white/40 block mb-2 uppercase">Station Location</span>
                <span className="text-2xl font-black italic block uppercase tracking-tighter">Malang, Indonesia</span>
              </div>
            </div>

            <div className="bg-[#FF3355] p-6 text-black transform md:rotate-2">
              <p className="font-mono text-[10px] font-black uppercase leading-tight">
                Currently open for architecture-level front-end builds and UI/UX systems.
              </p>
            </div>
          </div>
        </div>

        {/* ── KINETIC SOCIALS BAR ── */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-4 font-mono text-[10px] uppercase text-white/30">
            <span>Global Social Presence</span>
            <span>Speed: 1x // Scroll_Controlled</span>
          </div>
          <KineticSocials />
        </div>

        {/* ── FOOTER SYSTEM ── */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-12 border-t border-white/10">
          <div className="max-w-xs">
            <span className="font-black text-4xl italic block mb-2">Brandon.</span>
            <p className="font-mono text-[9px] uppercase leading-relaxed text-white/30">
              This interface is a proprietary build. Engineered for speed, designed for impact. 
              Built with React, Framer, and Raw Discipline.
            </p>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <span className="font-mono text-[10px] block opacity-40 uppercase tracking-widest">Return to</span>
              <span className="font-black text-2xl uppercase tracking-tighter block italic">Top</span>
            </div>
            <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-8 h-8" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
