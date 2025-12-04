import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

// Import components
import BackgroundAnimation from './BackgroundAnimation';
// ... import komponen lainnya

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
      
      // Kita bungkus logika active section ini
      // Agar tidak bentrok saat user sedang mengklik manual
      const sections = links.map(({ link }) => document.getElementById(link));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Kita cek agar tidak me-reset state jika user baru saja klik
            // (Logika sederhana: biarkan scroll listener tetap jalan untuk update natural)
             setActiveSection(links[index].link);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Hapus dependency links agar tidak re-render berlebih

  const handleNavClick = (e, link) => {
    e.preventDefault(); // 1. Mencegah lompatan kasar default browser
    setNav(false); 
    setActiveSection(link); // 2. Set state LANGSUNG agar animasi pill instan

    // 3. Manual Smooth Scroll dengan Offset
    const element = document.getElementById(link);
    if (element) {
      const offset = 100; // Sesuaikan offset agar tidak tertutup navbar floating
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar Container */}
      <nav className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 flex justify-between items-center px-6 lg:px-8 text-white
        ${scrolled 
          ? 'top-4 w-[90%] md:w-[85%] lg:w-[1000px] py-3 bg-dark/80 shadow-lg shadow-primary/10 border border-white/10' 
          : 'top-6 w-[95%] md:w-[90%] lg:w-[1100px] py-4 bg-dark/40 border border-white/5'
        } rounded-full backdrop-blur-md`}
      >
        
        {/* Logo */}
        <div className="relative group pl-2">
          <h1 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent tracking-tight cursor-pointer transition-all duration-300 ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}
          >
            My Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 pr-2">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <a
                href={`#${link}`}
                // Update: Menambahkan 'e' (event) ke handler
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-300 group text-sm lg:text-base cursor-pointer ${
                  activeSection === link
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{label}</span>
                
                {/* Active Dot */}
                <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 rounded-full h-1 w-20 bg-secondary shadow-[0_0_10px_#885cf7] transition-all duration-300 ease-out ${
                    activeSection === link ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`}></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNav(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-dark z-50 md:hidden transform transition-transform duration-300 ease-out shadow-2xl border-l border-white/10 ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Menu
          </h2>
          <button
            onClick={() => setNav(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-2 mt-4">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <a
                href={`#${link}`}
                // Update: Gunakan handleNavClick yang baru juga di mobile
                onClick={(e) => handleNavClick(e, link)}
                className={`flex items-center justify-between px-6 py-4 rounded-xl font-medium transition-all duration-300 group ${
                  activeSection === link
                    ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-white border border-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{label}</span>
                <IoChevronForward 
                  size={20} 
                  className={`transform transition-transform duration-300 ${
                    activeSection === link ? 'translate-x-1 text-secondary' : 'group-hover:translate-x-1'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <p className="text-center text-sm text-gray-500">
            © 2024 My Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;