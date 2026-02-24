import React, { useRef, useCallback } from "react";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const profileImage = "img/Profile Photo1.jpg";
  const cardRef = useRef(null);

  // ── 3D TILT & GLARE PHYSICS ──────────────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.8 });

  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);

  const glareX = useTransform(springX, [0, 1], [-20, 120]);
  const glareY = useTransform(springY, [0, 1], [-20, 120]);

  const handleMouseMove = useCallback(
    (e) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        :root {
          --bg: #07070a;
          --bone: #f4f0e8;
          --metal: #9a948a;
          --rust: #d95c41;
          --border: rgba(255,255,255,0.08);
          --border2: rgba(214,178,94,0.15);
        }

        .hero-bg { background-color: var(--bg); }

        .bg-architect {
          background-image:
            linear-gradient(rgba(214,178,94,0.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,178,94,0.08) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: center top;
          mask-image: radial-gradient(circle at 50% 30%, black 0%, black 45%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 30%, black 0%, black 45%, transparent 80%);
          opacity: .85;
        }

        .grain::after {
          content: '';
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          z-index: 5;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E");
          opacity: 0.045;
          mix-blend-mode: overlay;
          transform: rotate(4deg);
        }

        .vignette {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background:
            radial-gradient(1000px 600px at 50% 10%, transparent 40%, rgba(0,0,0,0.5) 85%),
            radial-gradient(900px 700px at 50% 112%, transparent 40%, rgba(0,0,0,0.6) 80%);
        }

        .text-mesh {
          background: linear-gradient(120deg, var(--bone) 0%, var(--metal) 40%, var(--rust) 75%, var(--bone) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: meshShine 8s linear infinite;
        }
        @keyframes meshShine { to { background-position: 200% center; } }

        .text-outline {
          -webkit-text-stroke: 1.5px rgba(214,178,94,0.65);
          color: transparent;
        }

        @keyframes marquee-fast { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee-fast 22s linear infinite; }

        .barcode {
          background: repeating-linear-gradient(
            to right,
            rgba(154,148,138,0.9) 0, rgba(154,148,138,0.9) 2px,
            transparent 2px, transparent 4px,
            rgba(154,148,138,0.7) 4px, rgba(154,148,138,0.7) 5px,
            transparent 5px, transparent 8px,
            rgba(154,148,138,0.8) 8px, rgba(154,148,138,0.8) 12px
          );
        }

        .reg-mark { position: absolute; width: 18px; height: 18px; z-index: 40; opacity: 0.7; }
        .reg-mark::before, .reg-mark::after { content:''; position:absolute; background: rgba(244,240,232,0.65); opacity: 1; }
        .reg-mark::before { top:50%; left:0; right:0; height:1px; transform:translateY(-50%); }
        .reg-mark::after { left:50%; top:0; bottom:0; width:1px; transform:translateX(-50%); }
        .reg-tl { top: 10px; left: 10px; }
        .reg-tr { top: 10px; right: 10px; }
        .reg-bl { bottom: 10px; left: 10px; }
        .reg-br { bottom: 10px; right: 10px; }

        .artifact {
          position: relative;
          border-radius: 22px;
          background:
            radial-gradient(1200px 800px at 20% 10%, rgba(217, 92, 65, 0.12), transparent 55%),
            radial-gradient(1000px 700px at 90% 30%, rgba(214, 178, 94, 0.14), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015)),
            rgba(7,7,10,0.78);
          box-shadow:
            0 45px 120px rgba(0,0,0,0.75),
            0 18px 40px rgba(0,0,0,0.55),
            0 0 0 1px rgba(255,255,255,0.06) inset;
          backdrop-filter: blur(22px) saturate(140%);
          -webkit-backdrop-filter: blur(22px) saturate(140%);
          transform: translateZ(0);
          will-change: transform;
          overflow: hidden;
        }

        .artifact::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            rgba(214,178,94,0.55),
            rgba(255,255,255,0.10),
            rgba(217,92,65,0.35),
            rgba(255,255,255,0.06)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.85;
          pointer-events: none;
        }

        .artifact::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          pointer-events: none;
          opacity: 0.55;
          mix-blend-mode: overlay;
          background:
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255,255,255,0.08) 18%,
              rgba(214,178,94,0.10) 38%,
              rgba(20,184,166,0.08) 55%,
              rgba(124,58,237,0.08) 72%,
              rgba(217,92,65,0.10) 86%,
              transparent 100%
            );
          filter: blur(0.2px);
        }

        @keyframes floatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-idle { animation: floatIdle 6s ease-in-out infinite; }

        @keyframes statusPing { 75%, 100% { transform: scale(2.5); opacity: 0; } }
        .status-ping { animation: statusPing 2s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      <section className="relative w-full min-h-screen overflow-hidden text-[var(--bone)] hero-bg grain flex flex-col font-sans">
        
        <div className="absolute inset-0 pointer-events-none bg-architect" style={{ zIndex: 1 }} />
        <div className="vignette" />

        <div className="relative z-20 flex-1 flex flex-col w-full max-w-[1400px] mx-auto">
          {/* ✅ Disesuaikan: pt-16 pada mobile agar tidak terlalu jauh ke bawah */}
          <div className="flex-1 flex items-center px-5 sm:px-8 md:px-12 pt-16 pb-16 lg:py-0">
            {/* ✅ Disesuaikan: gap-12 untuk mobile agar jarak teks ke gambar lebih rapat */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 xl:gap-32 lg:pr-8">
              
              {/* ─── LEFT: TYPOGRAPHY & COPY ─── */}
              <motion.div
                className="flex-1 w-full lg:max-w-[55%] xl:max-w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <motion.div
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-6 sm:mb-8 w-full"
                >
                  <div className="w-10 sm:w-12 lg:w-16 h-px bg-[var(--metal)]" />
                  <span className="font-mono text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[var(--metal)] whitespace-nowrap">
                    Index / 01
                  </span>
                  <div className="w-10 sm:w-12 h-px bg-[var(--metal)] lg:hidden" />
                </motion.div>

                {/* ✅ Disesuaikan: Nilai minimal clamp() diturunkan dari 4.2rem/3.8rem menjadi 2.75rem/2.5rem agar muat di HP */}
                <div className="mb-8 sm:mb-10 relative z-10 flex flex-col w-full">
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="text-[clamp(2.75rem,11.5vw,8.5rem)] leading-[0.9] tracking-tight font-light italic"
                  >
                    Building
                  </motion.h1>

                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="text-[clamp(2.5rem,10.5vw,7.8rem)] leading-[0.9] tracking-tighter font-extrabold text-mesh uppercase lg:ml-12 lg:-mt-2"
                  >
                    Modern
                  </motion.h1>

                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="text-[clamp(2.75rem,11.5vw,8.5rem)] leading-[0.9] tracking-tight text-outline font-bold italic lg:-mt-2"
                  >
                    Interfaces.
                  </motion.h1>
                </div>

                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 0.35 } } }}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 mb-10 lg:mb-12 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:max-w-xl"
                >
                  <div className="hidden lg:block w-1 min-h-[64px] bg-gradient-to-b from-[var(--metal)] to-transparent shrink-0" />
                  <p className="text-[0.8rem] sm:text-[0.85rem] md:text-sm leading-[1.7] sm:leading-[1.85] text-[rgba(244,240,232,0.7)] tracking-wide">
                    Bridging the gap between <span className="text-[var(--bone)] font-semibold">engineering precision</span> and <span className="text-[var(--bone)] font-semibold">editorial aesthetics</span>. From pixel-perfect UI to performant production code.
                  </p>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10 w-full"
                >
                  <a
                    href="#projects"
                    className="group relative px-8 py-4 sm:px-10 sm:py-5 border border-[var(--border2)] bg-[rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center gap-4 transition-all active:scale-95 w-full sm:w-auto hover:border-[var(--bone)] hover:shadow-[0_0_20px_rgba(244,240,232,0.1)] shrink-0"
                  >
                    <div className="absolute inset-0 bg-[var(--bone)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
                    <span className="relative z-10 font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em] uppercase font-semibold text-[var(--bone)] group-hover:text-[var(--bg)] transition-colors duration-500">
                      View Projects
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10 text-[var(--bone)] group-hover:text-[var(--bg)] transition-colors duration-500 transform group-hover:translate-x-1">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </a>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-[0.55rem] tracking-[0.22em] text-[rgba(154,148,138,0.85)] uppercase hidden lg:block shrink-0">
                      Toolkit //
                    </span>
                    {[
                      { icon: FaFigma, color: "#ff6b6b", name: "Figma" },
                      { icon: FaReact, color: "#35d0ff", name: "React" },
                      { icon: SiTailwindcss, color: "#14b8a6", name: "Tailwind" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        title={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-11 lg:h-11 border border-[rgba(214,178,94,0.18)] flex items-center justify-center bg-[rgba(255,255,255,0.02)] hover:border-[var(--bone)] hover:bg-[rgba(255,255,255,0.08)] transition-all cursor-crosshair group rounded-sm shrink-0"
                      >
                        <tech.icon style={{ color: tech.color }} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* ─── RIGHT: WRAPPER (MENANGANI KEDUA VERSI DESAIN) ─── */}
              <motion.div
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px] mx-auto lg:mx-0 lg:ml-auto shrink-0 relative perspective-[1200px] mt-2 lg:mt-0"
                initial={{ opacity: 0, filter: "blur(12px)", scale: 0.9 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                
                {/* ✅ VERSI MOBILE: DESAIN ORIGINAL TETAP DIPERTAHANKAN ✅ */}
                <motion.div 
                  style={{ rotateX, rotateY }} 
                  className="artifact p-3 pb-20 float-idle lg:hidden"
                >
                  <div className="reg-mark reg-tl" />
                  <div className="reg-mark reg-tr" />
                  <div className="reg-mark reg-bl" />
                  <div className="reg-mark reg-br" />

                  <motion.div
                    className="absolute inset-0 z-50 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: useTransform(
                        () => `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.85) 0%, transparent 60%)`
                      ),
                    }}
                  />

                  <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(214,178,94,0.25)] bg-[#0f0f14]">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile of Brandon"
                        className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out grayscale-[20%] contrast-[1.15] sepia-[15%]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-8xl italic text-[var(--metal)] opacity-30">B.</span>
                      </div>
                    )}

                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.65)] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,10,0.95)] via-transparent to-transparent opacity-90 pointer-events-none" />

                    <div className="absolute top-4 right-4 flex items-center gap-2 border border-[rgba(255,255,255,0.15)] px-2 py-1 bg-[rgba(0,0,0,0.50)] backdrop-blur-md rounded-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--rust)] animate-pulse" />
                      <span className="font-mono text-[0.45rem] tracking-widest uppercase text-white">REC</span>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-20">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.5rem] tracking-[0.28em] uppercase text-[var(--metal)]">Subject</span>
                      <p className="text-2xl md:text-3xl font-medium italic text-[var(--bone)] leading-none">Brandon.</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="barcode w-20 h-5 opacity-60" />
                      <p className="font-mono text-[0.5rem] tracking-[0.22em] text-[rgba(154,148,138,0.9)]">ID-2025</p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -top-4 -left-3 z-50 bg-[var(--bone)] px-5 py-2 border border-[rgba(0,0,0,0.18)] shadow-2xl rotate-[-3deg] flex items-center gap-3 rounded-sm"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                  >
                    <div className="relative flex h-2 w-2">
                      <span className="status-ping absolute inset-0 rounded-full bg-[var(--bg)] opacity-60"></span>
                      <span className="relative w-2 h-2 rounded-full bg-[var(--bg)]"></span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-5 -right-3 z-50 bg-[var(--rust)] px-5 py-3 shadow-2xl rotate-[4deg] border border-[rgba(255,255,255,0.10)] rounded-sm"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                  </motion.div>
                </motion.div>


                {/* ✅ VERSI DESKTOP: DESAIN BARU "DECONSTRUCTED" (DENGAN hidden lg:block) ✅ */}
                <motion.div
                  className="hidden lg:block relative w-full aspect-square float-idle"
                  style={{ rotateX, rotateY }}
                >
                  <motion.div
                    className="absolute inset-0 z-50 pointer-events-none opacity-30 mix-blend-overlay rounded-3xl"
                    style={{ background: useTransform(() => `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.8) 0%, transparent 60%)`) }}
                  />

                  {/* Panel Kaca Belakang */}
                  <div className="absolute inset-y-8 inset-x-0 bg-[rgba(20,20,25,0.45)] backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--rust)] opacity-10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--metal)] opacity-10 rounded-full blur-3xl" />

                    <div className="absolute inset-8 flex flex-col justify-end w-[55%] pb-4 z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inset-0 rounded-full bg-[var(--bone)] opacity-75"></span>
                          <span className="relative rounded-full h-2 w-2 bg-[var(--bone)]"></span>
                        </div>
                        <span className="font-mono text-[0.6rem] text-[var(--bone)] tracking-[0.2em] uppercase">System Active</span>
                      </div>
                      <h3 className="text-4xl xl:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-br from-[var(--bone)] to-[var(--metal)] mb-2">Brandon.</h3>
                      <p className="font-mono text-xs text-[var(--metal)] mb-8 tracking-widest">ID-2025 // DEV</p>
                      
                      <div className="h-px w-full bg-gradient-to-r from-[var(--metal)] to-transparent mb-6 opacity-30" />
                      
                      <div className="grid grid-cols-2 gap-4 font-mono text-[0.6rem] tracking-[0.15em] text-[var(--bone)] uppercase">
                        <div>
                          <span className="block text-[var(--metal)] opacity-60 mb-1 text-[0.5rem]">Role</span>
                          Front End
                        </div>
                        <div>
                          <span className="block text-[var(--metal)] opacity-60 mb-1 text-[0.5rem]">Status</span>
                          Available
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 left-6 font-mono text-[10rem] xl:text-[12rem] leading-none text-[rgba(255,255,255,0.02)] font-bold italic z-0 pointer-events-none select-none">
                      01
                    </div>
                  </div>

                  {/* Foto Mengambang Melampaui Batas (Break out of frame) */}
                  <div className="absolute -top-4 -right-4 w-[50%] aspect-[3/4] bg-[#07070a] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[rgba(214,178,94,0.3)] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-20">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover grayscale-[15%] contrast-125 hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,10,0.9)] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-5 left-[-32px] bg-[var(--rust)] px-8 py-1.5 text-[var(--bone)] text-[0.5rem] font-bold font-mono tracking-widest -rotate-45 shadow-lg">
                      PROTOTYPE
                    </div>
                  </div>
                  
                  {/* Dekorasi Garis Kanan Bawah */}
                  <div className="absolute bottom-16 right-6 flex flex-col gap-1.5 z-20 opacity-40">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-[1.5px] bg-[var(--metal)]" style={{ width: `${Math.random() * 20 + 10}px` }} />
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full z-30 border-t border-[var(--border)] bg-[rgba(7,7,10,0.85)] backdrop-blur-lg mt-auto">
          <div className="overflow-hidden py-3.5" aria-hidden="true">
            <div className="animate-marquee flex whitespace-nowrap w-max items-center">
              {Array(6)
                .fill(["UI/UX DESIGNER", "✦", "FRONT END DEV", "✦", "AVAILABLE FOR HIRE", "✦"])
                .flat()
                .map((t, i) => (
                  <span
                    key={i}
                    className={`font-mono text-[0.62rem] px-8 tracking-[0.35em] uppercase ${
                      t === "✦" ? "text-[var(--rust)]" : "text-[rgba(244,240,232,0.85)]"
                    }`}
                  >
                    {t}
                  </span>
                ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;