import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Facebook, Linkedin, Instagram, Check, X, Loader } from 'lucide-react';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const MessageModal = ({ isSuccess, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 max-w-sm w-full"
      >
        <div className="text-center">
          <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${
            isSuccess ? 'bg-green-100' : 'bg-red-100'
          } mb-4`}>
            {isSuccess ? (
              <Check className={`h-6 w-6 text-green-600`} />
            ) : (
              <X className={`h-6 w-6 text-red-600`} />
            )}
          </div>
          <h3 className={`text-lg font-medium mb-2 ${
            isSuccess ? 'text-green-900' : 'text-red-900'
          }`}>
            {isSuccess ? 'Message Sent!' : 'Error'}
          </h3>
          <p className="text-gray-500 mb-4">{message}</p>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const socialLinks = [
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
  
  const [status, setStatus] = useState({
    show: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const messageData = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'unread'
      };

      await addDoc(collection(db, 'messages'), messageData);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setStatus({
        show: true,
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        show: true,
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    }
    
    setLoading(false);
  };

  const handleCloseModal = () => {
    setStatus({ ...status, show: false });
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
                    disabled={loading}
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
                    disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-[#288CF0] to-[#0070C0] text-white py-4 rounded-lg font-semibold hover:from-[#1a7dd1] hover:to-[#005da1] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Sending...
                  </>
                ) : (
                  'Submit Form'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {status.show && (
          <MessageModal
            isSuccess={status.success}
            message={status.message}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;