import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    const socialLinks= [
        { icon: Linkedin, url: 'https://www.linkedin.com/in/sushilpoudelll', color: 'hover:text-blue-600' },
        { icon: Facebook, url: 'https://www.facebook.com/sushilpoudelll', color: 'hover:text-blue-500' },
        { icon: Instagram, url: 'https://www.instagram.com/sushilpoudelll', color: 'hover:text-pink-500' },
        { icon: Youtube, url: 'https://www.youtube.com/@sushilpoudelll', color: 'hover:text-red-600' },
        { icon: Twitter, url: 'https://x.com/sushilpoudelll', color: 'hover:text-blue-400' }
      ];
    const socialLinks1 = [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/skpoudel/',
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/your-profile',
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      },
      {
        name: 'Email',
        url: 'casushilpoudel@outlook.com',
        icon: <EnvelopeIcon className="h-6 w-6" />
      }
    ];
  
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Financial Planning', href: '#financial-planning' },
    { name: 'BI Consulting', href: '#bi-consulting' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-zinc-200 text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Sushil Poudel</h3>
            <p className="text-black mb-4">
              Chartered Accountant
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-black hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
              <a href="#tax-planning" className="text-black hover:text-white transition-colors">
        Tax Planning
      </a>
    </li>
    <li>
      <a href="#investment-advisory" className="text-black hover:text-white transition-colors">
        Investment Advisory
      </a>
    </li>
    <li>
      <a href="#business-intelligence" className="text-black hover:text-white transition-colors">
        Business Intelligence
      </a>
    </li>
    <li>
      <a href="#data-analytics" className="text-black hover:text-white transition-colors">
        Data Analytics
      </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-black">
              <li>Phone: +1 (641) 819-2655 </li>
              <li>Email: skpoudel@outlook.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-black">
          <p>© {new Date().getFullYear()} Sushil Poudel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;