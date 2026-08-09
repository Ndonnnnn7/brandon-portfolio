import React, { useEffect, useState } from "react";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const profileImage = "/img/profile.svg";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 25, stiffness: 100, mass: 0.8 };
  const springX = useSpring(mouseX, springCfg);
  const springY = useSpring(mouseY, springCfg);

  const titleX = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [30, -30]);
  const titleY = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [20, -20]);
  const imgX = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-40, 40]);
  const imgY = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);
  const floatX1 = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-50, 50]);
  const floatY1 = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]);
  const floatX2 = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [40, -40]);
  const floatY2 = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [40, -40]);

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

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>

      <section
        className="theme-section relative w-full min-h-[100dvh] bg-canvas text-ink overflow-x-hidden selection:bg-primary selection:text-ink md:h-[100dvh] md:overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <Motion.div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] border border-[#8FE8F6]/30 rounded-full z-0 mix-blend-screen hidden md:block pointer-events-none"
          style={{ x: floatX1, y: floatY1 }}
        />
        <Motion.div
          className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-3xl bg-[#8FE8F6]/15 z-0 hidden md:block pointer-events-none"
          style={{ x: floatX2, y: floatY2, rotate: 15 }}
        />

        <div className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-center px-5 sm:px-6 md:px-12 max-w-[1800px] mx-auto pt-24 pb-12 md:h-full md:py-0">
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 md:top-32 left-5 sm:left-6 md:left-12 flex items-center gap-4"
          >
          </Motion.div>

          <Motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-0 mt-12 md:mt-0"
            style={{ x: titleX, y: titleY }}
          >
            <h1 className="text-[clamp(4rem,18vw,18rem)] font-black uppercase leading-[0.85] tracking-tighter text-ink opacity-5">
              BRANDON
              <br />
              GERALDO
            </h1>
          </Motion.div>

          <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-16 md:mt-0 md:h-full gap-8 md:gap-0">
            <Motion.div
              className="order-2 mt-0 flex w-full flex-col items-center md:order-1 md:w-1/3 md:items-start md:pl-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mx-auto w-full max-w-[360px] rounded-3xl border border-ink bg-surface p-5 text-ink md:mx-0 md:max-w-sm md:-rotate-2 md:p-6">
                <div className="flex justify-between items-center mb-4 border-b border-line pb-2">
                  <span className="font-mono text-[10px] font-bold">STATUS</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FE8F6] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FE8F6]"></span>
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#8FE8F6]">AVAILABLE</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl md:text-2xl leading-none uppercase tracking-tight mb-2">
                  Designer by eye. Developer by hand.
                </h3>
                <p className="text-sm font-medium text-muted leading-relaxed">
                 Designing with intent. Building with precision. Turning complex problems into experiences that feel effortless.
                </p>
              </div>
            </Motion.div>

            <Motion.div
              className="w-full md:w-1/3 h-[42vh] sm:h-[48vh] md:h-[75vh] order-1 md:order-2 flex justify-center items-end relative pointer-events-none"
              style={{ x: imgX, y: imgY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute bottom-0 w-[80%] h-[60%] bg-[#8FE8F6] opacity-10 filter blur-[80px] rounded-full z-0" />

              <img
                src={profileImage}
                alt="Brandon"
                className="h-full object-contain object-bottom z-10 drop-shadow-[0_0_30px_rgba(143,232,246,0.15)]"
                loading="eager"
              />

              <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-canvas to-transparent z-20" />
            </Motion.div>

            <Motion.div
              className="w-full md:w-1/3 order-3 mt-0 flex flex-col items-center md:items-end md:pr-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <span className="font-mono text-sm tracking-[0.2em] uppercase text-muted mb-2">I Am</span>
                <h2
                  className="text-[clamp(2.6rem,8vw,6rem)] font-black uppercase leading-[0.8] tracking-tighter text-transparent"
                  style={{ WebkitTextStroke: "1px var(--theme-ink)" }}
                >
                  BRANDON
                </h2>
                <h2 className="text-[clamp(2.6rem,8vw,6rem)] font-black uppercase leading-[0.8] tracking-tighter mt-1 text-primary">
                  GERALDO
                </h2>
                <h2 className="text-[clamp(2.6rem,8vw,6rem)] font-black uppercase leading-[0.8] tracking-tighter text-primary mt-1">
                  ADJI.
                </h2>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
