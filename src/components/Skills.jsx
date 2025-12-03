import React, { useState } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma } from "react-icons/si";
import { Code2, Zap, Layers, Layout, LucideCircleDot } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "uiux", label: "UI/UX", icon: Layout },
  ];

  const techs = [
    {
      id: 1,
      icon: <FaHtml5 size={50} />,
      title: "HTML5",
      category: "frontend",
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      hoverBorder: "hover:border-orange-500/60",
      level: 95,
    },
    {
      id: 2,
      icon: <FaCss3Alt size={50} />,
      title: "CSS3",
      category: "frontend",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-500/60",
      level: 90,
    },
    {
      id: 3,
      icon: <FaJs size={50} />,
      title: "JavaScript",
      category: "frontend",
      color: "from-yellow-400 to-yellow-500",
      textColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-500/60",
      level: 88,
    },
    {
      id: 4,
      icon: <FaReact size={50} />,
      title: "React",
      category: "frontend",
      color: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/60",
      level: 92,
    },
    {
      id: 5,
      icon: <SiTailwindcss size={50} />,
      title: "Tailwind CSS",
      category: "frontend",
      color: "from-sky-400 to-cyan-500",
      textColor: "text-sky-400",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/30",
      hoverBorder: "hover:border-sky-500/60",
      level: 90,
    },
    {
      id: 6,
      icon: <LucideCircleDot size={50} />,
      title: "Maze",
      category: "uiux",
      color: "from-yellow-400 to-yellow-500",
      textColor: "text-yellow-300",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-500/60",
      level: 70,
    },
    {
      id: 7,
      icon: <SiFigma size={50} />,
      title: "Figma",
      category: "uiux",
      color: "from-pink-400 to-purple-500",
      textColor: "text-pink-300",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-500/60",
      level: 90,
    },
    {
      id: 8,
      icon: <FaGithub size={50} />,
      title: "GitHub",
      category: "frontend",
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      hoverBorder: "hover:border-gray-500/60",
      level: 87,
    },
  ];

  const filteredTechs =
    activeCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category === activeCategory);

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
              My Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Teknologi dan tools yang saya gunakan untuk mengembangkan aplikasi
            web modern, scalable, dan user-friendly
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                      : "bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTechs.map((tech) => (
            <div
              key={tech.id}
              className={`
                group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm 
                rounded-2xl border ${tech.borderColor} ${tech.hoverBorder}
                transition-all duration-500 hover:scale-105 cursor-pointer
                overflow-hidden
              `}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center">
                {/* Icon Container */}
                <div
                  className={`
                  w-24 h-24 ${tech.bgColor} rounded-2xl flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-500
                  relative overflow-hidden
                `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className={tech.textColor}>{tech.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.title}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {tech.level}% Proficiency
                </span>
              </div>

              {/* Corner Decoration */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.color} opacity-5 rounded-bl-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-400">
                Saya terus mengembangkan skill dan mengikuti perkembangan
                teknologi terbaru
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{techs.length}+</p>
                <p className="text-sm text-gray-400">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .group:hover .float-animation {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
