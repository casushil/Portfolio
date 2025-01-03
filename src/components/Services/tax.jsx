import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Building2, 
  FileCheck, 
  Calculator, 
  ShieldCheck,
  TrendingUp,
  FileSearch,
  BarChart3,
  CheckCircle
} from 'lucide-react';

const TaxationPage = () => {
  const personalTaxServices = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Personal Tax Filing",
      description: "Comprehensive personal tax return preparation with maximum benefit identification",
      features: [
        "Income tax return preparation",
        "Tax credits and deductions optimization",
        "Investment income reporting",
        "Rental income calculations",
        "Foreign income declarations"
      ]
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "Small Business Tax Returns",
        description: "Complete tax preparation services for small businesses and entrepreneurs",
        features: [
          "Corporate tax returns",
          "Partnership returns",
          "LLC tax filings",
          "Self-employed tax preparation",
          "Business expense optimization"
        ]
      },
      {
        icon: <FileSearch className="w-6 h-6" />,
        title: "Compliance & Reporting",
        description: "Ensuring your business meets all tax obligations and requirements",
        features: [
          "Regulatory compliance",
          "Financial statement preparation",
          "Tax deadline management",
          "Record keeping assistance",
          "Audit preparation"
        ]
      }
  ];

  const businessTaxServices = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Small Business Tax Returns",
      description: "Complete tax preparation services for small businesses and entrepreneurs",
      features: [
        "Corporate tax returns",
        "Partnership returns",
        "LLC tax filings",
        "Self-employed tax preparation",
        "Business expense optimization"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Tax Planning",
      description: "Strategic tax planning to support your business growth",
      features: [
        "Tax-efficient business structure",
        "Quarterly tax planning",
        "Cash flow optimization",
        "Business expansion strategies",
        "Asset acquisition planning"
      ]
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Compliance & Reporting",
      description: "Ensuring your business meets all tax obligations and requirements",
      features: [
        "Regulatory compliance",
        "Financial statement preparation",
        "Tax deadline management",
        "Record keeping assistance",
        "Audit preparation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
   
     
      {/* Personal Tax Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Tax Services</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {personalTaxServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#288CF0] to-[#0070C0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Optimize Your Tax Strategy?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#288CF0] px-8 py-4 rounded-lg font-semibold 
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default TaxationPage;