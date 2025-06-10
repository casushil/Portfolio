import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Facebook, Linkedin, Instagram, Check, X, Loader ,Send} from 'lucide-react';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const MessageModal = ({ isSuccess, message, onClose }) => (
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
          {isSuccess ? <Check className="h-6 w-6 text-green-600" /> : <X className="h-6 w-6 text-red-600" />}
        </div>
        <h3 className={`text-lg font-medium mb-2 ${isSuccess ? 'text-green-900' : 'text-red-900'}`}>
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

const Contact = () => {
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

  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-8 max-w-7xl">
    
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side content */}
          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-muted">
                <div className="max-w-md">
                  <span className="text-primary font-medium tracking-wide mb-4 block">CONTACT ME</span>
                  <h3 className="text-4xl font-bold text-foreground tracking-tight mb-4 font-cal">
                    Get in touch today
                  </h3>
                  <p className="text-muted-foreground text-lg mb-12">
                  Fill out the form and I'll get back to you promptly to explore how we can achieve your financial goals together.


                  </p>
                
                  <div className="space-y-6">
              
                    <motion.a 
                      href="mailto:caskpoudel@gmail.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 group p-4 bg-card rounded-2xl hover:bg-accent/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <span className="font-medium text-foreground group-hover:text-foreground transition-colors">
                          caskpoudel@gmail.com
                        </span>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href="tel:+1 (641) 819-2655"
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 group p-4 bg-card rounded-2xl hover:bg-accent/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <span className="font-medium text-foreground group-hover:text-foreground transition-colors">
                          +1 (641) 819-2655
                        </span>
                      </div>
                    </motion.a>
                  </div>

                  <div className="pt-8 mt-8 border-t border-muted">
                    <p className="text-sm text-muted-foreground mb-4">Reach out to me on:</p>
                    <div className="flex items-center gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href="https://www.linkedin.com/in/casushilpoudell"
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-accent/50"
                      >
                        <Linkedin className="w-5 h-5 hover:text-blue-600" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href="https://www.facebook.com/casushilpoudel"
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-accent/50"
                      >
                        <Facebook className="w-5 h-5 hover:text-blue-500" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href="https://www.instagram.com/casushilpoudel"
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-accent/50"
                      >
                        <Instagram className="w-5 h-5 hover:text-pink-500" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=skpoudel@outlook.com"
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-accent/50"
                      >
                        <Mail className="w-5 h-5 hover:text-blue-400" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          
          {/* Right side form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {status.show && (
          <MessageModal
            isSuccess={status.success}
            message={status.message}
            onClose={() => setStatus({ ...status, show: false })}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;