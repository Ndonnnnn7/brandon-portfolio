import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const profileImage = "img/profile.svg";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 30, stiffness: 80, mass: 0.6 };
  const springX = useSpring(mouseX, springCfg);
  const springY = useSpring(mouseY, springCfg);

  const bgTextX = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [20, -20],
  );
  const bgTextY = useTransform(
    springY,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [10, -10],
  );
  const imgX = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-12, 12],
  );
  const imgY = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-8, 8]);
  const fgTextX = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-20, 20],
  );
  const fgTextY = useTransform(
    springY,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-15, 15],
  );
  const orb1X = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-40, 40],
  );
  const orb1Y = useTransform(
    springY,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-30, 30],
  );
  const orb2X = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [25, -25],
  );
  const orb2Y = useTransform(
    springY,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [20, -20],
  );
  const orb3X = useTransform(
    springX,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [15, -15],
  );
  const orb3Y = useTransform(
    springY,
    [-0.5, 0.5],
    isMobile ? [0, 0] : [-20, 20],
  );

  const handleMouseMove = (e) => {
    if (isMobile) return;
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const marqueeItems = [
    "UI/UX Designer",
    "✦",
    "Front End Dev",
    "✦",
    "Available for Hire",
    "✦",
    "React Specialist",
    "✦",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Syne:wght@700;800&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --bg:         #09090b;
          --bone:       #fdfbf7;
          --metal:      #9c978b;
          --gold:       #d4af37;
          --gold-light: #fce8a1;
          --gold-dim:   rgba(212,175,55,0.18);
          --gold-dark:  #997a15;
          --px:         5vw; /* <-- VARIABEL BARU UNTUK MENYAMAKAN ALIGNMENT */
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .h-root {
          position: relative; width: 100%; height: 100dvh; overflow: hidden;
          background: #07070a; color: var(--bone);
          font-family: 'Syne', sans-serif; cursor: crosshair; user-select: none;
        }

        /* === GOLD AMBIENT BASE === */
        .h-base-glow {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background:
            radial-gradient(ellipse 70% 50% at 15% 85%, rgba(212,175,55,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 45% at 85% 15%, rgba(212,175,55,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%);
        }

        /* === DIAGONAL GOLD STREAKS === */
        .h-streaks {
          position: absolute; inset: 0; z-index: 2; pointer-events: none; overflow: hidden;
        }
        .h-streak { position: absolute; background: linear-gradient(to right, transparent, rgba(212,175,55,0.12), transparent); transform-origin: left center; }
        .h-streak:nth-child(1) { width: 120%; height: 1px; top: 22%; left: -10%; transform: rotate(-12deg); opacity: 0.7; box-shadow: 0 0 12px 2px rgba(212,175,55,0.08); }
        .h-streak:nth-child(2) { width: 80%; height: 1px; top: 55%; left: 20%; transform: rotate(-12deg); opacity: 0.4; }
        .h-streak:nth-child(3) { width: 60%; height: 1px; top: 75%; left: 0%; transform: rotate(-12deg); opacity: 0.25; }
        .h-streak:nth-child(4) { width: 50%; height: 1px; top: 38%; right: 0%; left: auto; transform: rotate(-12deg); opacity: 0.3; background: linear-gradient(to left, transparent, rgba(252,232,161,0.10), transparent); }

        /* === CORNER ORNAMENTS === */
        .h-corner { position: absolute; z-index: 6; pointer-events: none; width: 100px; height: 100px; }
        .h-corner::before, .h-corner::after { content: ''; position: absolute; background: var(--gold); opacity: 0.35; }
        .h-corner::before { width: 40px; height: 1px; }
        .h-corner::after  { width: 1px; height: 40px; }
        .h-corner-tl { top: 28px; left: 28px; } .h-corner-tl::before, .h-corner-tl::after { top: 0; left: 0; }
        .h-corner-tr { top: 28px; right: 28px; transform: scaleX(-1); } .h-corner-tr::before, .h-corner-tr::after { top: 0; left: 0; }
        .h-corner-br { bottom: 56px; right: 28px; transform: scale(-1); } .h-corner-br::before, .h-corner-br::after { top: 0; left: 0; }
        .h-corner-bl { bottom: 56px; left: 28px; transform: scaleY(-1); } .h-corner-bl::before, .h-corner-bl::after { top: 0; left: 0; }

        /* === GOLD GRID & SCANLINES === */
        .h-grid {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background-image: linear-gradient(rgba(212,175,55,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.055) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 80%);
        }
        .h-scanlines {
          position: absolute; inset: 0; z-index: 4; pointer-events: none;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(212,175,55,0.012) 3px, rgba(212,175,55,0.012) 4px);
          mask-image: radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 75%);
        }

        /* === DUST PARTICLES === */
        .h-dust { position: absolute; inset: 0; z-index: 5; pointer-events: none; overflow: hidden; }
        .h-dust-dot { position: absolute; border-radius: 50%; background: var(--gold); opacity: 0; animation: h-float var(--dur) ease-in-out var(--delay) infinite; }
        @keyframes h-float {
          0%   { opacity: 0; transform: translateY(0) scale(1); }
          20%, 80%  { opacity: var(--op); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.6); }
        }

        .h-hline {
          position: absolute; left: 5%; right: 5%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(212,175,55,0.25), rgba(212,175,55,0.12), transparent);
          z-index: 7; pointer-events: none;
        }
        .h-hline-top { top: 14%; } .h-hline-bottom { bottom: 56px; }

        /* === GRAIN & VIGNETTE === */
        .h-grain {
          position: absolute; inset: -40%; width: 180%; height: 180%; z-index: 60; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04; mix-blend-mode: overlay; transform: rotate(4deg);
        }
        .h-vig {
          position: absolute; inset: 0; z-index: 8; pointer-events: none;
          background:
            radial-gradient(ellipse 110% 55% at 50% 0%,   transparent 35%, rgba(7,7,10,0.80) 100%),
            radial-gradient(ellipse 110% 50% at 50% 100%, transparent 25%, rgba(7,7,10,0.97) 100%),
            radial-gradient(ellipse 30%  100% at 0% 50%,  rgba(7,7,10,0.60) 0%, transparent 70%),
            radial-gradient(ellipse 30%  100% at 100% 50%,rgba(7,7,10,0.60) 0%, transparent 70%);
        }

        /* === LIGHT ORBS === */
        .h-orb { position: absolute; border-radius: 50%; filter: blur(140px); pointer-events: none; z-index: 9; will-change: transform; }
        .h-orb-primary { width: 600px; height: 600px; background: radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(153,122,21,0.08) 40%, transparent 65%); top: -150px; left: -100px; }
        .h-orb-secondary { width: 680px; height: 420px; background: radial-gradient(circle, rgba(252,232,161,0.10) 0%, rgba(212,175,55,0.06) 40%, transparent 65%); top: 35%; right: -130px; }
        .h-orb-floor { width: 900px; height: 260px; background: radial-gradient(ellipse, rgba(212,175,55,0.10) 0%, transparent 65%); bottom: 30px; left: 50%; transform: translateX(-50%); filter: blur(80px); }

        /* === BG HEADLINE === */
        .h-bg-text { position: absolute; top: 12%; left: 0; right: 0; text-align: center; z-index: 10; pointer-events: none; will-change: transform; }
        .h-bg-text h1 {
          font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 300; font-size: clamp(5rem, 15vw, 16.5rem);
          line-height: 1; white-space: nowrap; letter-spacing: -0.02em; color: #fdfbf7; -webkit-text-stroke: 1px rgba(212,175,55,0.5);  
          text-shadow:  0 0 30px rgba(212,175,55,0.25), 0 0 60px rgba(212,175,55,0.15);
        }

        /* === IMAGE === */
        .h-img-container {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          z-index: 20; width: 45%; max-width: 1000px; height: 85vh; display: flex; align-items: flex-end; justify-content: center; pointer-events: none;
        }
        .h-img-wrap { width: 100%; height: 100%; will-change: transform; }
        .h-img-inner { position: relative; width: 100%; height: 100%; }
        .h-img-inner img { width: 100%; height: 100%; object-fit: contain; object-position: bottom center; filter: contrast(1.06) saturate(0.85); display: block; }
        .h-img-inner::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 25vh; background: linear-gradient(to top, #07070a 0%, transparent 100%); pointer-events: none; }
        .h-img-halo { position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); width: 60%; height: 50%; background: radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%); filter: blur(60px); z-index: 19; pointer-events: none; }

        /* === MIDDLE BADGES === */
        .h-middle {
          position: absolute; top: 50%; transform: translateY(-50%);
          left: 0; right: 0; padding: 0 var(--px); /* ALIGNMENT FIX */
          z-index: 30; pointer-events: none;
        }
        .h-middle-inner { display: flex; justify-content: space-between; align-items: center; width: 100%; will-change: transform; }
        
        .h-badge {
          display: flex; align-items: center; gap: 10px; padding: 8px 18px 8px 8px; border-radius: 100px;
          border: 1px solid rgba(212,175,55,0.22); background: rgba(9,9,11,0.75); backdrop-filter: blur(16px);
          box-shadow: 0 6px 28px rgba(0,0,0,0.45), inset 0 0 0 0.5px rgba(212,175,55,0.08); pointer-events: auto;
        }
        .h-badge-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.35); display: flex; align-items: center; justify-content: center; }
        .h-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 10px var(--gold); animation: pulse-h 2.5s infinite; }
        @keyframes pulse-h { 0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.5); } 50% { box-shadow: 0 0 0 6px rgba(212,175,55,0); } }
        .h-badge-text { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--bone); }

        .h-spec {
          max-width: 240px; padding: 20px; border-radius: 18px; border: 1px solid rgba(212,175,55,0.14);
          background: rgba(9,9,11,0.65); backdrop-filter: blur(18px); box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 0 0 0.5px rgba(212,175,55,0.06); pointer-events: auto;
        }
        .h-spec-deco { display: flex; gap: 6px; align-items: center; margin-bottom: 12px; }
        .h-spec-deco span { display: block; height: 1.5px; }
        .h-spec-deco span:nth-child(1) { background: var(--gold-light); width: 20px; opacity: 0.8; }
        .h-spec-deco span:nth-child(2) { background: var(--gold); width: 8px; opacity: 0.8; }
        .h-spec p { font-family: 'DM Mono', monospace; font-size: 0.7rem; line-height: 1.7; color: var(--metal); font-weight: 400; }
        .h-spec strong { color: var(--bone); font-weight: 500; }

        /* === BOTTOM TEXT === */
        .h-bottom {
          position: absolute; bottom: 70px; left: 0; right: 0;
          padding: 0 var(--px); /* ALIGNMENT FIX */
          z-index: 40; pointer-events: none; display: flex; justify-content: space-between; align-items: flex-end; will-change: transform;
        }
        .h-name-iam { display: block; font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 4vw, 3rem); text-transform: uppercase; letter-spacing: -0.02em; line-height: 1; color: var(--bone); margin-bottom: -5px; }
        .h-name-brandon { display: block; font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(3.5rem, 9vw, 8.5rem); text-transform: uppercase; letter-spacing: -0.04em; line-height: 0.9; background: linear-gradient(110deg, var(--bone) 0%, var(--bone) 40%, var(--gold-light) 68%, var(--gold) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 30px rgba(0,0,0,0.8)); }
        .h-title-block { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
        .h-title-word { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: clamp(1.5rem, 4vw, 3.5rem); text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.05; color: transparent; -webkit-text-stroke: 1.5px rgba(253,251,247,0.4); filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5)); }
        .h-title-word:nth-child(2) { -webkit-text-stroke: 1.5px rgba(212,175,55,0.5); }
        .h-title-word:nth-child(3) { -webkit-text-stroke: 1.5px rgba(212,175,55,0.85); }

        /* === MARQUEE === */
        .h-marquee { position: absolute; bottom: 0; left: 0; right: 0; height: 46px; z-index: 55; border-top: 1px solid rgba(212,175,55,0.15); background: linear-gradient(90deg, rgba(9,9,11,0.98), rgba(18,14,5,0.98), rgba(9,9,11,0.98)); overflow: hidden; display: flex; align-items: center; }
        @keyframes h-mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .h-mq-track { display: flex; width: max-content; animation: h-mq 25s linear infinite; }
        .h-mq-item { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; padding: 0 26px; color: rgba(156,151,139,0.6); white-space: nowrap; }
        .h-mq-item.acc { color: var(--gold); }

        /* ENTRANCE */
        @keyframes h-fadeup { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .h-fu { opacity: 0; animation: h-fadeup 1s cubic-bezier(0.22,1,0.36,1) forwards; }
        .h-d2 { animation-delay: 0.2s; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .h-img-container { width: 100%; height: 75vh; }
          .h-spec { display: none; }
        }
        @media (max-width: 768px) {
          .h-img-container { width: 130%; height: 80vh; bottom: 50px; }
          .h-img-inner::after { height: 35vh; }
          .h-bg-text { top: 10%; }
          .h-bg-text h1 { font-size: clamp(3rem, 18vw, 6rem); }
          .h-bottom { flex-direction: column; align-items: center; justify-content: flex-end; font-size: 1rem; bottom: 70px; gap: 15px; text-align: center; padding: 0 20px; }
          .h-name-iam, .h-name-brandon { text-align: center; font-size: clamp(2.5rem, 6vw, 4rem); }
          .h-title-block { align-items: center; flex-direction: row; gap: 8px; flex-wrap: wrap; justify-content: center; }
          .h-title-word { font-size: 1.1rem; }
          .h-middle { top: 20%; transform: none; padding: 0 20px; }
          .h-middle-inner { justify-content: center; }
          .h-badge { background: rgba(9,9,11,0.85); }
          .h-corner { display: none; }
          .h-streak { opacity: 0.5; }
        }
      `}</style>

      <section
        className="h-root"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* === BACKGROUND LAYERS === */}
        <div className="h-base-glow" />
        <div className="h-streaks">
          <div className="h-streak" />
          <div className="h-streak" />
          <div className="h-streak" />
          <div className="h-streak" />
        </div>
        <div className="h-grid" />
        <div className="h-scanlines" />

        {/* FLOATING DUST PARTICLES */}
        <div className="h-dust" aria-hidden="true">
          {[
            {
              top: "70%",
              left: "12%",
              size: 2,
              op: 0.5,
              dur: "6s",
              delay: "0s",
            },
            {
              top: "40%",
              left: "25%",
              size: 1,
              op: 0.4,
              dur: "8s",
              delay: "1.5s",
            },
            {
              top: "60%",
              left: "70%",
              size: 2,
              op: 0.5,
              dur: "7s",
              delay: "0.8s",
            },
            {
              top: "30%",
              left: "80%",
              size: 1,
              op: 0.3,
              dur: "9s",
              delay: "2.2s",
            },
            {
              top: "80%",
              left: "45%",
              size: 2,
              op: 0.45,
              dur: "6s",
              delay: "3.5s",
            },
            {
              top: "20%",
              left: "55%",
              size: 1,
              op: 0.3,
              dur: "10s",
              delay: "4s",
            },
            {
              top: "55%",
              left: "8%",
              size: 2,
              op: 0.4,
              dur: "7s",
              delay: "1s",
            },
            {
              top: "15%",
              left: "35%",
              size: 1,
              op: 0.25,
              dur: "8s",
              delay: "5s",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="h-dust-dot"
              style={{
                top: d.top,
                left: d.left,
                width: d.size,
                height: d.size,
                "--op": d.op,
                "--dur": d.dur,
                "--delay": d.delay,
              }}
            />
          ))}
        </div>

        {/* HORIZONTAL GOLD LINES */}
        <div className="h-hline h-hline-top" />
        <div className="h-hline h-hline-bottom" />

        {/* CORNER ORNAMENTS */}
        <div className="h-corner h-corner-tl" />
        <div className="h-corner h-corner-tr" />
        <div className="h-corner h-corner-br" />
        <div className="h-corner h-corner-bl" />

        {/* GRAIN + VIGNETTE */}
        <div className="h-grain" />
        <div className="h-vig" />

        {/* ORBS */}
        <motion.div
          className="h-orb h-orb-primary"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="h-orb h-orb-secondary"
          style={{ x: orb2X, y: orb2Y }}
        />
        <motion.div
          className="h-orb h-orb-floor"
          style={{ x: orb3X, y: orb3Y }}
        />

        {/* BACKGROUND TEXT */}
        <motion.div className="h-bg-text" style={{ x: bgTextX, y: bgTextY }}>
          <h1>Hey, there</h1>
        </motion.div>

        {/* IMAGE */}
        <div className="h-img-halo" />
        <div className="h-img-container">
          <motion.div
            className="h-img-wrap h-fu h-d2"
            style={{ x: imgX, y: imgY }}
          >
            <div className="h-img-inner">
              <img src={profileImage} alt="Brandon" loading="eager" />
            </div>
          </motion.div>
        </div>

        {/* MIDDLE BADGES - WITH ADDED INNER WRAPPER FOR PARALLAX ALIGNMENT */}
        <div className="h-middle">
          <motion.div
            className="h-middle-inner"
            style={{ x: fgTextX, y: fgTextY }}
          >
            <motion.div
              className="h-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="h-badge-icon">
                <div className="h-badge-dot" />
              </div>
              <span className="h-badge-text">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              className="h-spec"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <div className="h-spec-deco">
                <span />
                <span />
              </div>
              <p>
                Specialized in <strong>Web Design</strong>,{" "}
                <strong>UX / UI</strong>, and{" "}
                <strong>Front End Development</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM TEXT */}
        <motion.div className="h-bottom" style={{ x: fgTextX, y: fgTextY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <span className="h-name-iam">I Am</span>
            <span className="h-name-brandon">Brandon</span>
          </motion.div>

          <motion.div
            className="h-title-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <span className="h-title-word">Digital</span>
            <span className="h-title-word">Product</span>
            <span className="h-title-word">Designer</span>
          </motion.div>
        </motion.div>

        {/* MARQUEE */}
        <div className="h-marquee" aria-hidden="true">
          <div className="h-mq-track">
            {Array(6)
              .fill(marqueeItems)
              .flat()
              .map((t, i) => (
                <span key={i} className={`h-mq-item${t === "✦" ? " acc" : ""}`}>
                  {t}
                </span>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
