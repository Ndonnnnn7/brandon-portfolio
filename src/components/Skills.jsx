import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaAndroid,
} from "react-icons/fa";
import {
  SiCanva,
  SiTypescript,
  SiMaze,
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 flex items-center overflow-hidden"
    >
      {/* Container Utama */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent"></span>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              TechStack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            The tools I use to <br />
            <span className="text-gray-500">craft experiences.</span>
          </h2>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        {/* Grid 6 Kolom untuk fleksibilitas layout asimetris */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* 1. HERO TECH (Figma) - Besar (2x2) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-500">
              <FaFigma className="w-40 h-40 text-cyan-400" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-4">
                <FaFigma className="w-8 h-8 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Figma</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  My main tool for crafting intuitive interfaces. I specialize
                  in component systems, auto-layout, and interactive prototyping
                  in Figma
                </p>
              </div>
            </div>
          </div>

          {/* 2. STYLE (React) - Persegi Panjang (2x1) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 relative group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-sky-400/50 transition-colors duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400">
                <SiMaze className="w-6 h-6" />
              </div>
              <ArrowIcon />
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-xl font-bold text-white">Maze</h3>
              <p className="text-gray-400 text-xs mt-1">
                For testing my prototypes with real users.
              </p>
            </div>
          </div>

          {/* 3. LANGUAGE (HTML) - Kotak (1x1) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 relative group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-yellow-400/50 transition-colors duration-500 flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <FaHtml5 className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white">HTML</h3>
            <span className="text-xs text-gray-500 mt-1">Modern Markup</span>
          </div>

          {/* 4. DESIGN (CSS) - Kotak (1x1) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 relative group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-pink-400/50 transition-colors duration-500 flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <FaCss3Alt className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white">CSS</h3>
            <span className="text-xs text-gray-500 mt-1">Utility-First Styling</span>
          </div>

          {/* 5.Canva - Persegi Panjang (2x1) */}
          <div className="col-span-2 lg:col-span-2 relative group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/50 transition-colors duration-500 overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <SiCanva className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                <SiCanva className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Canva</h3>
                <p className="text-gray-400 text-xs">
                  Creativity Without Any Limits
                </p>
              </div>
            </div>
          </div>

          {/* 6. ESSENTIALS (Grid Kecil) - Span 2 */}
          <div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Git */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <FaGitAlt className="text-orange-500 w-6 h-6" />
              <span className="text-sm font-medium text-gray-300">
                Git Control
              </span>
            </div>
            {/* React */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <FaReact className="text-purple-500 w-6 h-6" />
              <span className="text-sm font-medium text-gray-300">
                React.js
              </span>
            </div>
            {/* Js */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <FaJs className="text-lime-200 w-6 h-6" />
              <span className="text-sm font-medium text-gray-300">
                JavaScript
              </span>
            </div>
            {/* TypeScript */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <FaAndroid className="text-blue-400 w-6 h-6" />
              <span className="text-sm font-medium text-gray-300">
                Android Dev
              </span>
            </div>
          </div>
        </div>

        {/* --- Marquee Text for Soft Skills / Others --- */}
        <div className="mt-20 relative w-full overflow-hidden py-4 border-y border-white/5 bg-white/[0.02]">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#121321] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#121321] to-transparent z-10"></div>

          <div className="flex whitespace-nowrap animate-marquee">
            {[
              "Responsive Design",
              "Accessibility",
              "SEO Optimization",
              "Performance Tuning",
              "Problem Solving",
              "Clean Architecture",
              "Responsive Design",
              "Accessibility",
              "SEO Optimization",
            ].map((item, index) => (
              <div key={index} className="flex items-center mx-8">
                <Sparkles className="w-4 h-4 text-secondary mr-4" />
                <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Helper component for the little arrow
const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-500 group-hover:text-white transition-colors"
  >
    <path
      d="M1 11L11 1M11 1H3M11 1V9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Skills;
