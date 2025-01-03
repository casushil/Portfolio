// src/components/Services/FinancialPlanning.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  DocumentChartBarIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const FinancialPlanning = () => {
  const services = [

    {
      title: "Financial Reporting",
      description: "Detailed financial reports and analysis to track performance and make informed decisions.",
      icon: DocumentChartBarIcon
    },
    {
      title: "Wealth Management",
      description: "Personalized wealth management strategies for long-term financial growth and security.",
      icon: PresentationChartLineIcon
    },
    {
      title: "Corporate Finance and Strategic Planning",
      description: "Strategic financial planning and management solutions for businesses of all sizes.",
      icon: BuildingOfficeIcon
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="financial-planning" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Planning Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial planning services designed to help you achieve your financial goals
            and secure your future through strategic planning and expert guidance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              
              
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default FinancialPlanning;