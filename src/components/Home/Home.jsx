import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import AnimatedHero from '../Animated/AnimatedHero';

const Home = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/skpoudel/',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <EnvelopeIcon className="h-6 w-6" />
    }
  ];

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


      {/* Quick Stats Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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