import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion as Motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/* ─── CUSTOM MAGNETIC CURSOR ────────────────────────────────────── */
/* ─── ANIMATION WRAPPER ─────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </Motion.div>
);

const staggerRow = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
const Achievements = () => {
  const sectionRef = useRef(null);

  // Accordion State: Set item pertama terbuka secara default
  const [activeId, setActiveId] = useState(1);
  const certificateTrackRef = useRef(null);
  const [certificateRange, setCertificateRange] = useState({ start: 0, end: 3 });

  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);

  // --- DATA ---
  const competitions = [
    { id: 1, title: "Awardee Bakti Champions Scholarship 2025", location: "Bank Central Asia (BCA)", image: "/img/Bca.jpeg", badge: "SCHOLARSHIP" },
    { id: 2, title: "1st Place I/O Fest Business Plan", location: "Tarumanagara University", image: "/img/Untar.jpeg", badge: "WINNER" },
    { id: 3, title: "1st Place Bizznovation Business Plan", location: "Pradita University", image: "/img/Bizzno.jpg", badge: "WINNER" },
    { id: 4, title: "2nd Place Business Plan Recursion", location: "University of Hasanuddin", image: "/img/Recursion.jpg", badge: "WINNER" },
    { id: 5, title: "2nd Place Business Plan ITCC", location: "University of Udayana", image: "/img/Udayana.jpg", badge: "WINNER" },
    { id: 6, title: "1st Place Business Plan TechX", location: "President University", image: "/img/President.jpg", badge: "WINNER" },
    { id: 7, title: "1st Place Business Plan IT Convert", location: "University of Jember", image: "/img/ITC.jpg", badge: "WINNER" },
    { id: 8, title: "1st Place Business Plan SEMET", location: "University of Gadjah Mada", image: "/img/UGM.jpg", badge: "WINNER" },
    { id: 9, title: "2nd Place Business Idea Proposal", location: "UPN Veteran", image: "/img/Ilpol.jpg", badge: "WINNER" },
  ];

  const certifications = [
    {
      name: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      issued: "April 2026",
      id: "JMZV0DL8RXN9",
      image: "/img/Certif1.png",
      href: "https://www.dicoding.com/certificates/JMZV0DL8RXN9",
    },
    {
      name: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      issued: "October 2025",
      id: "53XEKYQ4KXRN",
      image: "/img/Certif2.png",
      href: "https://www.dicoding.com/certificates/53XEKYQ4KXRN",
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "RevoU Indonesia",
      issued: "May 2025",
      id: "SEFC210425-01-1-00018",
      image: "/img/Certif3.png",
      href: "/img/Certif3.png",
    },
    {
      name: "Web Design for Beginners: HTML & CSS",
      issuer: "Udemy",
      issued: "April 2025",
      id: "UC-1ff77b45-e8cd-4eb4-bfe7-9a81c25be704",
      image: "/img/Certif4.png",
      href: "/img/Certif4.png",
    },
    {
      name: "Design for Impact: Design Thinking & UI/UX",
      issuer: "MyEduSolve",
      issued: "April 2025",
      id: "Certificate of Participation",
      image: "/img/Certif5.png",
      href: "/img/Certif5.png",
    },
  ];

  const updateCertificateRange = useCallback(() => {
    const track = certificateTrackRef.current;
    const card = track?.querySelector("[data-certificate-card]");
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    const step = card.getBoundingClientRect().width + gap;
    const start = Math.min(certifications.length - 1, Math.max(0, Math.round(track.scrollLeft / step)));
    const visibleCount = Math.max(1, Math.floor((track.clientWidth + gap) / step));

    setCertificateRange({
      start,
      end: Math.min(certifications.length, start + visibleCount),
    });
  }, [certifications.length]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateCertificateRange);
    window.addEventListener("resize", updateCertificateRange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCertificateRange);
    };
  }, [updateCertificateRange]);

  const scrollCertificates = (direction) => {
    const track = certificateTrackRef.current;
    const card = track?.querySelector("[data-certificate-card]");
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="theme-section relative w-full overflow-hidden bg-canvas text-ink py-24 md:py-40 font-sans selection:bg-primary selection:text-ink"
    >
      {/* Giant Parallax Watermark */}
      <Motion.div
        style={{ y: watermarkY }}
        className="absolute top-[10%] left-0 right-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-[0.03] select-none"
      >
        <span className="text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none whitespace-nowrap tracking-tighter">
          HONORS
        </span>
      </Motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-12">
        
        {/* ── HEADER ── */}
        <FadeUp>
          <Motion.div style={{ y: headY }} className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b-2 border-line pb-10">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-[#8FE8F6]" />
                </div>

                <h2 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter text-ink">
                  MOMENTS <br/>
                  <span className="text-[#8FE8F6]">OF GLORY.</span>
                </h2>
                
                <p className="font-mono text-xs md:text-sm mt-8 text-gray-400 max-w-xl uppercase tracking-widest leading-relaxed border-l-2 border-[#8FE8F6] pl-4">
                  Highlights from battlegrounds, scholarships, and technical certifications. Curated proof of work.
                </p>
              </div>

              {/* Data Status Block */}
              <div className="w-full lg:w-auto mt-8 lg:mt-0">
                <Motion.div
                  initial={{ opacity: 0, y: 24, rotate: 1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="transform rounded-3xl border-2 border-black bg-white p-6 text-black shadow-[8px_8px_0px_rgba(143,232,246,0.5)] md:rotate-2"
                >
                  <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-4">
                     <span className="font-mono text-[10px] font-bold uppercase">Total Awards</span>
                     <span className="font-black text-2xl text-[#8FE8F6]">{competitions.length}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/20 pb-2">
                     <span className="font-mono text-[10px] font-bold uppercase">Licenses</span>
                     <span className="font-black text-2xl">{certifications.length}</span>
                  </div>
                </Motion.div>
              </div>

            </div>
          </Motion.div>
        </FadeUp>

        {/* ── COMPETITIONS LIST (Interactive Accordion Style) ── */}
        <div className="mb-32">
          
          {/* Table Header */}
          <FadeUp>
             <div className="hidden items-center justify-between px-4 py-4 font-mono text-[10px] uppercase tracking-widest text-muted/70 md:flex">
               <span className="flex-1">Gallery</span>
             </div>
          </FadeUp>

          {competitions.map((item, idx) => {
            const isActive = activeId === item.id;

            return (
              <FadeUp key={item.id} delay={idx * 0.05}>
                <Motion.div
                  custom={idx}
                  variants={staggerRow}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                   className={`relative mb-4 overflow-hidden rounded-3xl border border-line transition-[background-color,border-color,box-shadow] duration-300 ${
                     isActive ? "border-primary/60 bg-secondary/25 shadow-[0_14px_36px_rgba(11,18,20,0.06)]" : "bg-white"
                   }`}
                >
                  
                  {/* ROW HEADER (Clickable) */}
                  <div
                    className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-4 gap-4"
                    onClick={() => setActiveId(isActive ? null : item.id)}
                  >
                    {/* ID & Title */}
                    <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1">
                      <span className={`w-8 md:w-16 font-mono text-[10px] md:text-xs font-bold tracking-widest mt-1 md:mt-0 ${isActive ? "text-[#8FE8F6]" : "opacity-50"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight transition-colors duration-300 ${isActive ? "text-[#8FE8F6]" : "text-ink"}`}>
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
                         <span className={`rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] transition-colors md:text-[10px] ${isActive ? "border-primary text-primaryInk" : "border-line"}`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className={`hidden md:flex w-12 items-center justify-center font-mono text-2xl font-light transition-transform duration-300 ${isActive ? "text-[#8FE8F6] rotate-180" : "text-muted/60"}`}>
                        {isActive ? "−" : "+"}
                      </div>
                    </div>
                  </div>

                  {/* ── EXPANDABLE IMAGE ACCORDION ── */}
                  <AnimatePresence>
                    {isActive && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-8 md:pl-[5.5rem] md:pr-16">
                          <div className="relative aspect-video max-h-[72vh] w-full overflow-hidden rounded-2xl border-2 border-primary bg-surface-soft p-2 md:p-3">
                            
                            <img 
                              src={item.image}
                              alt={item.title} 
                              className="block h-full w-full rounded-xl object-cover object-center contrast-125"
                              loading="lazy"
                              decoding="async"
                            />
                            
                            {/* Decorative Brutalist Accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-[#8FE8F6]" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-[#8FE8F6]" />
                            
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(143,232,246,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
                          </div>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>

                </Motion.div>
              </FadeUp>
            );
          })}
        </div>

        {/* ── CERTIFICATIONS (Barcode Tickets) ── */}
        <FadeUp>
          <section
            id="credentials"
            aria-labelledby="credentials-heading"
            className="relative z-10 overflow-hidden rounded-[2rem] border border-line bg-surface-soft px-5 py-12 sm:px-8 md:py-16 lg:px-16"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full border border-primary/50" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primaryInk">
                Continuous learning
              </p>
              <h3 id="credentials-heading" className="mt-4 text-[clamp(2.5rem,5vw,4.75rem)] font-black leading-[0.95] tracking-tighter text-ink">
                Credentials that strengthen the practice.
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Focused learning across software engineering, artificial intelligence, web development, and product design—applied directly in project work.
              </p>
            </div>

            <div className="relative mt-12 md:mt-16">
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                disabled={certificateRange.start === 0}
                className="absolute -left-11 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_4px_14px_rgba(11,18,20,0.08)] transition-colors duration-200 hover:border-primary hover:bg-primary disabled:cursor-not-allowed disabled:opacity-35 md:grid lg:-left-14"
                aria-label="Show previous certificates"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div
                ref={certificateTrackRef}
                onScroll={updateCertificateRange}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollCertificates(event.key === "ArrowLeft" ? -1 : 1);
                  }
                }}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-0 pb-5 sm:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="region"
                aria-label="Certificate gallery"
                tabIndex={0}
              >
                {certifications.map((cert, index) => (
                  <Motion.article
                    key={cert.id}
                    data-certificate-card
                    className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_4px_14px_rgba(11,18,20,0.05)] transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_20px_48px_rgba(11,18,20,0.1)] sm:w-[calc((100%_-_1rem)/2)] lg:w-[calc((100%_-_2rem)/3)]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-white p-2 sm:p-3">
                      <img
                        src={cert.image}
                        alt={`${cert.name} certificate issued by ${cert.issuer}`}
                        className="h-full w-full rounded-2xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-secondaryInk shadow-[0_4px_14px_rgba(11,18,20,0.06)] backdrop-blur-sm">
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Verified
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primaryInk">
                        {cert.issuer}
                      </p>
                      <h4 className="mt-3 min-h-[3.5rem] text-xl font-black leading-tight tracking-tight text-ink md:text-2xl">
                        {cert.name}
                      </h4>

                      <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                        <div className="flex items-start justify-between gap-4">
                          <dt className="text-muted">Issued</dt>
                          <dd className="text-right font-bold text-ink">{cert.issued}</dd>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <dt className="text-muted">Credential</dt>
                          <dd className="max-w-[65%] break-all text-right font-mono text-[10px] font-bold text-ink">{cert.id}</dd>
                        </div>
                      </dl>

                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primaryInk transition-colors duration-200 hover:text-ink"
                        aria-label={`View ${cert.name} credential`}
                      >
                        View credential
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </Motion.article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                disabled={certificateRange.end >= certifications.length}
                className="absolute -right-11 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_4px_14px_rgba(11,18,20,0.08)] transition-colors duration-200 hover:border-primary hover:bg-primary disabled:cursor-not-allowed disabled:opacity-35 md:grid lg:-right-14"
                aria-label="Show next certificates"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative mt-2 flex items-center justify-between gap-4 md:justify-center">
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                disabled={certificateRange.start === 0}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:bg-primary disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
                aria-label="Show previous certificates"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted" aria-live="polite">
                {certificateRange.start + 1}–{certificateRange.end} of {certifications.length}
              </p>

              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                disabled={certificateRange.end >= certifications.length}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:bg-primary disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
                aria-label="Show next certificates"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </section>
        </FadeUp>

      </div>
    </section>
  );
};

export default Achievements;
