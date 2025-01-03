import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Scroll, Calendar, Building } from 'lucide-react';

const EducationPage = () => {
  const formalEducation = [
    {
      institution: "Maharishi International University",
      degree: "MBA in SAP-ERP for Professionals",
      period: "Apr 2022 - Dec 2025",
      focus: "SAP S4/HANA ERP, Financial Modelling",
      skills: ["Problem Solving", "Data Analysis", "Interpersonal Skills", "Financial Modeling", "Mathematics", "SAP BPC"],
      logo: "miu.jpeg"
    },
    {
      institution: "School of Management, Tribhuvan University",
      degree: "Master's degree in Business Studies",
      period: "Dec 2017 - May 2021",
      focus: "Major in Finance and Investment Management",
      thesis: "Analysis of portfolio with commercial banking stock in Nepal",
      skills: ["Mathematics", "Economics"],
      logo: "tu.jpeg"
    },
    {
      institution: "The Institute of Chartered Accountants of Nepal",
      degree: "Chartered Accountants",
      period: "Jun 2013 - Dec 2018",
      focus: "Finance, Accounting, Auditing, Taxation",
      skills: ["Financial Management", "Sarbanes-Oxley Act", "Problem Solving", "Interpersonal Skills", "Mathematics", "Economics"],
      logo: "icaan.jpg"
    },
    {
      institution: "School of Management, Tribhuvan University",
      degree: "Bachelor's degree in Business Studies",
      period: "Dec 2012 - Apr 2016",
      focus: "Accounting and Taxation",
      skills: ["Mathematics", "Economics"],
      logo: "tu.jpeg"
    }
  ];

  const certifications = [
    {
      title: "Complete Microsoft Power BI Bootcamp",
      issuer: "Udemy",
      date: "Sep 2022",
      credentialId: "UC-2b0895de-a847-4004-a273-0ff628b01489",
      type: "Technical"
    },
    {
      title: "Master Excel for Financial Analysis",
      issuer: "Udemy",
      date: "Sep 2022",
      credentialId: "UC-4ffc6d81-259a-4e0d-ae04-87c7db1dbb9b",
      type: "Technical"
    },
    {
      title: "MySQL for Data Analytics and Business Intelligence",
      issuer: "Udemy",
      date: "Sep 2022",
      credentialId: "UC-0cfa1221-ddca-4f21-8084-67e80e7da8fa",
      type: "Technical"
    },
    {
      title: "CFA Level I",
      issuer: "CFA Institute",
      date: "Feb 2021",
      skills: ["Investment Management", "Finance", "Economics", "Mathematics", "Financial Management"],
      type: "Professional"
    },
    {
      title: "Investment Foundations Certificate",
      issuer: "CFA Institute",
      date: "Aug 2020",
      credentialId: "209947",
      skills: ["Investment Strategies", "Investment Management", "Portfolio Management", "Investment Analysis"],
      type: "Professional"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Education & Certifications</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-transparent bg-clip-text">
            Academic Excellence & Professional Development
          </h1>
        </motion.div>
      </section>

      {/* Formal Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span>Formal Education</span>
          </motion.h2>

          <div className="space-y-12">
            {formalEducation.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Building className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar className="w-5 h-5" />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">{edu.degree}</h4>
                    <p className="text-gray-700 mb-4">{edu.focus}</p>
                    {edu.thesis && (
                      <p className="text-gray-700 mb-4">
                        <span className="font-semibold">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 mb-4">Skills & Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Scroll className="w-8 h-8 text-blue-600" />
            <span>Professional Certifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <p className="text-sm text-gray-500 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Continuous Learning & Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey reflects a commitment to continuous learning and 
            professional development, combining traditional academic excellence with 
            modern technical expertise to stay at the forefront of finance and technology.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default EducationPage;