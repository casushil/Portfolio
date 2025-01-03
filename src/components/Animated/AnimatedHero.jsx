import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const AnimatedHero = () => {
  const titles = [
    "Chartered Accountant",
    "Financial Analyst",
    "BI Specialist",
    "Investment Manager"
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sushilpoudelll', color: 'hover:text-blue-600' },
    { icon: Facebook, url: 'https://www.facebook.com/sushilpoudelll', color: 'hover:text-blue-500' },
    { icon: Instagram, url: 'https://www.instagram.com/sushilpoudelll', color: 'hover:text-pink-500' },
    { icon: Youtube, url: 'https://www.youtube.com/@sushilpoudelll', color: 'hover:text-red-600' },
    { icon: Twitter, url: 'https://x.com/sushilpoudelll', color: 'hover:text-blue-400' }
  ];

  const backgroundVariants = {
    animate: {
      background: [
        'linear-gradient(45deg, #288CF0 0%, #0070C0 100%)',
        'linear-gradient(45deg, #1a6cb3 0%, #005799 100%)',
        'linear-gradient(45deg, #288CF0 0%, #0070C0 100%)'
      ],
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background animations */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#288CF0] to-[#0070C0]"
      />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [null, Math.random() * -100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          <div className="flex-1 text-white max-w-2xl">
            {/* Simple white text for name */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Hi, I'm Sushil Poudel
            </h1>

            {/* Animated titles */}
            <div className="h-16 mb-6">
              {titles.map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -20],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: titles.length * 4 - 4,
                    delay: index * 3,
                  }}
                  className="absolute text-3xl text-cyan-300 font-medium"
                >
                  {title}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-8 leading-relaxed text-white/90"
            >
              A strategic finance professional combining Business Analytics, Financial Planning, 
              Investment Management, and Personal Taxation to optimize corporate growth and individual wealth.
            </motion.p>

            {/* Connect With Me button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/cont">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#288CF0] px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Connect With Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Media Links */}
        
          </div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 mt-12 lg:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  borderColor: ['#10b981', '#0d9488', '#10b981'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -left-8 w-16 h-16 border-4 rounded-lg shadow-lg"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: ['#288CF0', '#1a6cb3', '#288CF0'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-30 blur-lg"
              />
              
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255,255,255,0.2)',
                      '0 0 40px rgba(255,255,255,0.4)',
                      '0 0 20px rgba(255,255,255,0.2)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <img
                    src="pfpsush.jpg"
                    alt="Sushil Poudel"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;