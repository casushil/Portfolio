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
    { number: '10+', label: 'Industries Served' }
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

     
    </div>
  );
};

export default Home;