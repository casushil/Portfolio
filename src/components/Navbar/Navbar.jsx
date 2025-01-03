import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/consultation' },
    { name: 'Financial Planning', to: '/#financial-planning' },
    { name: 'BI Consulting', to: '/#bi-consulting' },
    { name: 'Contact', to: '/#contact' },
  ];



  const handleHashLinkClick = (e, hash) => {
    if (hash.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(hash.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img
                src="logo5.png" // Make sure to place your logo in the public folder
                alt="Company Logo"
                className="h-12 w-auto" // Adjust size as needed
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.to}
                    className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={(e) => handleHashLinkClick(e, item.to)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  handleHashLinkClick(e, item.to);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;