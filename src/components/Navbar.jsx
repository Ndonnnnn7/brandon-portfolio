import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

// Import all components
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import BackgroundAnimation from './BackgroundAnimation';
import Footer from './Footer';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'achievements', label: 'Achievements' },
    { id: 6, link: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Auto detect active section based on scroll position
      const sections = links.map(({ link }) => document.getElementById(link));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(links[index].link);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setNav(false);
    setActiveSection(link);
  };

  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <nav className={`flex justify-between items-center w-full px-6 lg:px-8 text-white fixed z-50 top-0 transition-all duration-300 ${
        scrolled 
          ? 'h-16 bg-black/80 backdrop-blur-xl shadow-2xl border-b border-gray-800/50' 
          : 'h-20 bg-black/60 backdrop-blur-md'
      }`}>
        {/* Logo */}
        <div className="relative group">
          <h1 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight cursor-pointer transition-all duration-300 ${
              scrolled ? 'text-3xl' : 'text-4xl'
            }`}
          >
            My Portfolio
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <a
                href={`#${link}`}
                onClick={() => setActiveSection(link)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  activeSection === link
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{label}</span>
                <div className={`absolute inset-0 rounded-lg to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeSection === link ? 'opacity-100' : ''
                }`}></div>
                {activeSection === link && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNav(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Menu
          </h2>
          <button
            onClick={() => setNav(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col p-4 space-y-2 mt-4">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <a
                href={`#${link}`}
                onClick={() => handleNavClick(link)}
                className={`flex items-center justify-between px-6 py-4 rounded-xl font-medium transition-all duration-200 group ${
                  activeSection === link
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{label}</span>
                <IoChevronForward 
                  size={20} 
                  className={`transform transition-transform duration-200 ${
                    activeSection === link ? 'translate-x-1' : 'group-hover:translate-x-1'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © 2024 My Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;