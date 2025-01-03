import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  
  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sushilpoudelll', label: '', color: 'hover:text-blue-600 hover:bg-blue-50/80' },
    { icon: Facebook, url: 'https://www.facebook.com/sushilpoudelll', label: '', color: 'hover:text-blue-500 hover:bg-blue-50/80' },
    { icon: Instagram, url: 'https://www.instagram.com/sushilpoudelll', label: '', color: 'hover:text-pink-500 hover:bg-pink-50/80' },
    { icon: Youtube, url: 'https://www.youtube.com/@sushilpoudelll', label: '', color: 'hover:text-red-600 hover:bg-red-50/80' },
    { icon: Twitter, url: 'https://x.com/sushilpoudelll', label: '', color: 'hover:text-blue-400 hover:bg-blue-50/80' }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(40, 140, 240, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, rgba(40, 140, 240, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(40, 140, 240, 0.05) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />
      
      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: '40%',
            border: '2px solid rgba(40, 140, 240, 0.1)',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div style={{ y }} className="relative">
              {/* Background blur effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="er.jpg"
                  alt="Sushil Poudel"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-800 font-medium">About Me</span>
            </motion.div>

            <div className="relative">
              <motion.h2 
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#288CF0] to-[#0070C0] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Transforming Financial Complexity into Clarity
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a finance enthusiast with a deep love for numbers and analytics, 
                  I transform complex financial data into powerful business strategies 
                  and investment insights. Armed with Chartered Accountant expertise 
                  and advanced business intelligence skills, I bridge the gap between 
                  traditional finance and cutting-edge analytics.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My mission extends beyond corporate success—I'm passionate about 
                  creating wealth through smart investing and empowering others to 
                  navigate the fascinating world of finance. Let's turn financial 
                  complexity into clarity together.
                </p>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-100/50 
                    backdrop-blur-sm transition-all duration-300 ${social.color} shadow-sm hover:shadow-md
                    bg-white/50`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-gray-700">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Journey Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link to="/journey">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-white px-8 py-4 
                  rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Explore My Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;