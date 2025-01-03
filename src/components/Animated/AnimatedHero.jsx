import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ChartBar, Shield } from 'lucide-react';

const AnimatedHero = () => {
  const expertise = [
    { icon: <Calculator className="w-6 h-6" />, text: "Financial Advisory" },
    { icon: <ChartBar className="w-6 h-6" />, text: "Business Intelligence" },
    { icon: <Shield className="w-6 h-6" />, text: "Tax Planning" }
  ];

  return (
    <div className="min-h-screen bg-[#0070C0] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, #288CF0 0%, #0070C0 100%)`,
        }}
      />
      

      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: '#FF5000' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-[#FF5000] px-4 py-1 rounded-full mb-6"
            >
              <span className="text-white font-medium">Chartered Accountant & Financial Advisor</span>
            </motion.div>
            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="text-5xl lg:text-7xl font-bold mb-6"
>
  Hi, I am <br />
  <motion.span
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ 
      duration: 1.5,
      delay: 0.8,
      ease: "easeInOut"
    }}
    className="text-[#ffffff ] inline-block whitespace-nowrap overflow-hidden"
  >
    <span className="inline-block">Sushil Poudel</span>
  </motion.span>
</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-gray-100 mb-8 leading-relaxed max-w-xl"
            >
              Empowering businesses through strategic financial planning and expert guidance. 
              With extensive experience in financial advisory and business intelligence, 
              I help organizations achieve their financial goals.
            </motion.p>

            {/* Expertise pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF5000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FF5000]/90 transition-colors"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0070C0] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Connect With Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right image section with geometric decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 mt-12 lg:mt-0 relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -left-8 w-16 h-16 border-4 border-[#FF5000] rounded-lg"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#288CF0] rounded-full opacity-30"
              />
              
              {/* Main image container */}
              <motion.div
  animate={{
    y: [-10, 10, -10],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse"
  }}
  className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-white"
>
  <img
    src="1690727439575.jpeg"
    alt="CA Sushil Poudel"
    className="w-full h-full object-cover"
  />
</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;