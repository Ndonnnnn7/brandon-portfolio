import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);

  const contactInfo = [
    {
      id: 1,
      icon: MdEmail,
      title: 'Email',
      value: 'brandon.geraldo28@gmail.com',
      href: 'mailto:brandon.geraldo28@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      copyable: true
    },
    {
      id: 2,
      icon: MdPhone,
      title: 'Phone',
      value: '+62 858 5546 2022',
      href: 'tel:+6285855462022',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      copyable: true
    },
    {
      id: 3,
      icon: MdLocationOn,
      title: 'Location',
      value: 'Malang, Indonesia',
      href: 'https://maps.google.com/?q=Malang,Indonesia',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      copyable: false
    }
  ];

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/yourusername', 
      label: 'GitHub',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/in/yourusername', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    { 
      icon: FaWhatsapp, 
      href: 'https://wa.me/6285855462022', 
      label: 'WhatsApp',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/10'
    },
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com/yourusername', 
      label: 'Twitter',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-500/10'
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/yourusername', 
      label: 'Instagram',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10'
    },
    { 
      icon: FaTelegram, 
      href: 'https://t.me/yourusername', 
      label: 'Telegram',
      color: 'hover:text-cyan-500',
      bgColor: 'hover:bg-cyan-500/10'
    }
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-screen-xl mx-auto p-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
            Get In Touch
          </motion.p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Hubungi saya melalui berbagai platform di bawah ini
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-500/20 mb-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
              Saya terbuka untuk proyek freelance, kolaborasi, atau sekadar ngobrol tentang teknologi dan pengembangan web. 
              Pilih cara yang paling nyaman untuk menghubungi saya!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`relative p-5 ${item.bgColor} rounded-2xl transition-all duration-300 group-hover:scale-110`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <Icon className={`text-4xl relative z-10 bg-gradient-to-r ${item.color} bg-clip-text text-transparent transition-all duration-300`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-xl text-center text-gray-200 mb-3">
                      {item.title}
                    </h4>

                    {/* Value */}
                    <p className="text-gray-400 text-center text-sm mb-4 break-all px-2">
                      {item.value}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 px-4 py-2 bg-gradient-to-r ${item.color} rounded-lg font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                      >
                        {item.id === 3 ? 'Open Map' : 'Contact'}
                      </motion.a>
                      
                      {item.copyable && (
                        <motion.button
                          onClick={() => handleCopy(item.value, item.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gray-700/50 rounded-lg font-semibold text-gray-300 text-sm hover:bg-gray-700 transition-all duration-300 relative"
                        >
                          {isCopied ? (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </motion.button>
                      )}
                    </div>

                    {/* Copied Notification */}
                    {isCopied && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect on Social Media
            </h3>
            <p className="text-gray-400 text-center mb-8 text-sm">
              Ikuti dan hubungi saya di berbagai platform social media
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {socialLinks.map((social, idx) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-xl text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 hover:border hover:border-gray-600 group`}
                    aria-label={social.label}
                  >
                    <SocialIcon className="text-3xl" />
                    <span className="text-xs font-semibold">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Response Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-green-400 mb-1">Fast Response</h4>
                  <p className="text-sm text-gray-400">Biasanya membalas dalam 24 jam di hari kerja</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-1">Available for Freelance</h4>
                  <p className="text-sm text-gray-400">Terbuka untuk proyek freelance dan kolaborasi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
              <span>🚀 Let's build something amazing together!</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;