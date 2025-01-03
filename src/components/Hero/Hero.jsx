// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-40"
          />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Financial Excellence Through
              <br />
              <span className="text-accent">Strategic Planning</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Expert Chartered Accountant providing comprehensive financial planning
            and business intelligence solutions for your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Schedule a Consultation
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
