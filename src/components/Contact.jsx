import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, ArrowUpRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brandon.geraldo28@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-dark py-24 text-white overflow-hidden flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           
           {/* LEFT COLUMN: Hero Text & Status */}
           <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-500 font-mono text-sm tracking-widest uppercase">Available for work</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                  Let's start a <br/>
                  <span className="text-gray-500">project together.</span>
                </h2>

                <p className="text-xl text-gray-400 leading-relaxed max-w-lg mb-12">
                   Have an idea? I can help you build it. I'm currently available for freelance projects and open to full-time opportunities.
                </p>

                {/* Main Contact Action (Email) */}
                <div className="group relative w-fit">
                   <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-70 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                   <button 
                     onClick={handleCopyEmail}
                     className="relative flex items-center gap-4 px-8 py-4 bg-black rounded-xl leading-none"
                   >
                      <Mail className="w-6 h-6 text-white" />
                      <span className="text-xl font-medium text-white">brandon.geraldo28@gmail.com</span>
                      <div className="pl-4 border-l border-white/20 ml-2">
                         {copied ? (
                           <span className="text-green-400 text-sm font-bold">COPIED!</span>
                         ) : (
                           <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                         )}
                      </div>
                   </button>
                </div>
              </motion.div>
           </div>

           {/* RIGHT COLUMN: Contact Details & Socials */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col gap-10"
           >
              {/* Info List */}
              <div className="space-y-8">
                 {/* Phone */}
                 <div className="group flex items-start gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <h4 className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wider">Phone / WhatsApp</h4>
                       <a href="https://wa.me/6285855462022" target="_blank" rel="noreferrer" className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2">
                          +62 858 5546 2022 <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </a>
                    </div>
                 </div>

                 {/* Location */}
                 <div className="group flex items-start gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                       <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <h4 className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wider">Location</h4>
                       <p className="text-2xl font-bold text-white">Malang, Indonesia</p>
                       <p className="text-gray-400 text-sm mt-1">Available for Remote Work</p>
                    </div>
                 </div>
              </div>

              {/* Social Dock */}
              <div>
                 <h4 className="text-white text-lg font-medium mb-6">Connect with me</h4>
                 <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/yourusername", color: "hover:bg-gray-800" },
                      { icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "hover:bg-[#0077b5]" },
                      { icon: Instagram, href: "https://instagram.com/yourusername", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
                      { icon: Twitter, href: "https://twitter.com/yourusername", color: "hover:bg-[#1DA1F2]" },
                    ].map((social, i) => (
                       <a 
                         key={i}
                         href={social.href}
                         target="_blank" 
                         rel="noreferrer"
                         className={`w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${social.color}`}
                       >
                          <social.icon className="w-6 h-6" />
                       </a>
                    ))}
                 </div>
              </div>

           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;