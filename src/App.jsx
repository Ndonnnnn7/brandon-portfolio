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
import ProjectDetail from "./components/ProjectDetail";

// --- HELPER: Scroll To Top ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memberikan sedikit delay 0ms agar DOM selesai ter-render sebelum scroll
    // Ini mencegah error blank screen saat pergantian rute di Vercel
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
};

// --- LAYOUT HALAMAN UTAMA (Home) ---
const Home = () => {
  return (
    <>
      <Navbar /> 
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

// Wrapper untuk memastikan Router Context berjalan lancar
const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-x-hidden bg-[#0a0a0a]">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;