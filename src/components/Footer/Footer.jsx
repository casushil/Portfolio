import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Facebook, Linkedin, Instagram, Youtube, Twitter, MailIcon } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleServiceClick = (sectionId) => (e) => {
        e.preventDefault();
        if (!isHomePage) {
            // If not on home page, navigate to home and then scroll
            navigate('/', { replace: true });
            // Add a slight delay to ensure navigation completes
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // If already on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const socialLinks = [
        { icon: Linkedin, url: 'https://www.linkedin.com/in/casushilpoudell', color: 'hover:text-blue-600' },
        { icon: Facebook, url: 'https://www.facebook.com/casushilpoudel', color: 'hover:text-blue-500' },
        { icon: Instagram, url: 'https://www.instagram.com/casushilpoudel', color: 'hover:text-pink-500' },
        { icon: MailIcon, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=skpoudel@outlook.com', color: 'hover:text-blue-400' },
        { icon: Youtube, url: 'https://www.youtube.com/@casushilpoudel', color: 'hover:text-red-600' },
        { icon: Twitter, url: 'https://x.com/casushilpoudel', color: 'hover:text-blue-400' },
    ];

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'My Journey', href: '/journey' },
        { name: 'Contact', href: '/cont' }
    ];

    const services = [
        { name: 'Tax Services', id: 'tax' },
        { name: 'Financial Planning', id: 'financial-planning' },
        { name: 'BI Consulting', id: 'bi-consulting' }
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
                                    <Link
                                        to={item.href}
                                        className="text-black hover:text-sky-700 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <button
                                        onClick={handleServiceClick(service.id)}
                                        className="text-black hover:text-sky-700 transition-colors text-left w-full"
                                    >
                                        {service.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-black">
                            <li>Phone: +1 (641) 819-2655</li>
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