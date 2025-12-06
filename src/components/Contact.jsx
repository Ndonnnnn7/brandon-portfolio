import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, ArrowUpRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brandon.geraldo28@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-dark py-16 md:py-24 text-white overflow-hidden flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
           
           {/* LEFT COLUMN: Hero Text & Status */}
           <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Status Badge */}
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <motion.span 
                      className="text-green-500 font-mono text-xs md:text-sm tracking-widest uppercase"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Available for work
                    </motion.span>
                </motion.div>

                {/* Animated Heading (Responsive Text Size) */}
                <motion.h2 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Let's start a <br/>
                  <motion.span 
                    className="text-gray-500"
                    whileHover={{ color: "#fff", transition: { duration: 0.3 } }}
                  >
                    project together.
                  </motion.span>
                </motion.h2>

                <motion.p 
                  className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                   Have an idea? I can help you build it. I'm currently available for freelance projects and open to full-time opportunities.
                </motion.p>

                {/* Main Contact Action (Email) */}
                <motion.div 
                  className="group relative w-full sm:w-fit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                   <motion.div 
                     className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-70 blur hidden sm:block"
                     animate={{ opacity: [0.7, 1, 0.7] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   />
                   <motion.button 
                     onClick={handleCopyEmail}
                     className="relative flex items-center justify-between sm:justify-start gap-4 px-6 py-4 md:px-8 md:py-4 bg-white/10 sm:bg-black rounded-xl leading-none w-full sm:w-auto border border-white/10 sm:border-none"
                     whileHover={{ y: -2 }}
                   >
                      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                        </motion.div>
                        <span className="text-base md:text-xl font-medium text-white truncate">
                          brandon.geraldo28@gmail.com
                        </span>
                      </div>
                      
                      <div className="pl-4 border-l border-white/20 ml-2 flex-shrink-0">
                         {copied ? (
                           <motion.span 
                             className="text-green-400 text-xs md:text-sm font-bold"
                             initial={{ scale: 0 }}
                             animate={{ scale: 1 }}
                             transition={{ type: "spring", stiffness: 500, damping: 15 }}
                           >
                             COPIED!
                           </motion.span>
                         ) : (
                           <motion.div whileHover={{ y: -2 }}>
                             <Copy className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors" />
                           </motion.div>
                         )}
                      </div>
                   </motion.button>
                </motion.div>
              </motion.div>
           </div>

           {/* RIGHT COLUMN: Contact Details & Socials */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col gap-8 md:gap-10 mt-8 lg:mt-0"
           >
              {/* Info List */}
              <div className="space-y-6 md:space-y-8">
                 {/* Phone */}
                 <motion.div 
                   className="group flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:scale-[1.02]"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   whileHover={{ x: 5, transition: { duration: 0.2 } }}
                 >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                       <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                       <h4 className="text-gray-500 text-xs md:text-sm font-medium mb-1 uppercase tracking-wider">Phone / WhatsApp</h4>
                       <a href="https://wa.me/6285855462022" target="_blank" rel="noreferrer" className="text-lg md:text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                          +62 858 5546 2022 
                          <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-50 group-hover:opacity-100" />
                          </motion.div>
                       </a>
                    </div>
                 </motion.div>

                 {/* Location */}
                 <motion.div 
                   className="group flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:scale-[1.02]"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   whileHover={{ x: 5, transition: { duration: 0.2 } }}
                 >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                       <motion.div
                         animate={{ y: [0, -3, 0] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                       >
                         <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                       </motion.div>
                    </div>
                    <div>
                       <h4 className="text-gray-500 text-xs md:text-sm font-medium mb-1 uppercase tracking-wider">Location</h4>
                       <p className="text-lg md:text-2xl font-bold text-white">Malang, Indonesia</p>
                       <p className="text-gray-400 text-xs md:text-sm mt-1">Available for Remote Work</p>
                    </div>
                 </motion.div>
              </div>

              {/* Social Dock */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                 <h4 className="text-white text-base md:text-lg font-medium mb-4 md:mb-6">Connect with me</h4>
                 <div className="flex flex-wrap gap-3 md:gap-4">
                    {[
                      { icon: Github, href: "https://github.com/Ndonnnnn7", color: "hover:bg-gray-800" },
                      { icon: Linkedin, href: "https://linkedin.com/in/brandongeraldoadji", color: "hover:bg-blue-600" },
                      { icon: Instagram, href: "https://instagram.com/brandonngeraldo", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
                    ].map((social, i) => (
                       <motion.a 
                         key={i}
                         href={social.href}
                         target="_blank" 
                         rel="noreferrer"
                         className={`w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg ${social.color}`}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.6 + (i * 0.1) }}
                         whileHover={{ 
                           y: -8,
                           scale: 1.1,
                           rotate: [0, -5, 5, 0],
                           transition: { duration: 0.3 }
                         }}
                         whileTap={{ scale: 0.95 }}
                         onHoverStart={() => setHoveredSocial(i)}
                         onHoverEnd={() => setHoveredSocial(null)}
                       >
                          <motion.div
                            animate={hoveredSocial === i ? { 
                              rotate: [0, 15, -15, 0],
                              scale: [1, 1.2, 1.2, 1]
                            } : {}}
                            transition={{ duration: 0.4 }}
                          >
                            <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                          </motion.div>
                       </motion.a>
                    ))}
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;