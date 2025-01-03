import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/journey' },
    {
      name: 'Services',
      children: [
        { name: 'Financial Planning', to: '/#financial-planning' },
        { name: 'BI Consulting', to: '/#bi-consulting' },
        { name: 'Taxation', to: '/taxation' }
      ]
    },
    { name: 'Education', to: '/education' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/cont' }
  ];

  // Handle navigation for both regular links and hash links
  const handleNavigation = (to) => {
    if (to.startsWith('/#')) {
      const targetId = to.substring(2);
      if (location.pathname !== '/') {
        // Navigate to home and then scroll after a short delay to ensure the elements are loaded
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
    
    // Close menus after navigation
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };


  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div onClick={() => handleNavigation('/')} className="cursor-pointer">
              <img
                src="logo6.png"
                alt="Company Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  // Dropdown menu
                  <div>
                    <button
                      className="text-gray-800 hover:text-[#288CF0] px-3 py-2 rounded-md text-sm font-medium 
                      flex items-center gap-1 transition-colors"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div 
                        className="absolute left-0 w-48 mt-2 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {item.children.map((child) => (
                          <div
                            key={child.name}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleNavigation(child.to)}
                          >
                            {child.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular menu item
                  <div
                    onClick={() => handleNavigation(item.to)}
                    className="text-gray-800 hover:text-[#288CF0] px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {item.name}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 
              hover:text-[#288CF0] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full text-left text-gray-800 hover:text-[#288CF0] px-3 py-2 
                    rounded-md text-base font-medium flex items-center justify-between"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`${isMobileServicesOpen ? 'block' : 'hidden'} pl-4`}>
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        onClick={() => handleNavigation(child.to)}
                        className="block px-3 py-2 rounded-md text-base font-medium 
                        text-gray-700 hover:text-[#288CF0] cursor-pointer"
                      >
                        {child.name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => handleNavigation(item.to)}
                  className="block px-3 py-2 rounded-md text-base font-medium 
                  text-gray-800 hover:text-[#288CF0] cursor-pointer"
                >
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;