import React, { useState } from 'react';
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
      content: 'skpoudel@outlook.com',
      link: 'mailto:skpoudek@outlook.com'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      content: 'Cincinatti, Ohio',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 text-lg font-semibold mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="w-32 h-1.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-500"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Have questions about financial planning or business intelligence? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <info.icon className="h-12 w-12 mx-auto text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
              <p className="text-gray-600 text-lg">{info.content}</p>
            </a>
          ))}
        </div>

        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-12 lg:p-16 text-white">
              <h3 className="text-3xl font-bold mb-6">Welcome</h3>
              <p className="text-white/90 text-lg mb-12 leading-relaxed">
                Schedule a consultation or send me a message. I'm here to help you
                achieve your financial goals and secure your future through expert
                planning and guidance.
              </p>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Office Hours:</h4>
                <div className="space-y-4 text-lg text-white/90">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span>Saturday:</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-gradient-to-br from-white via-white to-sky-50">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-lg transition-all duration-200"
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-lg transition-all duration-200"
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-lg transition-all duration-200"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-lg transition-all duration-200"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-lg transition-all duration-200 resize-none"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;