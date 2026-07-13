import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import GlobalBackground from "./global-background/GlobalBackground";
import Home from "./home/Home";
import ProjectDetail from "./project-detail/ProjectDetail";

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

function App() {
  const [theme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-[#F1EFE7] text-[#050505] transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white">
        <ScrollToTop />
        <GlobalBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
