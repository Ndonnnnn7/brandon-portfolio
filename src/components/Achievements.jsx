import React, { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const Achievements = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.12 });

  const competitions = [
    {
      id: 1,
      title: "Awardee Bakti Champions Scholarship 2025",
      location: "Bank Central Asia (BCA)",
      image: "img/Bca.jpeg",
      badge: "SCHOLARSHIP",
    },
    {
      id: 2,
      title: "1st Place I/O Festival Business Plan Competition",
      location: "Tarumanagara University",
      image: "img/Untar.jpeg",
      badge: "WINNER",
    },
    {
      id: 3,
      title: "1st Place Bizznovation Business Plan Competition",
      location: "Pradita University",
      image: "img/Bizzno.jpg",
      badge: "WINNER",
    },
    {
      id: 4,
      title: "2nd Place Business Plan Competition Recursion",
      location: "University of Hasanuddin",
      image: "img/Recursion.jpg",
      badge: "WINNER",
    },
    {
      id: 5,
      title: "2nd Place Business Plan Competition ITCC",
      location: "University of Udayana",
      image: "img/Udayana.jpg",
      badge: "WINNER",
    },
    {
      id: 6,
      title: "1st Place Business Plan Competition TechX",
      location: "President University",
      image: "img/President.jpg",
      badge: "WINNER",
    },
    {
      id: 7,
      title: "1st Place Business Plan Competition IT Convert",
      location: "University of Jember",
      image: "img/ITC.jpg",
      badge: "WINNER",
    },
    {
      id: 8,
      title: "1st Place Business Plan Competition SEMET",
      location: "University of Gadjah Mada",
      image: "img/UGM.jpg",
      badge: "WINNER",
    },
    {
      id: 9,
      title: "2nd Place Business Idea Proposal Competitio",
      location: "UPN Veteran",
      image: "img/Ilpol.jpg",
      badge: "WINNER",
    },
  ];

  const certifications = [
    { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "2025", id: "53XEKYQ4KXRN" },
    { name: "Introduction to Software Engineering", issuer: "Revou Indonesia", date: "2025", id: "SEFC210425-01-1-00018" },
    { name: "Web Design for Beginners", issuer: "Udemy", date: "2025", id: "G-UX-25" },
  ];

  // Animation variants
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 34, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  // Optional: mouse specular highlight (subtle) – matches Skills v3 idea, but softer
  const onCardMove = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  }, []);

  const onCardLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }, []);

  return (
    <>
      <section
        id="achievements"
        ref={containerRef}
        className="relative w-full min-h-screen py-24 overflow-hidden text-[var(--bone)] ac-bg ac-grain"
      >
        {/* background layers */}
        <div className="ac-grid" />
        <div className="ac-fiber" />
        <div className="ac-dust" />
        <div className="ac-vignette" />

        {/* watermark */}
        <motion.div
          className="absolute top-[6%] left-0 right-0 pointer-events-none flex justify-center select-none z-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ac-display ac-watermark text-[clamp(6rem,20vw,20rem)] font-bold italic leading-none whitespace-nowrap opacity-[0.50]">
            HONORS
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <FadeUp>
            <div className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[rgba(214,178,94,0.14)] pb-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[var(--metal)] opacity-80" />
                  <span className="ac-mono text-[0.62rem] tracking-[0.32em] uppercase text-[var(--metal)]">
                    Vol. 04 — Milestones
                  </span>
                </div>

                <h2 className="ac-display text-[clamp(3rem,6vw,5.2rem)] font-light italic leading-[0.92] tracking-tight">
                  Moments of{" "}
                  <span className="ac-outlineWord ac-sans font-extrabold not-italic tracking-[-0.03em]">
                    Glory.
                  </span>
                </h2>

                <p className="ac-sans text-[0.9rem] md:text-[0.95rem] text-[rgba(154,148,138,0.95)] leading-[1.9] mt-5 max-w-xl">
                  Highlights from competitions, scholarships, and certifications — curated like a personal archive.
                </p>
              </div>

              {/* small meta */}
              <div className="lg:max-w-xs border-l-2 border-[rgba(214,178,94,0.30)] pl-6 py-2">
                <p className="ac-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] leading-[2]">
                  awards · credibility · proof of work
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Competition highlights (Artifact Gallery) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-24"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {competitions.map((item, idx) => (
              <motion.div key={item.id} variants={cardIn}>
                <div
                  className="ac-card p-6 md:p-7 group"
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                >
                  <div className="ac-film" />
                  <div className="ac-sheen" />

                  {/* screws */}
                  <div className="ac-screw" style={{ top: 12, left: 12 }} />
                  <div className="ac-screw" style={{ top: 12, right: 12 }} />
                  <div className="ac-screw" style={{ bottom: 12, left: 12 }} />
                  <div className="ac-screw" style={{ bottom: 12, right: 12 }} />

                  {/* badge + index */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <span className="ac-badge ac-mono text-[0.55rem] tracking-[0.24em] uppercase px-4 py-2 text-[rgba(244,240,232,0.90)]">
                      {item.badge}
                    </span>
                    <span className="ac-mono text-[0.55rem] tracking-[0.24em] uppercase text-[rgba(154,148,138,0.95)]">
                      {String(idx + 1).padStart(2, "0")} / 09
                    </span>
                  </div>

                  {/* image */}
                  <div className="relative z-10 ac-frame aspect-[4/3] mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ filter: "saturate(0.92) contrast(1.06)" }}
                    />
                    {/* soft overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.35) 100%)",
                      }}
                    />
                  </div>

                  {/* text */}
                  <div className="relative z-10">
                    <h3 className="ac-display text-2xl md:text-[1.7rem] font-semibold italic leading-[1.1] mb-3">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-[rgba(214,178,94,0.28)]" />
                      <p className="ac-mono text-[0.62rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* subtle bottom number */}
                  <span className="ac-display font-bold absolute -bottom-2 right-6 text-6xl text-[var(--metal)] opacity-[0.04] select-none pointer-events-none z-0">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications (Ticket Artifact) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left */}
            <FadeUp className="lg:col-span-4">
              <h3 className="ac-display text-3xl md:text-4xl font-semibold italic mb-4 leading-tight">
                Licenses & <br />
                Certifications
              </h3>
              <p className="ac-sans text-[0.9rem] text-[rgba(154,148,138,0.95)] leading-[1.9] mb-7">
                Continuous learning is the edge. These credentials validate my foundations and growth.
              </p>
              <div className="w-14 h-[2px] bg-[rgba(214,178,94,0.35)] rounded-full" />
            </FadeUp>

            {/* Right */}
            <motion.div
              className="lg:col-span-8 grid gap-4"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
            >
              {certifications.map((cert, i) => (
                <motion.div key={i} variants={slideIn}>
                  <div
                    className="ac-card ac-ticket ac-perf p-6 md:p-7 flex items-center justify-between gap-6 group"
                    onMouseMove={onCardMove}
                    onMouseLeave={onCardLeave}
                  >
                    <div className="ac-film" />
                    <div className="ac-sheen" />

                    <div className="ac-screw" style={{ top: 12, left: 12 }} />
                    <div className="ac-screw" style={{ top: 12, right: 12 }} />

                    {/* watermark year */}
                    <span className="absolute -right-3 -bottom-4 ac-display text-6xl md:text-7xl font-black text-[rgba(244,240,232,0.06)] select-none pointer-events-none">
                      {cert.date}
                    </span>

                    <div className="relative z-10 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-[var(--metal)]" />
                      </div>
                      <div>
                        <h4 className="ac-sans text-lg md:text-xl font-bold text-[rgba(244,240,232,0.96)] group-hover:text-[var(--metal2)] transition-colors">
                          {cert.name}
                        </h4>
                        <p className="ac-mono text-[0.62rem] tracking-[0.18em] uppercase text-[rgba(154,148,138,0.95)] mt-1">
                          {cert.issuer} • ID: {cert.id}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="relative z-10 hidden sm:flex items-center gap-2 ac-mono text-[0.6rem] tracking-[0.26em] uppercase px-5 py-3 rounded-full border border-[rgba(214,178,94,0.18)] text-[rgba(154,148,138,0.95)] hover:text-[rgba(244,240,232,0.95)] hover:border-[rgba(244,240,232,0.45)] transition-colors"
                    >
                      Verify <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;