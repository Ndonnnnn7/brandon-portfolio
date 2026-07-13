import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../project/Projects";
import Achievements from "../achievements/Achievements";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
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
      </main>
    </>
  );
};

export default Home;
