import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JourneySection = () => {
  const { scrollY } = useScroll();
  
  const journeySections = [
    {
      title: "From Nepal to Global Finance",
      subtitle: "The Beginning of a Financial Journey",
      content: "Numbers have always told me stories. Growing up in Nepal, I was fascinated by how figures could reveal the hidden patterns in business and life. This curiosity led me on an extraordinary journey from the foothills of the Himalayas to becoming a specialist in financial analytics and investment management.",
      image: "ts.jpg",
      icon: "🌏"
    },
    {
      title: "Educational Journey & Professional Development",
      subtitle: "Building Strong Foundations",
      content: `My quest for financial expertise began at Tribhuvan University, where I earned both my bachelor's and master's degrees in business. The pursuit of excellence led me to become a Chartered Accountant, equipping me with a strong foundation in financial reporting and analysis. My commitment to continuous learning drove me to pass CFA Level I, adding depth to my investment knowledge. Currently, I'm enhancing my technical expertise through an MBA in SAP Finance and Business Analytics at Maharishi International University, focusing on the intersection of traditional finance and modern analytics.

      To stay at the cutting edge of technology, I've earned certifications in SQL, Power BI, and Tableau, enabling me to transform complex data into actionable insights. This combination of financial expertise and technical skills allows me to bridge the gap between traditional finance and modern analytical tools.`,
      image: "grd.JPG",
      icon: "🎓"
    },
    {
      title: "Professional Journey",
      subtitle: "Making Impact Through Innovation",
      content: `My professional story began at G&G Associates, where I discovered my passion for transforming complex data into actionable insights. Working with over 100 clients across diverse sectors – from banking to renewable energy – I learned that every business has a unique story hidden in its numbers.

      The turning point in my career came at NIC Asia Bank Limited. Here, I wasn't just analyzing numbers; I was revolutionizing processes. By implementing ERP solutions, we transformed operations across 300+ business lines, reducing departmental costs by 78% and paperwork by 70%. This experience taught me that financial analysis isn't just about tracking performance – it's about driving transformation.


      My journey then took an international turn at BeyondID, where I bridged operations between Nepal and San Francisco. Managing rapid growth while securing significant investments showed me the global impact of sound financial strategy.
`,
      image: "nic.png",
      icon: "💼"
    },
    {
      title: "Currently at Quality Gold",
      subtitle: "Leading Financial Innovation & BI Transformation",
      content: `Currently at Quality Gold, I combine my financial expertise and technological acumen in a dynamic role. While designing sophisticated financial models, managing complex derivative transactions in precious metals, and developing budgets and forecasts, I'm also spearheading a comprehensive Data Warehouse and Business Intelligence project. Using BI tools, I'm transforming our data analytics capabilities through streamlined ETL processes and interactive dashboards, enabling data-driven decision-making across the organization.

      Parallel to my corporate role, I actively manage investment portfolios for private clients in Nepal, applying my analytical skills and market insights to help individuals achieve their financial goals.`,
      image: "qg.png",
      icon: "⚡"
    },
    {
      title: "Investment Philosophy & Personal Finance",
      subtitle: "Creating Sustainable Wealth",
      content: `My passion for finance extends well beyond the corporate realm. As an active investment manager for private clients and my personal portfolio, I blend fundamental analysis with technical insights to craft personalized investment strategies. My approach focuses on long-term wealth creation through diversified portfolios, risk management, and strategic asset allocation. I believe that financial literacy is key to personal success, which drives me to share insights and empower others in their financial journey.`,
      image: "st.jpg",
      icon: "📈"
    },
    {
      title: "Beyond the Numbers",
      subtitle: "Sharing Knowledge & Building Future",
      content: `When I'm not immersed in financial models and analytics, you'll find me researching market trends, developing investment strategies, or sharing insights about personal finance and wealth building. I'm particularly passionate about helping others understand and navigate the complex world of investing, believing that financial independence is achievable through education and disciplined strategy.

      Whether you're seeking advanced analytics solutions, investment guidance, tax planning or strategic financial planning, I bring a comprehensive toolkit of skills and experience to help you achieve your goals. Let's write your next success story together.`,
      image: "inv.png",
      icon: "🚀"
    }
  ];

  // Background parallax effect
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
      </motion.div>

      {/* Floating decorative elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: '40%',
            border: '2px solid rgba(40, 140, 240, 0.1)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 1
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

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-6xl mb-6 block">🌟</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-transparent bg-clip-text mb-6">
            My Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the foothills of Nepal to global finance, every step has been a lesson in transformation
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-32">
          {journeySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center relative`}
            >
              {/* Connector Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                className="absolute top-0 left-1/2 w-px bg-gradient-to-b from-blue-200 to-transparent h-full"
                style={{ zIndex: 0 }}
              />

              {/* Content */}
              <motion.div 
                className="flex-1 relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <span className="text-4xl mb-4 block">{section.icon}</span>
                  <h3 className="text-2xl font-bold text-[#288CF0] mb-2">{section.title}</h3>
                  <h4 className="text-lg text-gray-600 mb-4">{section.subtitle}</h4>
                  <div className="prose prose-lg">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-700 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div 
                className="flex-1 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-white px-8 py-4 rounded-lg 
            font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneySection;