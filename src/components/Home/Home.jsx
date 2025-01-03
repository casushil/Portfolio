import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import AnimatedHero from '../Animated/AnimatedHero';
import AboutMe from './aboutME';
const Home = () => {
  

  const quickStats = [
    { number: '8+', label: 'Years Experience' },
    { number: '100+', label: 'Clients Served' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Industries Served' }
  ];

  return (
    <div className="min-h-screen">
          {/* Replace the old hero section with the new AnimatedHero */}
          <AnimatedHero />
          <AboutMe/>


      {/* Quick Stats Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Financial Planning</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Tax Planning & Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Investment Advisory</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Wealth Management</span>
                </li>
              </ul>
              <motion.a
                href="https://www.linkedin.com/in/skpoudel/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block text-primary font-semibold"
              >
                Learn More →
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">BI Consulting</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Data Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Performance Metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-accent" />
                  <span>Strategic Planning</span>
                </li>
              </ul>
              <motion.a
                href="#bi-consulting"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block text-secondary font-semibold"
              >
                Learn More →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;