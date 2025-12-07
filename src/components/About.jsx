import React from "react";
import {
  Terminal,
  Globe,
  PenTool,
  Code2,
  Layers,
  MousePointer2,
  GraduationCap,
  Calendar,
  FileJson,
  Palette,
  Atom,
} from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  // Variabel animasi agar kode lebih bersih
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 overflow-hidden text-white flex flex-col justify-center"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* --- SECTION HEADER --- */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Muncul saat scroll sampai
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent"></span>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            More than just code.
            <br />
            <span className="text-gray-500">I design digital solutions.</span>
          </h2>
        </motion.div>

        {/* --- BENTO GRID LAYOUT --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
        >
          {/* CARD 1 */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/[0.07] transition-colors duration-500 group flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12 transform">
              <Globe className="w-32 h-32 text-primary" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Hi, I'm Brandon.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I’m a product designer from Indonesia who loves turning ideas
                into
                <span className="text-white font-medium"> simple</span>
                {""},<span className="text-white font-medium"> elegant</span>
                {""}, <span className="text-white font-medium">fun to use</span>{" "}
                websites and apps.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
              I work with design and code to make digital experiences feel clear and easy.
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                Front End
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                UI/UX
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                Creative
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-1 bg-gradient-to-br from-primary/20 to-secondary/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              2+
            </h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
              Years Experience
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 hover:border-accent/30"
          >
            <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
              10+
            </h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
              Projects Done
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-2 bg-dark/50 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono">
                portfolio.jsx
              </span>
            </div>
            <div className="font-mono text-sm text-gray-400 overflow-hidden relative z-10">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">philosophy</span> ={" "}
                <span className="text-blue-400">{"{"}</span>
              </p>
              <p className="pl-4">
                quality: <span className="text-green-400">"uncompromised"</span>
                ,
              </p>
              <p className="pl-4">
                efficiency: <span className="text-orange-400">true</span>,
              </p>
              <p className="pl-4">
                userFirst: <span className="text-orange-400">true</span>,
              </p>
              <p>
                <span className="text-blue-400">{"}"}</span>;
              </p>
            </div>
            <div className="absolute right-0 bottom-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-24 h-24 text-white" />
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            variants={fadeIn}
            className="group relative h-full overflow-hidden rounded-3xl bg-dark border border-white/5 p-8 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            {/* Background Glow Halus */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-[50px] transition-all duration-500 group-hover:bg-emerald-500/20" />

            {/* Header: Icon & Badge */}
            <div className="mb-6 flex items-start justify-between relative z-10">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-emerald-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <PenTool className="w-6 h-6 fill-current" />
              </div>
              <span className="text-xs font-mono text-emerald-500/50 bg-emerald-500/5 px-2 py-1 rounded-full border border-emerald-500/10">
                User-Centric
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-emerald-200 transition-colors">
                Design
              </h4>
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                From insight to impact
              </p>

              {/* List Process dibuat horizontal (Pill Shape) agar hemat tempat vertikal */}
              <div className="flex flex-wrap gap-2">
                {["Brainstorm", "Sketch", "Wireframe", "Hi-Fi", "Testing"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* CARD 6 */}
          <motion.div
            variants={fadeIn}
            className="group relative h-full overflow-hidden rounded-3xl bg-dark border border-white/5 p-8 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
          >
            {/* Gradient Blob Background (Blue for Tech) */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-[50px] transition-all duration-500 group-hover:bg-blue-500/20" />

            {/* Header: Icon & Category */}
            <div className="mb-6 flex items-start justify-between relative z-10">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-blue-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-6 h-6 fill-current" />
              </div>

              <span className="text-xs font-mono text-blue-400/80 bg-blue-500/5 px-2 py-1 rounded-full border border-blue-500/10">
                Dev Stack
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                Frontend
              </h4>

              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                From concept to interface
              </p>

              {/* List Process dibuat horizontal (Pill Shape) agar hemat tempat vertikal */}
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5 hover:text-blue-400 hover:border-blue-500/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* CARD 7 */}
          <motion.div
            variants={fadeIn}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col relative group overflow-hidden hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-gray-300">
                  Design System.fig
                </span>
              </div>
              <span className="text-xs text-gray-500 font-mono bg-white/10 px-2 py-1 rounded-md">
                100%
              </span>
            </div>
            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-dark/50 shadow-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-dark/50 shadow-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-dark/50 shadow-sm"></div>
                </div>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Color Styles
                </span>
              </div>
              <div className="space-y-1 border-l-2 border-white/10 pl-4">
                <h4 className="text-xl font-bold text-white leading-none">
                  Aa Heading XL
                </h4>
                <p className="text-sm text-gray-400">
                  Body regular used for main content components.
                </p>
              </div>
              <div className="relative mt-2 p-3 bg-primary/10 border border-primary/30 rounded-xl w-fit flex items-center gap-3 group/btn">
                <span className="text-primary font-medium text-sm">
                  Primary Button
                </span>
                <div className="absolute -bottom-5 -right-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-pulse hidden md:block">
                  <MousePointer2 className="w-6 h-6 text-white fill-black/50 transform -rotate-12" />
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="60"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect x="50" y="25" width="30" height="4" fill="currentColor" />
                <rect x="50" y="35" width="20" height="4" fill="currentColor" />
                <rect
                  x="10"
                  y="80"
                  width="80"
                  height="10"
                  rx="2"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* --- EDUCATION JOURNEY SECTION --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-3 mb-10"
          >
            <div className="p-2 bg-accent/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-white">Education Journey</h3>
          </motion.div>

          <div className="relative">
            {/* Horizontal Connector Line (Desktop) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 -translate-y-1/2 hidden md:block origin-left"
            ></motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
              {/* 1. SMA */}
              <motion.div variants={fadeIn} className="relative group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-mono text-gray-400">
                      <Calendar className="w-4 h-4" /> 2020 - 2023
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        Catholic High School St. Albertus
                      </h4>
                      <p className="text-accent text-sm font-medium">Science</p>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Completed my high school education in the Science track,
                      which strengthened my analytical thinking and
                      problem-solving skills.
                    </p>
                  </div>
                </div>
                {/* Dot on Line */}
                <div className="absolute top-1/2 -right-10 w-4 h-4 bg-dark border-2 border-white/20 rounded-full -translate-y-1/2 hidden md:block z-20 group-hover:border-accent group-hover:scale-125 transition-all"></div>
              </motion.div>

              {/* 2. Universitas (Current) */}
              <motion.div variants={fadeIn} className="relative group">
                {/* Dot on Line */}
                <div className="absolute top-1/2 -left-10 w-4 h-4 bg-accent border-4 border-dark rounded-full -translate-y-1/2 hidden md:block z-20 shadow-[0_0_10px_rgba(244,44,124,0.5)]"></div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 transition-all hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-mono text-accent">
                      <Calendar className="w-4 h-4" /> 2023 - Present
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        Brawijaya University
                      </h4>
                      <p className="text-accent text-sm font-medium">
                        Informatics Engineering
                      </p>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      I am focused on Front-End development, and creating
                      intuitive UI/UX experiences.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
