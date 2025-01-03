import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ChartBar, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedHero = () => {
  const expertise = [
    { icon: <Calculator className="w-6 h-6" />, text: "Financial Advisory" },
    { icon: <ChartBar className="w-6 h-6" />, text: "Business Intelligence" },
    { icon: <Shield className="w-6 h-6" />, text: "Tax Planning" }
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

  const floatingVariants = {
    animate: {
      y: [-20, 20],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Enhanced background animations */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"
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
          {/* Enhanced left content section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-white font-medium">Chartered Accountant & Financial Advisor</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold mb-6 relative"
            >
              {/* Animated "I am" text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                <motion.span
                  animate={{
                    color: ['#ffffff', '#a5f3fc', '#ffffff'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="relative z-10"
                >
                  I am
                </motion.span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-20 blur-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
              <br />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.8,
                  ease: "easeInOut"
                }}
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-emerald-100 bg-clip-text text-transparent">
                  Sushil Poudel
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-8 leading-relaxed max-w-xl"
            >
              <motion.span
                animate={{
                  color: ['rgba(255,255,255,0.9)', 'rgba(165,243,252,1)', 'rgba(255,255,255,0.9)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-white/90"
              >
            
              Empowering individuals, small and medium scale businesses through strategic financial planning and expert guidance. 
              With extensive experience in financial advisory and business intelligence, 
              I help organizations and individuals achieve their financial goals.
              </motion.span>
            </motion.p>

            {/* Enhanced expertise pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white border border-white/20 shadow-lg hover:border-white/40 transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-4"
            >
              <Link to="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Schedule Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
              <a 
                href="https://www.linkedin.com/in/skpoudel/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-white to-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Connect With Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced right image section */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="flex-1 mt-12 lg:mt-0 relative"
          >
            <div className="relative">
              {/* Enhanced decorative elements */}
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
              
              {/* Enhanced image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10"
              >
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
                  className="relative"
                >
                  <img
                    src="1690727439575.jpeg"
                    alt="CA Sushil Poudel"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;