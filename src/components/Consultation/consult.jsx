import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  PresentationChartLineIcon,
  DocumentChartBarIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import Contact from '../Contact/Contact';
const ConsultationPage = () => {
    
  const expertise = [
    {
      icon: ChartBarIcon,
      title: "Financial Analysis & Reporting",
      description: "Expert in IFRS/GAAP financial reporting, with proven experience in complex financial analysis and trend & variance analysis."
    },
    {
      icon: PresentationChartLineIcon,
      title: "Data Visualization",
      description: "Specialized in creating dynamic dashboards for operational and financial results using Power BI and advanced Excel."
    },
    {
      icon: DocumentChartBarIcon,
      title: "Financial Planning",
      description: "Extensive experience in budgeting, forecasting, and financial modeling for strategic business decisions."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Investment & Trading",
      description: "Expert in commodities trading, hedging strategies, and portfolio management with banking sector expertise."
    }
  ];

  const achievements = [
    {
      metric: "40+",
      title: "Clients Served",
      description: "Across banking, insurance, healthcare, manufacturing, and renewable energy sectors"
    },
    {
      metric: "$30M+",
      title: "Financial Deals",
      description: "Successfully mediated financing ranging from $100K to $30M"
    },
    {
      metric: "300+",
      title: "Business Lines",
      description: "Transformed operations through ERP implementation"
    },
    {
      metric: "25+",
      title: "Financial Models",
      description: "Created for trading, education, and hydropower sectors"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white mt-16 relative">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-blue-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Financial Excellence Through Expert Consultation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Chartered Accountant and FP&A Analyst with expertise in financial reporting, data visualization,
              and complex financial analysis. Let's transform your financial strategy together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900">MBA in SAP-ERP for Professionals</h4>
                  <p className="text-gray-600">Maharishi International University</p>
                  <p className="text-gray-500">2022 - 2024</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900">Master's in Business Studies</h4>
                  <p className="text-gray-600">School of Management, Tribhuvan University</p>
                  <p className="text-gray-600">Finance and Investment Management</p>
                  <p className="text-gray-500">2017 - 2021</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <BuildingLibraryIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900">Complete Microsoft Power BI Bootcamp</h4>
                  <p className="text-gray-600">Udemy</p>
                  <p className="text-gray-500">2022</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900">Master Excel for Financial Analysis</h4>
                  <p className="text-gray-600">Udemy</p>
                  <p className="text-gray-500">2022</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Strategy?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how my expertise in financial analysis, 
              data visualization, and strategic planning can benefit your business.
            </p>
        
          </div>
        </div>
      </section>
      < Contact> </Contact>

    </div>
    
  );
};

export default ConsultationPage;