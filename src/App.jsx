import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import GlobalBackground from "./global-background/GlobalBackground";
import Home from "./home/Home";
import ProjectDetail from "./project-detail/ProjectDetail";
import { ThemeProvider } from "./theme/ThemeProvider";

// --- HELPER: Scroll To Top ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
        return;
      }

      window.scrollTo(0, 0);
    }, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
          <ScrollToTop />
          <GlobalBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
