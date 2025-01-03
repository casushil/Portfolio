// src/components/Services/BiConsulting.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartPieIcon,
  CubeIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  ServerIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const BiConsulting = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using advanced analytics techniques.",
      icon: ChartPieIcon,
      color: "primary"
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through data-driven process improvements.",
      icon: CubeIcon,
      color: "secondary"
    },
    {
      title: "Strategic Planning",
      description: "Develop data-backed strategies to drive business growth and competitive advantage.",
      icon: LightBulbIcon,
      color: "accent"
    },
    {
      title: "Performance Metrics",
      description: "Design and implement KPIs to track and improve business performance.",
      icon: ArrowTrendingUpIcon,
      color: "primary"
    },
    {
      title: "Data Infrastructure",
      description: "Build robust data infrastructure for efficient information management.",
      icon: ServerIcon,
      color: "secondary"
    },
    {
      title: "Data Visualization",
      description: "Create interactive dashboards and reports for better decision-making.",
      icon: CircleStackIcon,
      color: "accent"
    }
  ];

  return (
    <section id="bi-consulting" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Intelligence Consulting</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leverage the power of data analytics and business intelligence to make informed decisions
            and drive your business forward with our expert consulting services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-primary font-semibold flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                Transform Your Business with Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                Our BI consulting services help you harness the power of your data to make better
                business decisions, optimize operations, and drive growth through:
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced analytics and predictive modeling",
                  "Custom dashboard development",
                  "Data integration and warehousing",
                  "Real-time reporting solutions",
                  "Performance metrics and KPI tracking"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/path-to-your-dashboard-image.jpg"
                  alt="Business Intelligence Dashboard"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule a BI Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BiConsulting;