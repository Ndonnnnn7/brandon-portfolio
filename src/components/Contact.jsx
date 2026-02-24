import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useState, useCallback } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brandon.geraldo28@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // soft specular follow
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
        id="contact"
        className="relative w-full min-h-[90vh] py-20 md:py-24 overflow-hidden flex items-center text-[var(--bone)] ct-bg ct-grain"
      >
        {/* background layers */}
        <div className="ct-grid" />
        <div className="ct-fiber" />
        <div className="ct-dust" />
        <div className="ct-vignette" />

        {/* Ambient Desktop Glow (Optimized with transform-gpu) */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden transform-gpu"
          style={{ zIndex: 0 }}
        >
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.04] bg-[var(--metal)] animate-pulse-slow" />
          <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full mix-blend-screen blur-[100px] opacity-[0.03] bg-[var(--plum)] animate-float-slow" />
        </div>

        {/* watermark - Disesuaikan ukurannya untuk mobile */}
        <motion.div
          className="absolute top-[8%] md:top-[6%] left-0 right-0 pointer-events-none flex justify-center select-none z-0 transform-gpu"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ct-display ct-watermark text-[clamp(4.5rem,18vw,20rem)] font-bold italic leading-none whitespace-nowrap opacity-[0.25] md:opacity-[0.50]">
            CONTACT
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 w-full mt-8 md:mt-0">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center lg:items-start"
              >
                {/* Status */}
                <motion.div
                  className="flex items-center gap-3 mb-6 md:mb-8 w-fit border border-[rgba(214,178,94,0.15)] md:border-transparent px-4 py-1.5 md:px-3 md:py-1 rounded-full bg-[rgba(255,255,255,0.02)] md:bg-transparent md:hover:bg-[rgba(255,255,255,0.02)] transition-colors cursor-default"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12, type: "spring", stiffness: 200 }}
                >
                  <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC84] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#3DDC84]"></span>
                  </span>

                  <span className="ct-status ct-mono text-[0.6rem] md:text-[0.68rem] tracking-[0.25em] md:tracking-[0.28em] uppercase text-[rgba(244,240,232,0.92)]">
                    Available for work
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  className="ct-display text-[clamp(2.2rem,6vw,5.5rem)] font-semibold italic leading-[1.05] md:leading-[1.02] mb-5 md:mb-8 tracking-tight"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Let’s start a <br className="hidden sm:block" />
                  <span className="ct-outlineWord ct-sans font-extrabold not-italic tracking-[-0.03em] drop-shadow-[0_0_15px_rgba(214,178,94,0.15)] ml-2 sm:ml-0">
                    project
                  </span>{" "}
                  together.
                </motion.h2>

                <motion.p
                  className="ct-sans text-[0.95rem] md:text-xl text-[rgba(154,148,138,0.95)] leading-[1.8] md:leading-[1.9] max-w-md lg:max-w-lg mb-10 md:mb-12"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.22,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Have an idea? I can help you build it. I’m currently available
                  for freelance projects and open to full-time opportunities.
                </motion.p>

                {/* Email Artifact CTA - Responsive Adjustments */}
                <motion.div
                  className="group relative w-full sm:max-w-[420px] lg:w-fit"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="ct-card p-4 md:p-6 md:transition-all md:duration-500 md:hover:-translate-y-1.5 md:hover:shadow-[0_20px_40px_-15px_rgba(214,178,94,0.15)] md:hover:border-[rgba(214,178,94,0.35)] cursor-pointer w-full"
                    onMouseMove={onCardMove}
                    onMouseLeave={onCardLeave}
                    onClick={handleCopyEmail}
                  >
                    <div className="ct-film" />
                    <div className="ct-sheen" />

                    <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 min-w-0 w-full">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-[14px] md:rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0 md:group-hover:bg-[rgba(214,178,94,0.15)] md:group-hover:border-[rgba(214,178,94,0.4)] transition-all duration-500"
                        >
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-[var(--metal2)] md:group-hover:text-[var(--bone)] transition-colors duration-500" />
                        </motion.div>

                        <div className="flex-1 min-w-0 w-full">
                          <p className="ct-mono text-[0.55rem] md:text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] mb-1">
                            Email
                          </p>
                          {/* Mencegah teks terpotong di layar sangat kecil */}
                          <p className="ct-sans text-[0.95rem] sm:text-base md:text-xl font-semibold text-[rgba(244,240,232,0.96)] break-all sm:truncate md:group-hover:text-[var(--metal)] transition-colors duration-500">
                            brandon.geraldo28@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-[rgba(255,255,255,0.05)] sm:border-t-0">
                        {copied ? (
                          <motion.span
                            className="ct-mono text-[0.55rem] md:text-[0.62rem] tracking-[0.26em] uppercase px-6 sm:px-4 py-2 rounded-full w-full sm:w-auto text-center"
                            style={{
                              border: "1px solid rgba(61,220,132,0.3)",
                              background: "rgba(61,220,132,0.15)",
                              color: "rgba(244,240,232,0.95)",
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 18,
                            }}
                          >
                            Copied
                          </motion.span>
                        ) : (
                          <span className="ct-chip ct-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.26em] uppercase px-6 sm:px-4 py-2.5 sm:py-2 text-[rgba(154,148,138,0.95)] md:group-hover:text-[var(--bone)] md:group-hover:border-[var(--metal)] transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center">
                            Copy{" "}
                            <Copy className="inline-block w-3.5 h-3.5 md:w-4 md:h-4 ml-2 -translate-y-[1px] md:group-hover:scale-110 transition-transform" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-10 md:gap-10 mt-6 lg:mt-0"
            >
              {/* Info list */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Phone */}
                <motion.div
                  className="ct-card p-5 sm:p-6 md:p-7 md:transition-all md:duration-500 md:hover:-translate-y-1.5 md:hover:shadow-[0_15px_30px_-10px_rgba(214,178,94,0.1)] md:hover:border-[rgba(214,178,94,0.3)] group relative overflow-hidden"
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    delay: 0.18,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="ct-film" />
                  <div className="ct-sheen" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] md:rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0 md:group-hover:bg-[rgba(214,178,94,0.1)] md:group-hover:border-[rgba(214,178,94,0.4)] transition-all duration-500">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-[var(--metal2)] md:group-hover:text-[var(--bone)] transition-colors duration-500" />
                    </div>

                    <div className="min-w-0">
                      <p className="ct-mono text-[0.55rem] md:text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.95)] mb-1.5 sm:mb-1">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="https://wa.me/6285855462022"
                        target="_blank"
                        rel="noreferrer"
                        className="ct-sans text-[1.1rem] sm:text-lg md:text-2xl font-bold text-[rgba(244,240,232,0.96)] md:group-hover:text-[var(--metal2)] transition-colors inline-flex items-center justify-center sm:justify-start gap-2 flex-wrap"
                      >
                        +62 858 5546 2022
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-60 md:group-hover:opacity-100 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-all duration-300" />
                      </a>
                      <p className="ct-sans text-[0.85rem] md:text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-1.5 md:mt-2">
                        Quick response for inquiries & collabs.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="ct-card p-5 sm:p-6 md:p-7 md:transition-all md:duration-500 md:hover:-translate-y-1.5 md:hover:shadow-[0_15px_30px_-10px_rgba(214,178,94,0.1)] md:hover:border-[rgba(214,178,94,0.3)] group relative overflow-hidden"
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    delay: 0.26,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="ct-film" />
                  <div className="ct-sheen" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] md:rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0 md:group-hover:bg-[rgba(214,178,94,0.1)] md:group-hover:border-[rgba(214,178,94,0.4)] transition-all duration-500">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[var(--metal2)] md:group-hover:text-[var(--bone)] transition-colors duration-500" />
                      </motion.div>
                    </div>

                    <div className="min-w-0">
                      <p className="ct-mono text-[0.55rem] md:text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.95)] mb-1.5 sm:mb-1">
                        Location
                      </p>
                      <p className="ct-sans text-[1.1rem] sm:text-lg md:text-2xl font-bold text-[rgba(244,240,232,0.96)] md:group-hover:text-[var(--metal)] transition-colors duration-500">
                        Malang, Indonesia
                      </p>
                      <p className="ct-sans text-[0.85rem] md:text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-1.5 md:mt-2">
                        Available for remote work & onsite (by schedule).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Dock */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: 0.32,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center justify-center lg:justify-between w-full mb-5 md:mb-6">
                  <h4 className="ct-display text-[1.35rem] sm:text-xl md:text-2xl font-semibold italic text-center lg:text-left w-full lg:w-auto">
                    Connect with me
                  </h4>
                  <span className="hidden lg:block ct-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)] border-b border-transparent md:hover:border-[var(--metal)] transition-colors cursor-default">
                    social dock
                  </span>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 md:gap-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Ndonnnnn7",
                      tone: "rgba(244,240,232,0.85)",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/brandongeraldoadji",
                      tone: "rgba(53,208,255,0.90)",
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/brandonngeraldo",
                      tone: "rgba(242,216,154,0.95)",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ct-card w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center relative overflow-hidden group/social rounded-[14px] md:rounded-2xl"
                      onMouseMove={onCardMove}
                      onMouseLeave={onCardLeave}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.38 + i * 0.08,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSocial(i)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      aria-label="social link"
                    >
                      <div className="ct-film" />
                      <div className="ct-sheen" />

                      {/* Brand-colored background glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover/social:opacity-[0.15] transition-opacity duration-500 z-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${social.tone} 0%, transparent 70%)`,
                        }}
                      />

                      <motion.div
                        className="relative z-10"
                        animate={
                          hoveredSocial === i
                            ? {
                                rotate: [0, 12, -12, 0],
                                scale: [1, 1.15, 1.15, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 0.45 }}
                      >
                        <social.icon
                          className="w-[1.1rem] h-[1.1rem] sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-300"
                          style={{
                            color:
                              hoveredSocial === i
                                ? social.tone
                                : "rgba(244,240,232,0.6)",
                          }}
                        />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>

                <p className="ct-sans text-[0.85rem] sm:text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-8 md:mt-6 leading-[1.8] text-center lg:text-left max-w-sm lg:max-w-none mx-auto lg:mx-0">
                  Prefer email? Hit the button above, it copies instantly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
