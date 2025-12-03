import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="relative">
      <BackgroundAnimation />
      <Navbar />
      
      {/* PENTING: Tambahkan id="..." agar link navbar bisa mendeteksi tujuannya */}
      
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
    </div>
  );
}

export default App;