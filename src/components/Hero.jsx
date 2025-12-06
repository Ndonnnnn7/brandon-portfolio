import React from "react";
import { FaFigma, FaReact, FaAndroid } from "react-icons/fa";
import { Camera, ArrowRight } from "lucide-react";
import { SiCanva } from "react-icons/si";
import { motion } from "framer-motion"; // Pastikan sudah install: npm install framer-motion

const Hero = () => {
  const profileImage = "img/Profile Photo1.jpg";

  // Konfigurasi Animasi "Natural"
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom Bezier untuk gerakan yang elegan (bukan default)
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay antar elemen (membuat efek mengalir)
        delayChildren: 0.2,
      },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4, // Muncul sedikit setelah teks
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center pt-20 pb-12">
      {/* Background Blobs (No Animation change needed here, keep them subtle) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT CONTENT (TEXT) --- */}
          <motion.div
            className="flex flex-col justify-center flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge Status */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit mb-8 mx-auto lg:mx-0 backdrop-blur-md shadow-lg shadow-primary/5 group hover:border-primary/30 transition-all duration-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-sm text-gray-300 font-medium tracking-wide">
                Available for freelance
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Building Digital <br className="hidden lg:block" />
              <span className="relative whitespace-nowrap">
                <span className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl rounded-full"></span>
                <span className="relative bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
                  Experiences
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              I'm a{" "}
              <span className="text-white font-semibold">
                Front End Developer
              </span>{" "}
              & <span className="text-white font-semibold">UI/UX Designer</span>{" "}
              creating modern, responsive, and performance-driven web and
              applications.
            </motion.p>

            {/* Tech Stack Mini Badge */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mr-2">
                Tech Stack :
              </p>
              {[
                { icon: FaFigma, color: "text-pink-400", name: "Figma" },
                { icon: SiCanva, color: "text-blue-500", name: "Canva" },
                { icon: FaReact, color: "text-cyan-400", name: "React" },
                { icon: FaAndroid, color: "text-yellow-400", name: "Android" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-default"
                >
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-[0_0_20px_-5px_#6d5dfc] hover:shadow-[0_0_25px_-5px_#f42c7c] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT (IMAGE) --- */}
          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-lg relative mt-12 lg:mt-0 group"
            variants={imageReveal}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Backdrop Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-xy"></div>

            {/* Decorative Floating Elements - Add subtle float animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-dark border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-2xl z-20 animate-bounce-slow"
            >
              <FaFigma className="w-10 h-10 text-cyan-400" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 px-6 py-3 bg-dark/90 border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl z-20 animate-bounce-slow delay-700 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white font-mono text-sm">Open to Work</span>
            </motion.div>

            {/* Image Container */}
            <div className="relative rounded-[2rem] border border-white/10 bg-dark/50 backdrop-blur-sm overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl">
              {profileImage ? (
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay Gradient halus di bawah gambar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>
                </div>
              ) : (
                <div className="aspect-[4/5] flex flex-col items-center justify-center bg-white/5">
                  <Camera className="w-16 h-16 text-white/20 mb-4" />
                  <p className="text-gray-500 text-sm">No Image</p>
                </div>
              )}
            </div>

            {/* Background Outline Decoration */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] transform -rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 6s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
