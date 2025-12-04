import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // DATA: Disederhanakan (Hanya Judul + Lokasi)
  const competitions = [
    {
      id: 1,
      title: "1st Place Web Design",
      location: "Universitas Brawijaya", // Ganti dengan lokasi asli
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
      badge: "WINNER",
    },
    {
      id: 2,
      title: "2nd Place Hackathon",
      location: "Institut Teknologi Sepuluh Nopember",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      badge: "RUNNER UP",
    },
    {
      id: 3,
      title: "Top 10 Finalist UI/UX",
      location: "Gemastik - Kemendikbud",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
      badge: "FINALIST",
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      id: "AWS-10293",
    },
    {
      name: "React Expert Developer",
      issuer: "Dicoding Indonesia",
      date: "2023",
      id: "DCD-react-x",
    },
    {
      name: "Google UX Design",
      issuer: "Coursera",
      date: "2022",
      id: "G-UX-22",
    },
  ];

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative w-full min-h-screen py-24 text-white overflow-hidden"
    >
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent"></span>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Milestones
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Moments of <span className="text-gray-500 italic">Glory.</span>
          </h2>
        </div>

        {/* --- MAIN SECTION: COMPETITION HIGHLIGHTS (Polaroid Style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {competitions.map((item) => (
            <div key={item.id} className="group relative">
              {/* Polaroid Card Container */}
              {/* bg-white memastikan teks di dalamnya (yg hitam) selalu kontras */}
              <div className="relative bg-white p-4 pb-6 rounded-sm shadow-xl transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                {/* Tape Effect (Selotip Kuning) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/90 transform -rotate-2 backdrop-blur-sm z-20 shadow-sm"></div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Badge Overlay (Pojok Kanan Atas Foto) */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {item.badge}
                  </div>
                </div>

                {/* Text Content - SIMPLE & CLEAR */}
                {/* Menggunakan text-center agar rapi seperti caption foto */}
                <div className="text-center px-2">
                  <h3 className="font-bold text-xl text-gray-900 font-serif leading-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-8 bg-gray-300"></span>
                    <p className="text-xs text-gray-500 font-sans uppercase tracking-wide font-medium">
                      {item.location}
                    </p>
                    <span className="h-px w-8 bg-gray-300"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECONDARY SECTION: CERTIFICATIONS (Ticket Style) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold mb-4">
              Licenses & <br />
              Certifications
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Continuous learning is key. Here are some professional
              certifications I've earned to validate my technical skills.
            </p>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          {/* Right List */}
          <div className="lg:col-span-8 grid gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between overflow-hidden"
              >
                {/* Decorative ID Number Watermark */}
                <span className="absolute -right-4 -bottom-4 text-6xl font-black text-white/5 select-none pointer-events-none font-mono">
                  {cert.date}
                </span>

                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {cert.issuer} • ID: {cert.id}
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-white/50"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;