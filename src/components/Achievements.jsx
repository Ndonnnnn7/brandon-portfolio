import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Achievements = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const achievements = [
    {
      id: 1,
      type: 'competition',
      title: 'Web Design Competition',
      position: '1st Place',
      rank: 1,
      organizer: 'Universitas Teknologi',
      year: '2024',
      description: 'Kompetisi tingkat nasional membuat desain UI/UX aplikasi mobile dengan tema Smart City.',
      color: 'from-yellow-400 via-yellow-500 to-amber-600',
      icon: FaTrophy,
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/50',
      participants: '500+ peserta'
    },
    {
      id: 2,
      type: 'competition',
      title: 'Hackathon Innovation',
      position: '2nd Place',
      rank: 2,
      organizer: 'Tech Festival Indonesia',
      year: '2024',
      description: 'Membangun aplikasi inovatif untuk solusi kesehatan mental dalam waktu 48 jam.',
      color: 'from-gray-300 via-gray-400 to-gray-500',
      icon: FaMedal,
      bgColor: 'bg-gray-400/10',
      borderColor: 'border-gray-400/50',
      participants: '300+ peserta'
    },
    {
      id: 3,
      type: 'certification',
      title: 'React Expert Developer',
      position: 'Certified',
      organizer: 'Dicoding Indonesia',
      year: '2023',
      description: 'Menyelesaikan kelas Expert React Front-End Developer dengan nilai sempurna.',
      color: 'from-cyan-400 via-blue-500 to-indigo-600',
      icon: FaCertificate,
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/50',
      score: '100/100'
    },
    {
      id: 4,
      type: 'certification',
      title: 'Full Stack JavaScript',
      position: 'Certified',
      organizer: 'Udemy',
      year: '2023',
      description: 'Sertifikasi lengkap pengembangan aplikasi full stack menggunakan MERN stack.',
      color: 'from-green-400 via-emerald-500 to-teal-600',
      icon: FaAward,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/50',
      score: '98/100'
    },
    {
      id: 5,
      type: 'competition',
      title: 'UI/UX Design Challenge',
      position: '3rd Place',
      rank: 3,
      organizer: 'Design Week 2024',
      year: '2024',
      description: 'Kompetisi desain interface untuk aplikasi e-commerce dengan fokus user experience.',
      color: 'from-orange-400 via-amber-500 to-yellow-600',
      icon: FaStar,
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/50',
      participants: '200+ peserta'
    },
    {
      id: 6,
      type: 'certification',
      title: 'AWS Cloud Practitioner',
      position: 'Certified',
      organizer: 'Amazon Web Services',
      year: '2023',
      description: 'Sertifikasi fundamental cloud computing dan layanan AWS.',
      color: 'from-purple-400 via-violet-500 to-purple-600',
      icon: FaCertificate,
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/50',
      score: '95/100'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getRankBadge = (rank) => {
    const badges = {
      1: { icon: '🥇', text: 'JUARA 1', color: 'from-yellow-400 to-amber-600' },
      2: { icon: '🥈', text: 'JUARA 2', color: 'from-gray-300 to-gray-500' },
      3: { icon: '🥉', text: 'JUARA 3', color: 'from-orange-400 to-yellow-600' }
    };
    return badges[rank] || null;
  };

  return (
    <div name="achievements" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-12 text-center"
        >
          <motion.p className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent inline-block">
            Achievements & Certifications
          </motion.p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Koleksi pencapaian kompetisi dan sertifikasi profesional yang telah diraih
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            const rankBadge = getRankBadge(item.rank);
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative"
              >
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${item.borderColor} hover:border-opacity-100 border-opacity-50 transition-all duration-300 shadow-xl hover:shadow-2xl h-full flex flex-col`}>
                  
                  {/* Image/Header Section */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                    {/* Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></motion.div>

                    {/* Pattern Background */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="h-full w-full" style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    {/* Icon Display */}
                    <div className="relative h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={hoveredId === item.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-6 rounded-full ${item.bgColor} backdrop-blur-sm border ${item.borderColor} mb-3`}
                      >
                        <Icon className={`text-5xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                      </motion.div>
                      
                      {/* Year Badge */}
                      <div className="px-4 py-1 bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
                        <span className="text-sm font-bold text-gray-300">{item.year}</span>
                      </div>
                    </div>

                    {/* Rank Badge for Competition */}
                    {rankBadge && (
                      <div className="absolute top-3 right-3">
                        <motion.div
                          animate={hoveredId === item.id ? { scale: 1.1 } : { scale: 1 }}
                          className={`px-3 py-1 bg-gradient-to-r ${rankBadge.color} rounded-full shadow-lg flex items-center gap-2`}
                        >
                          <span className="text-lg">{rankBadge.icon}</span>
                          <span className="text-xs font-bold text-white">{rankBadge.text}</span>
                        </motion.div>
                      </div>
                    )}

                    {/* Certified Badge */}
                    {item.type === 'certification' && (
                      <div className="absolute top-3 right-3">
                        <div className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}>
                          <span className="text-xs font-bold text-white">✓ CERTIFIED</span>
                        </div>
                      </div>
                    )}

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                      animate={hoveredId === item.id ? { x: ['-100%', '100%'] } : { x: '-100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    ></motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                      {item.title}
                    </h3>

                    {/* Organizer */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      <p className="text-gray-400 text-sm font-medium">{item.organizer}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 pt-4 border-t border-gray-700/50">
                      {item.participants && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Peserta</span>
                          <span className="text-gray-300 font-bold">{item.participants}</span>
                        </div>
                      )}
                      {item.score && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Skor</span>
                          <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.score}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Pencapaian', value: '6+', icon: '🏆' },
            { label: 'Kompetisi', value: '3', icon: '🥇' },
            { label: 'Sertifikasi', value: '3', icon: '📜' },
            { label: 'Tahun Aktif', value: '2023-2024', icon: '📅' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;