import React from "react";
import { FaFigma, FaReact } from 'react-icons/fa';
import { Camera, ArrowRight, Code, Sparkles, Terminal } from "lucide-react";

const Hero = () => {
  // Ganti path ini dengan path foto Anda
  // Contoh: "/img/profile.jpg" atau "/assets/my-photo.png"
  const profileImage = "img/Udayana.jpg"; // Ubah null menjadi "/path/to/your/image.jpg"

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen px-6 md:px-8 lg:flex-row gap-12 relative z-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center flex-1 pt-20 lg:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            I'm a UI/UX & Front End
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-4">
            Welcome to my portfolio. I focus on building web and applications
            that are{" "}
            <span className="text-cyan-400 font-medium">responsive</span>,{" "}
            <span className="text-blue-400 font-medium">fast</span>, and deliver
            an <span className="text-purple-400 font-medium">exceptional</span>{" "}
            user experience.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3 mb-8">
            {/* Figma Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <FaFigma className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Figma</span>
            </div>

            {/* React Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <FaReact className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">React</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3"
            >
              <span className="relative z-10">Lihat Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative w-100 h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
              {profileImage ? (
                <div className="relative group">
                  <img
                    src={profileImage}
                    alt="Profile"
                     className="w-full h-full object-cover object-top -translate-y-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                    <Camera className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Foto Profil
                  </h3>
                  <p className="text-gray-400 text-sm text-center px-8 max-w-xs">
                    Tambahkan foto Anda dengan mengubah variable{" "}
                    <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded">
                      profileImage
                    </code>
                  </p>
                  <p className="text-gray-500 text-xs mt-4 px-8 text-center">
                    Contoh:{" "}
                    <code className="text-blue-400">"/img/profile.jpg"</code>
                  </p>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl opacity-20 blur-xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default Hero;
