import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Logic untuk Jam Lokal (Malang/WIB)
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Scroll detection untuk back to top button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-dark border-t border-white/10 pt-16 pb-8 text-white overflow-hidden">
      
      {/* Background Gradient Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Flex/Grid Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-8">
          
          {/* Left Side: Brand & Status */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand Name with Gradient on Hover */}
            <motion.h2 
              className="text-2xl font-bold tracking-tight"
              transition={{ duration: 0.3 }}
            >
              Brandon Geraldo
            </motion.h2>

            {/* Location & Time Info */}
            <motion.div 
              className="flex flex-col gap-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.p
                whileHover={{ x: 5, color: "#fff" }}
                transition={{ duration: 0.2 }}
              >
                Based in Malang, Indonesia
              </motion.p>
              
              {/* Animated Clock */}
              <motion.p 
                suppressHydrationWarning
                className="font-mono"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Local time: {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  hour12: true, 
                  timeZone: 'Asia/Jakarta' 
                })}
              </motion.p>
            </motion.div>

            {/* Status Badge with Enhanced Animation */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                borderColor: "rgba(34, 197, 94, 0.4)"
              }}
            >
               <motion.span 
                 className="w-2 h-2 rounded-full bg-green-500"
                 animate={{ 
                   scale: [1, 1.3, 1],
                   opacity: [1, 0.7, 1]
                 }}
                 transition={{ 
                   duration: 2, 
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               />
               <span className="text-xs font-medium text-green-400">Open to new opportunities</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Tech */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Copyright */}
          <motion.p
            whileHover={{ color: "#9ca3af" }}
          >
            © {new Date().getFullYear()} Brandon Geraldo. All rights reserved.
          </motion.p>
          
          {/* Tech Stack Info */}
          <div className="flex items-center gap-6">
             <motion.p
               whileHover={{ color: "#9ca3af" }}
             >
               Designed in <motion.span 
                 className="text-gray-300"
                 whileHover={{ 
                   color: "#fff",
                   textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
                 }}
               >
                 Figma
               </motion.span>, coded in <motion.span 
                 className="text-gray-300"
                 whileHover={{ 
                   color: "#3b82f6",
                   textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                 }}
               >
                 VS Code
               </motion.span>.
             </motion.p>
             
             <motion.p
               whileHover={{ color: "#9ca3af" }}
             >
               Built with <motion.span
                 whileHover={{ 
                   color: "#61dafb",
                   textShadow: "0 0 8px rgba(97, 218, 251, 0.5)"
                 }}
               >
                 React
               </motion.span> & <motion.span
                 whileHover={{ 
                   color: "#38bdf8",
                   textShadow: "0 0 8px rgba(56, 189, 248, 0.5)"
                 }}
               >
                 Tailwind
               </motion.span>.
             </motion.p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;