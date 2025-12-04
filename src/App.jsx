import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground'; 
// Note: BackgroundAnimation tidak perlu dipakai lagi jika sudah ada GlobalBackground yang mencakup semuanya.

function App() {
  return (
    // 'min-h-screen text-white overflow-hidden' memastikan layout dasar benar
    <div className="relative min-h-screen text-white overflow-hidden">
      
      {/* 1. Global Background (Fixed Position) */}
      {/* Ini yang membuat background nyambung terus tanpa garis potong */}
      <GlobalBackground />

      {/* 2. Navbar */}
      <Navbar />
      
      {/* 3. Main Content Wrapper */}
      {/* gap-0 penting untuk menghapus celah antar section */}
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
    </div>
  );
}

export default App;