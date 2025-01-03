import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone,Facebook,Linkedin,Instagram,YOUTUBE } from 'lucide-react';


const Contact = () => {
    const socialLinks= [
        { icon: Linkedin, url: 'https://www.linkedin.com/in/sushilpoudelll', color: 'hover:text-blue-600' },
        { icon: Facebook, url: 'https://www.facebook.com/sushilpoudelll', color: 'hover:text-blue-500' },
        { icon: Instagram, url: 'https://www.instagram.com/sushilpoudelll', color: 'hover:text-pink-500' },
      ];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    // For now, we'll just log it
    console.log(formData);
  };

  return (
    <section id="contact-section" className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Let's connect!</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-600">
                Fill out the form and I'll get back to you promptly to explore 
                how we can achieve your financial goals together.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <a 
                  href="mailto:skpoudel@outlook.com" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  skpoudel@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <a 
                  href="tel:+1 (641) 819-2655" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                 +1 (641) 819-2655
                </a>
              </div>
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

            </div>
          </motion.div>
           
          {/* Right side form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-white py-4 rounded-lg font-semibold hover:from-[#1a7dd1] hover:to-[#005da1] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Form
              </motion.button>
            </form>
          </motion.div>
        </div>
        
      </div>
    </section>
    
  );

};

export default Contact;