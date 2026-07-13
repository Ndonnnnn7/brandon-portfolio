import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden bg-[#07070a]">
      {/* 1. STUDIO LIGHT: METAL/GOLD (Top Left) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen blur-[140px] animate-pulse opacity-[0.12]"
        style={{ backgroundColor: "#D6B25E", animationDuration: "8s" }}
      ></div>

      {/* 2. STUDIO LIGHT: PLUM/VIOLET (Right Center) */}
      <div
        className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full mix-blend-screen blur-[150px] animate-pulse opacity-[0.08]"
        style={{ backgroundColor: "#7C3AED", animationDuration: "12s" }}
      ></div>

      {/* 3. STUDIO LIGHT: RUST/AMBER (Bottom Right) */}
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[55%] h-[55%] rounded-full mix-blend-screen blur-[160px] animate-pulse opacity-[0.07]"
        style={{ backgroundColor: "#D45D3A", animationDuration: "10s" }}
      ></div>

      {/* 4. CENTER FILL: HAZE/TEAL (Middle) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full mix-blend-screen blur-[120px] animate-pulse opacity-[0.04]"
        style={{ backgroundColor: "#14B8A6", animationDuration: "15s" }}
      ></div>

      {/* VIGNETTE EFFECT: Memastikan transisi antar section mulus dan fokus ke tengah */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette"></div>

      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(circle at 50% 50%, transparent 20%, rgba(7, 7, 10, 0.4) 100%);
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
