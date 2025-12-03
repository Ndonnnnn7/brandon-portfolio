import React from 'react';
import { Code2, Sparkles, Rocket, Heart, Lightbulb, Coffee, Terminal, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, label: "Clean Code", color: "from-cyan-500 to-blue-500" },
    { icon: Rocket, label: "Performance", color: "from-blue-500 to-purple-500" },
    { icon: Palette, label: "UI/UX Design", color: "from-purple-500 to-pink-500" },
    { icon: Heart, label: "User First", color: "from-pink-500 to-rose-500" },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Done" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Halo! Nama saya Brandon 👋</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Saya adalah seorang <span className="text-cyan-400 font-semibold">pengembang perangkat lunak</span> yang memiliki ketertarikan mendalam pada teknologi web modern. Perjalanan saya dimulai dari rasa penasaran tentang bagaimana sebuah website bekerja, yang kemudian berkembang menjadi hasrat untuk menciptakan <span className="text-blue-400 font-semibold">solusi digital yang elegan</span>.
              </p>
            </div>

            {/* Passion Card */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">My Philosophy</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Saat ini, saya fokus mendalami ekosistem <span className="text-blue-400 font-semibold">React dan JavaScript</span>. Saya percaya bahwa kode yang baik haruslah <span className="text-purple-400 font-semibold">bersih, mudah dipelihara, dan efisien</span>. Di waktu luang, saya suka mengeksplorasi desain UI/UX untuk memastikan aplikasi yang saya buat tidak hanya berfungsi dengan baik, tetapi juga terlihat menakjubkan.
              </p>

              <div className="flex items-center gap-2 mt-6 text-gray-400">
                <Coffee className="w-5 h-5 text-purple-400" />
                <span className="text-sm italic">Fueled by coffee and curiosity</span>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-8">
            {/* Skills Grid */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Core Values</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={index}
                      className="group relative bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-300 font-medium">{skill.label}</p>
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">By the Numbers</h3>
              
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-4 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Fun Fact</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I believe the best code is the code you don't have to write. Simplicity is the ultimate sophistication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -250% 0; }
          100% { background-position: 250% 0; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;