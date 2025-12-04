import React from "react";
import { Terminal, Coffee, Globe, Zap, Code2, Palette, Layers, MousePointer2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      // UBAH: Menghapus 'bg-dark' agar transparan
      className="relative w-full min-h-screen py-24 overflow-hidden text-white flex items-center"
    >
      {/* Background Elements Local (Optional) */}
      {/* Kita hapus noise dan grid di sini karena sudah ada di GlobalBackground */}
      {/* Hanya sisakan ambient glow jika ingin penekanan di section ini */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header (Minimalist) */}
        <div className="mb-16 max-w-2xl">
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
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* CARD 1: Main Intro (Large - Span 2 col, 2 row) */}
          <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/[0.07] transition-colors duration-500 group flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12 transform">
              <Globe className="w-32 h-32 text-primary" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Hi, I'm Brandon.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A software developer based in Indonesia with a passion for
                building <span className="text-white font-medium">elegant</span>{" "}
                and <span className="text-white font-medium">functional</span>{" "}
                web applications.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I bridge the gap between design and engineering. My goal is to
                create software that not only works perfectly under the hood but
                feels intuitive and natural to the user.
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
          </div>

          {/* CARD 2: Stats (Experience) */}
          <div className="md:col-span-1 bg-gradient-to-br from-primary/20 to-secondary/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              3+
            </h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
              Years Experience
            </p>
          </div>

          {/* CARD 3: Stats (Projects) */}
          <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 hover:border-accent/30">
            <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
              50+
            </h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
              Projects Done
            </p>
          </div>

          {/* CARD 4: Visual Code (Clean Code) - Span 2 Cols */}
          <div className="md:col-span-2 bg-dark/50 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col relative group overflow-hidden">
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

            {/* Mock Code Block */}
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
          </div>

          {/* CARD 5: Focus/Values */}
          <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:bg-white/[0.07] transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Performance</h4>
              <p className="text-sm text-gray-400">
                Optimizing every millisecond. Fast load times and smooth
                interactions.
              </p>
            </div>
          </div>

          {/* CARD 6: Coffee/Fun Fact */}
          <div className="md:col-span-1 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 bg-orange-500/20 w-24 h-24 rounded-full blur-xl group-hover:bg-orange-500/30 transition-colors"></div>

            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 text-orange-400 z-10">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="z-10">
              <h4 className="text-xl font-bold mb-2 text-orange-100">
                Fueled by Coffee
              </h4>
              <p className="text-sm text-orange-200/70">
                Converting caffeine into efficient code since 2021.
              </p>
            </div>
          </div>

          {/* CARD 7: UI/UX Visual (Design System Snippet) - Span 2 Cols */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col relative group overflow-hidden hover:bg-white/[0.07] transition-colors">
            {/* Header: Looks like a design layer name instead of code file */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-gray-300">
                  Design System.fig
                </span>
              </div>
              {/* Fake zoom percentage often seen in design tools */}
              <span className="text-xs text-gray-500 font-mono bg-white/10 px-2 py-1 rounded-md">
                100%
              </span>
            </div>
            {/* MOCKUP VISUAL DESIGN ELEMENTS */}
            <div className="relative z-10 flex flex-col gap-5">
              {/* 1. Color Palette Row */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full bg-primary border-2 border-dark/50 shadow-sm"
                    title="Primary"
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-secondary border-2 border-dark/50 shadow-sm"
                    title="Secondary"
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-accent border-2 border-dark/50 shadow-sm"
                    title="Accent"
                  ></div>
                </div>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Color Styles
                </span>
              </div>

              {/* 2. Typography Scale Snippet */}
              <div className="space-y-1 border-l-2 border-white/10 pl-4">
                <h4 className="text-xl font-bold text-white leading-none">
                  Aa Heading XL
                </h4>
                <p className="text-sm text-gray-400">
                  Body regular used for main content components.
                </p>
              </div>

              {/* 3. Interactive Component Mockup (Button state) */}
              <div className="relative mt-2 p-3 bg-primary/10 border border-primary/30 rounded-xl w-fit flex items-center gap-3 group/btn">
                <span className="text-primary font-medium text-sm">
                  Primary Button
                </span>

                {/* FAKE CURSOR hovering over the element */}
                <div className="absolute -bottom-5 -right-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-pulse hidden md:block">
                  <MousePointer2 className="w-6 h-6 text-white fill-black/50 transform -rotate-12" />
                </div>
              </div>
            </div>

            {/* Background Abstract Wireframe Graphic instead of Icon */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;