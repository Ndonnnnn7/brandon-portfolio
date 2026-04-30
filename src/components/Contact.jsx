import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const MotionDiv = motion.div;

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <MotionDiv
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </MotionDiv>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const services = ["UI/UX Design", "React Interface", "Design System", "Portfolio Build"];

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/Ndonnnnn7" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/brandongeraldoadji" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/brandonngeraldo" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta" }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("brandon.geraldo28@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#050505] px-4 py-20 font-sans text-white selection:bg-[#FF3355] selection:text-white md:px-8 md:py-28"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute left-1/2 top-12 h-72 w-[70vw] -translate-x-1/2 bg-[#FF3355]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <FadeUp>
          <div className="relative overflow-hidden border border-white/15 rounded-lg bg-[#0A0A0A]/80 px-6 py-16 text-center shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:px-10 md:px-16 md:py-24">
            <div className="absolute inset-x-0 top-0 h-full pointer-events-none bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_50%_78%,rgba(255,51,85,0.13),transparent_46%),radial-gradient(circle_at_50%_100%,rgba(204,255,0,0.1),transparent_48%)]" />
            <div className="absolute left-0 top-0 h-2 w-32 bg-[#CCFF00]" />
            <div className="absolute bottom-0 right-0 h-2 w-32 bg-[#FF3355]" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
              <span className="mb-6 inline-flex items-center border border-[#CCFF00]/40 bg-[#CCFF00] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-black">
                Available for collaboration // {time || "MLG_IDN"}
              </span>

              <h2 className="text-[clamp(2.7rem,7vw,6.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-white">
                Start Building Your <span className="text-[#FF3355]">Digital</span> Experience Today
              </h2>

              <p className="mt-6 max-w-2xl border-l-2 border-[#FF3355] pl-4 text-left font-mono text-[10px] uppercase leading-relaxed tracking-widest text-white/50 md:text-xs">
                Let&apos;s turn ideas into sharp interfaces, reliable React systems, and portfolio-grade products
                that feel fast from the first click.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:brandon.geraldo28@gmail.com"
                  className="group inline-flex h-12 items-center justify-center gap-2 border-2 border-white bg-white px-6 text-sm font-black uppercase text-black shadow-[6px_6px_0px_rgba(204,255,0,0.5)] transition hover:border-[#CCFF00] hover:bg-[#CCFF00]"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex h-12 items-center justify-center gap-2 border-2 border-white/20 bg-[#050505] px-6 font-mono text-[10px] font-black uppercase tracking-widest text-white/80 transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="grid gap-10 px-1 py-14 md:grid-cols-[1.1fr_1fr_1fr_1.2fr_0.9fr] md:gap-8 md:px-0 md:py-20">
          <div>
            <a href="#home" className="mb-6 inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center border-2 border-black bg-white text-xl font-black italic tracking-tighter text-black shadow-[5px_5px_0px_rgba(255,51,85,0.7)]">
                B.
              </span>
              <span className="text-2xl font-black uppercase italic tracking-tighter text-white">Brandon</span>
            </a>
            <p className="max-w-[220px] font-mono text-[10px] font-black uppercase leading-relaxed tracking-widest text-white/45">
              Front-end developer crafting clean interfaces with motion, clarity, and impact.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-white">
              Learn More
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-sm font-extrabold tracking-tight text-white/60 transition hover:text-[#CCFF00]" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-white">
              Focus Area
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm font-extrabold tracking-tight text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-white">
              Contact Me
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:brandon.geraldo28@gmail.com"
                className="flex items-start gap-3 text-sm font-extrabold tracking-tight text-white/60 transition hover:text-[#CCFF00]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FF3355]" />
                <span className="break-all">brandon.geraldo28@gmail.com</span>
              </a>
              <a
                href="https://wa.me/6285855462022"
                className="flex items-center gap-3 text-sm font-extrabold tracking-tight text-white/60 transition hover:text-[#CCFF00]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#FF3355]" />
                <span>+62 858 5546 2022</span>
              </a>
              <div className="flex items-center gap-3 text-sm font-extrabold tracking-tight text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-[#FF3355]" />
                <span>Malang, Indonesia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-white">
              Social
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid h-10 w-10 place-items-center border border-white/20 bg-[#0A0A0A] text-white/70 transition hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center font-mono text-[10px] font-black uppercase tracking-widest text-white/45 md:flex-row md:text-left">
            <span>(C) 2026 Brandon Geraldo Adji. All rights reserved.</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-2 py-1 text-white/55 transition hover:text-[#CCFF00]"
            >
              Return to top
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
