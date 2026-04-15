import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Terminal, Activity } from "lucide-react";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 34 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const KineticSocials = () => {
  const socials = [
    { name: "GITHUB", icon: Github, href: "https://github.com/Ndonnnnn7" },
    { name: "LINKEDIN", icon: Linkedin, href: "https://linkedin.com/in/brandongeraldoadji" },
    { name: "INSTAGRAM", icon: Instagram, href: "https://instagram.com/brandonngeraldo" },
  ];

  return (
    <div className="group w-full overflow-hidden border-y border-white/10 bg-[#080808] py-8">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            {socials.map((social) => (
              <a
                key={`${social.name}-${i}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/30"
              >
                <social.icon className="h-6 w-6" />
                <span className="text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
                  {social.name}
                </span>
                <span className="text-2xl text-[#FF3355]">//</span>
              </a>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-32 pb-12 font-sans text-white selection:bg-[#CCFF00] selection:text-black"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-[20%] left-0 z-0 whitespace-nowrap opacity-[0.02] pointer-events-none"
      >
        <span className="text-[25vw] font-black uppercase italic leading-none tracking-tighter">
          ESTABLISHED_2023
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        <FadeUp className="mb-16 flex flex-wrap items-center justify-between border-b border-white/10 pb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-[#CCFF00]" />
              System: Live
            </span>
            <span className="hidden md:block">Lat: -7.9839 | Long: 112.6214</span>
          </div>
          <div className="flex gap-8">
            <span>MLG_IDN // {time}</span>
            <span className="text-[#FF3355]">Transmission_Active</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,12vw,14rem)] font-black uppercase italic leading-[0.8] tracking-tighter"
          >
            Ready to <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              Infiltrate
            </span>{" "}
            <br />
            The Market?
          </motion.h2>
        </FadeUp>

        <FadeUp delay={0.12} className="mb-24 grid gap-1 border border-white/10 bg-white/10 px-1 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 28, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleCopyEmail}
            className="relative flex min-h-[400px] flex-col justify-between overflow-hidden bg-[#0a0a0a] p-8 md:p-16 lg:col-span-8"
          >
            <div className="relative z-10 flex justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-[#CCFF00]">EMAIL</span>
                <span className="text-2xl font-black tracking-tighter">CONTACT ME</span>
              </div>
              <Terminal className="h-6 w-6 text-white/20" />
            </div>

            <div className="relative z-10">
              <p className="mb-4 font-mono text-[10px] uppercase italic opacity-50">
                Click to clone transmission ID
              </p>
              <h3 className="break-all text-[clamp(1.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tighter">
                {copied ? "ID_CLONED_SUCCESS" : "brandon.geraldo28@gmail.com"}
              </h3>
            </div>

            <div className="mt-8 h-1 w-full overflow-hidden bg-white/5">
              <motion.div
                className="h-full bg-[#CCFF00]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "circOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-12 bg-[#0a0a0a] p-8 lg:col-span-4"
          >
            <div className="flex flex-col gap-8">
              <a href="https://wa.me/6285855462022" className="block border-l-2 border-white/10 pl-6">
                <span className="mb-2 block font-mono text-[9px] uppercase text-white/40">Comms Line</span>
                <span className="block text-2xl font-black italic">+62 858 5546 2022</span>
              </a>

              <div className="border-l-2 border-white/10 pl-6">
                <span className="mb-2 block font-mono text-[9px] uppercase text-white/40">
                  Station Location
                </span>
                <span className="block text-2xl font-black uppercase italic tracking-tighter">
                  Malang, Indonesia
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="bg-[#FF3355] p-6 text-black md:rotate-2"
            >
              <p className="font-mono text-[10px] font-black uppercase leading-tight">
                Currently open for architecture-level front-end builds and UI/UX systems.
              </p>
            </motion.div>
          </motion.div>
        </FadeUp>

        <FadeUp delay={0.18} className="mb-24">
          <div className="mb-4 flex items-end justify-between font-mono text-[10px] uppercase text-white/30">
            <span>Global Social Presence</span>
            <span>Speed: 1x // Scroll_Controlled</span>
          </div>
          <KineticSocials />
        </FadeUp>

        <div className="flex flex-col items-end justify-between gap-8 border-t border-white/10 pt-12 md:flex-row">
          <FadeUp delay={0.22} className="max-w-xs">
            <span className="mb-2 block text-4xl font-black italic">Brandon.</span>
            <p className="font-mono text-[9px] uppercase leading-relaxed text-white/30">
              This interface is a proprietary build. Engineered for speed, designed for impact. Built with
              React, Framer, and Raw Discipline.
            </p>
          </FadeUp>

          <FadeUp delay={0.26}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-6"
            >
              <div className="text-right">
                <span className="block font-mono text-[10px] uppercase tracking-widest opacity-40">
                  Return to
                </span>
                <span className="block text-2xl font-black uppercase italic tracking-tighter">Top</span>
              </div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex h-16 w-16 items-center justify-center border border-white/20"
              >
                <ArrowUpRight className="h-8 w-8" />
              </motion.div>
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Contact;
