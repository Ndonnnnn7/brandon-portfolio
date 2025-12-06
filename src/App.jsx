import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

function App() {
  return (
    // 2. Tambahkan 'overflow-x-hidden' agar marquee miring tidak membuat scroll ke samping
    <div className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* Global Background (Fixed Position) */}
      <GlobalBackground />

      <Navbar />
      
      {/* Main Content Wrapper */}
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