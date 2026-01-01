import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import ProjectDetail from "./components/ProjectDetail"; // Import halaman detail baru

// --- HELPER: Scroll To Top ---
// Ini penting agar saat klik detail project, halaman mulai dari atas, bukan dari posisi scroll sebelumnya
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- LAYOUT HALAMAN UTAMA (Home) ---
// Kita bungkus semua section lama menjadi satu komponen "Home"
const Home = () => {
  return (
    <>
      <Navbar /> {/* Navbar hanya muncul di Home agar tidak mengganggu tampilan detail project yang immersif */}
      <main className="flex flex-col gap-0 relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-x-hidden bg-[#0a0a0a]">
        
        {/* Helper Scroll ke Atas */}
        <ScrollToTop />

        {/* Global Background (Tetap ada di semua halaman) */}
        <GlobalBackground />

        {/* --- ROUTING SYSTEM --- */}
        <Routes>
          {/* Rute 1: Halaman Utama Portofolio */}
          <Route path="/" element={<Home />} />

          {/* Rute 2: Halaman Detail Project (Dynamic ID) */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;