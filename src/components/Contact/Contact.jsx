// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      content: '123 Business Street, City, State 12345',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about financial planning or business intelligence? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <info.icon className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-4">
                Schedule a consultation or send me a message. I'm here to help you
                achieve your financial goals.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Office Hours:</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
