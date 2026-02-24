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
      <style>{`}
        /* ───────────── Background (no “grid lines” vibe) ───────────── */
        .ct-bg{
          background:
            radial-gradient(1100px 720px at 18% 18%, rgba(124,58,237,0.14), transparent 60%),
            radial-gradient(900px 620px at 82% 26%, rgba(20,184,166,0.10), transparent 58%),
            radial-gradient(980px 680px at 55% 112%, rgba(214,178,94,0.11), transparent 62%),
            linear-gradient(180deg, #05050a 0%, #090912 55%, #05050a 100%);
        }

        /* super subtle micro-grid (blurred so it never looks like stripes) */
        .ct-grid{
          position:absolute; inset:0; pointer-events:none; z-index:1;
          background-image:
            linear-gradient(rgba(214,178,94,0.030) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.022) 1px, transparent 1px);
          background-size: 110px 110px;
          background-position: center top;
          opacity:.55;
          filter: blur(.35px);
          mask-image: radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%);
        }

        .ct-fiber{
          position:absolute; inset:0; pointer-events:none; z-index:2;
          background:
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.05), transparent 45%),
            radial-gradient(circle at 82% 18%, rgba(255,255,255,0.035), transparent 42%),
            radial-gradient(circle at 50% 110%, rgba(255,255,255,0.03), transparent 55%);
          opacity:.55; mix-blend-mode: overlay;
        }

        .ct-dust{
          position:absolute; inset:0; pointer-events:none; z-index:2;
          background:
            radial-gradient(circle at 22% 38%, rgba(255,255,255,0.07) 0.5px, transparent 1px),
            radial-gradient(circle at 64% 22%, rgba(255,255,255,0.06) 0.6px, transparent 1px),
            radial-gradient(circle at 78% 66%, rgba(255,255,255,0.05) 0.6px, transparent 1px);
          background-size: 260px 260px;
          opacity:.11; mix-blend-mode: overlay;
          filter: blur(.15px);
        }

        .ct-grain::after{
          content:'';
          position:absolute;
          inset:-200%;
          width:400%;
          height:400%;
          pointer-events:none;
          z-index:4;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
          opacity:0.045;
          mix-blend-mode: overlay;
          transform: rotate(4deg);
        }

        .ct-vignette{
          position:absolute; inset:0; pointer-events:none; z-index:3;
          background:
            radial-gradient(860px 580px at 50% 8%, rgba(0,0,0,0.0), rgba(0,0,0,0.42) 72%),
            radial-gradient(900px 720px at 50% 112%, rgba(0,0,0,0.0), rgba(0,0,0,0.62) 74%);
        }

        /* Watermark */
        .ct-watermark{
          -webkit-text-stroke: 1.2px rgba(214,178,94,0.28);
          color: transparent;
        }

        /* ───────────── Artifact Card (rounded, premium) ───────────── */
        .ct-card{
          position:relative;
          border-radius: 28px;
          background: rgba(7,7,10,0.62);
          border: 1px solid rgba(214,178,94,0.14);
          backdrop-filter: blur(14px);
          overflow:hidden;
          box-shadow:
            0 26px 70px rgba(0,0,0,0.58),
            0 0 0 1px rgba(214,178,94,0.08) inset;
          transform: translateZ(0);
          transition: transform .45s cubic-bezier(.22,1,.36,1),
                      box-shadow .45s cubic-bezier(.22,1,.36,1),
                      border-color .45s cubic-bezier(.22,1,.36,1);
        }
        .ct-card:hover{
          transform: translateY(-6px);
          border-color: rgba(214,178,94,0.26);
          box-shadow:
            0 34px 92px rgba(0,0,0,0.66),
            0 0 0 1px rgba(214,178,94,0.10) inset;
        }

        .ct-card::before{
          content:'';
          position:absolute; inset:0;
          padding:1px;
          border-radius:28px;
          background: linear-gradient(135deg,
            rgba(214,178,94,0.62),
            rgba(20,184,166,0.16),
            rgba(124,58,237,0.14),
            rgba(214,178,94,0.16)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity:.55;
          pointer-events:none;
          z-index:2;
        }

        .ct-film{
          position:absolute; inset:0;
          pointer-events:none;
          background:
            radial-gradient(circle at 18% 18%, rgba(255,255,255,0.06), transparent 45%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 35%, rgba(0,0,0,0.22));
          opacity:.75;
          z-index:1;
        }

        /* Cursor specular */
        .ct-card::after{
          content:"";
          position:absolute; inset:0;
          pointer-events:none;
          background:
            radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(214,178,94,0.12), transparent 55%),
            radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.07), transparent 55%);
          opacity: 0;
          transition: opacity .25s ease;
          mix-blend-mode: screen;
          z-index:2;
        }
        .ct-card:hover::after{ opacity: 1; }

        /* Sheen sweep */
        @keyframes ct-sheen {
          from { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          22%  { opacity: .34; }
          to   { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
        .ct-sheen{
          position:absolute; inset:0;
          pointer-events:none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
          width:55%;
          transform: translateX(-140%) skewX(-18deg);
          opacity:0;
          z-index:3;
        }
        .ct-card:hover .ct-sheen{ animation: ct-sheen 1.2s cubic-bezier(.22,1,.36,1); }

        /* Screws */
        .ct-screw{
          position:absolute;
          width:14px; height:14px;
          border-radius:999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.26), rgba(255,255,255,0.06) 40%, rgba(0,0,0,0.55) 75%);
          box-shadow: 0 6px 14px rgba(0,0,0,0.42);
          border: 1px solid rgba(214,178,94,0.14);
          z-index:6;
          opacity:.95;
        }
        .ct-screw::after{
          content:'';
          position:absolute; left:50%; top:50%;
          width:9px; height:1px;
          background: rgba(214,178,94,0.40);
          transform: translate(-50%,-50%) rotate(18deg);
          opacity:.75;
        }

        /* chips */
        .ct-chip{
          border: 1px solid rgba(214,178,94,0.18);
          background: rgba(7,7,10,0.45);
          backdrop-filter: blur(10px);
          border-radius: 999px;
        }

        /* “Available” badge */
        .ct-status{
          border: 1px solid rgba(20,184,166,0.22);
          background: rgba(20,184,166,0.08);
          border-radius: 999px;
        }

        .ct-outlineWord{
          -webkit-text-stroke: 1.25px rgba(214,178,94,0.70);
          color: transparent;
        }
      `}</style>

      <section
        id="contact"
        className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden flex items-center text-[var(--bone)] ct-bg ct-grain"
      >
        {/* background layers */}
        <div className="ct-grid" />
        <div className="ct-fiber" />
        <div className="ct-dust" />
        <div className="ct-vignette" />

        {/* watermark */}
        <motion.div
          className="absolute top-[6%] left-0 right-0 pointer-events-none flex justify-center select-none z-0"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ct-display ct-watermark text-[clamp(6rem,20vw,20rem)] font-bold italic leading-none whitespace-nowrap opacity-[0.50]">
            CONTACT
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* LEFT COLUMN */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Status */}
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12, type: "spring", stiffness: 200 }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--haze)] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--haze)]"></span>
                  </span>

                  <span className="ct-status ct-mono text-[0.62rem] md:text-[0.68rem] tracking-[0.28em] uppercase px-4 py-2 text-[rgba(244,240,232,0.92)]">
                    Available for work
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  className="ct-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic leading-[1.02] mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  Let’s start a <br />
                  <span className="ct-outlineWord ct-sans font-extrabold not-italic tracking-[-0.03em]">
                    project
                  </span>{" "}
                  together.
                </motion.h2>

                <motion.p
                  className="ct-sans text-lg md:text-xl text-[rgba(154,148,138,0.95)] leading-[1.9] max-w-lg mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  Have an idea? I can help you build it. I’m currently available
                  for freelance projects and open to full-time opportunities.
                </motion.p>

                {/* Email Artifact CTA */}
                <motion.div
                  className="group relative w-full sm:w-fit"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 160, damping: 18 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className="ct-card p-5 md:p-6"
                    onMouseMove={onCardMove}
                    onMouseLeave={onCardLeave}
                  >
                    <div className="ct-film" />
                    <div className="ct-sheen" />
    

                    <button
                      onClick={handleCopyEmail}
                      className="relative z-10 w-full flex items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0"
                        >
                          <Mail className="w-6 h-6 text-[var(--metal2)]" />
                        </motion.div>

                        <div className="flex-1 min-w-0 text-left">
                          <p className="ct-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                            Email
                          </p>
                          <p className="ct-sans text-base md:text-xl font-semibold text-[rgba(244,240,232,0.96)] truncate">
                            brandon.geraldo28@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {copied ? (
                          <motion.span
                            className="ct-mono text-[0.62rem] tracking-[0.26em] uppercase px-4 py-2 rounded-full"
                            style={{
                              border: "1px solid rgba(20,184,166,0.28)",
                              background: "rgba(20,184,166,0.10)",
                              color: "rgba(244,240,232,0.95)",
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 420, damping: 18 }}
                          >
                            Copied
                          </motion.span>
                        ) : (
                          <span className="ct-chip ct-mono text-[0.6rem] tracking-[0.26em] uppercase px-4 py-2 text-[rgba(154,148,138,0.95)] group-hover:text-[rgba(244,240,232,0.95)] transition-colors">
                            Copy <Copy className="inline-block w-4 h-4 ml-2 -translate-y-[1px]" />
                          </span>
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 md:gap-10 mt-8 lg:mt-0"
            >
              {/* Info list */}
              <div className="space-y-6 md:space-y-8">
                {/* Phone */}
                <motion.div
                  className="ct-card p-6 md:p-7"
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="ct-film" />
                  <div className="ct-sheen" />
    

                  <div className="relative z-10 flex items-start gap-5 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--metal2)]" />
                    </div>

                    <div className="min-w-0">
                      <p className="ct-mono text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.95)]">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="https://wa.me/6285855462022"
                        target="_blank"
                        rel="noreferrer"
                        className="ct-sans text-lg md:text-2xl font-bold text-[rgba(244,240,232,0.96)] hover:text-[var(--metal2)] transition-colors inline-flex items-center gap-2 flex-wrap"
                      >
                        +62 858 5546 2022
                        <ArrowUpRight className="w-5 h-5 opacity-60" />
                      </a>
                      <p className="ct-sans text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-2">
                        Quick response for inquiries & collabs.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="ct-card p-6 md:p-7"
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.26, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="ct-film" />
                  <div className="ct-sheen" />
              

                  <div className="relative z-10 flex items-start gap-5 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-[rgba(214,178,94,0.18)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center flex-shrink-0">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MapPin className="w-6 h-6 text-[var(--metal2)]" />
                      </motion.div>
                    </div>

                    <div className="min-w-0">
                      <p className="ct-mono text-[0.58rem] tracking-[0.28em] uppercase text-[rgba(154,148,138,0.95)]">
                        Location
                      </p>
                      <p className="ct-sans text-lg md:text-2xl font-bold text-[rgba(244,240,232,0.96)]">
                        Malang, Indonesia
                      </p>
                      <p className="ct-sans text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-2">
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
                viewport={{ once: true }}
                transition={{ delay: 0.32, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between mb-5">
                  <h4 className="ct-display text-xl md:text-2xl font-semibold italic">
                    Connect with me
                  </h4>
                  <span className="ct-mono text-[0.58rem] tracking-[0.26em] uppercase text-[rgba(154,148,138,0.95)]">
                    social dock
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Ndonnnnn7", tone: "rgba(244,240,232,0.85)" },
                    { icon: Linkedin, href: "https://linkedin.com/in/brandongeraldoadji", tone: "rgba(53,208,255,0.90)" },
                    { icon: Instagram, href: "https://instagram.com/brandonngeraldo", tone: "rgba(242,216,154,0.95)" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ct-card w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"
                      onMouseMove={onCardMove}
                      onMouseLeave={onCardLeave}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.38 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8, rotate: [0, -2, 2, 0], transition: { duration: 0.25 } }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHoveredSocial(i)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      aria-label="social link"
                    >
                      <div className="ct-film" />
                      <div className="ct-sheen" />
                      

                      <motion.div
                        className="relative z-10"
                        animate={
                          hoveredSocial === i
                            ? { rotate: [0, 12, -12, 0], scale: [1, 1.1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 0.45 }}
                      >
                        <social.icon className="w-6 h-6" style={{ color: social.tone }} />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>

                <p className="ct-sans text-[0.9rem] text-[rgba(154,148,138,0.92)] mt-5 leading-[1.9]">
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