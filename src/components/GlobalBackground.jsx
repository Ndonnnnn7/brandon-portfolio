const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-dark">
      {/* 1. Grain Texture (Opsional, untuk kesan premium) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 2. Grid Pattern (Nyambung terus dari atas sampai bawah) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#885cf70a_1px,transparent_1px),linear-gradient(to_bottom,#885cf70a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 3. Global Glow Orbs (Opsional) */}
      {/* Bola cahaya ini akan diam saat discroll (fixed), atau bisa Anda hapus jika ingin bola ada di per-section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-50"></div>
    </div>
  );
};

export default GlobalBackground;