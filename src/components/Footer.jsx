import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  // Logic untuk Jam Lokal (Malang/WIB)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-dark border-t border-white/10 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Flex/Grid Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-8">
          
          {/* Left Side: Brand & Status */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Brandon Geraldo</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>Based in Malang, Indonesia</p>
              <p suppressHydrationWarning>
                Local time: {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Jakarta' })}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-medium text-green-400">Open to new opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Tech */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Brandon Geraldo. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
             <p>Designed in Figma, coded in <span className="text-gray-300">VS Code</span>.</p>
             <p>Built with React & Tailwind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;