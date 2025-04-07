'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaBook, FaHome, FaShoppingCart, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  id: string;
  title: string;
  path: string;
  icon: React.ReactNode;
}

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { id: 'home', title: 'דף הבית', path: '#home', icon: <FaHome /> },
    { id: 'books', title: 'ספרים', path: '#books', icon: <FaBook /> },
    { id: 'cart', title: 'סל קניות', path: '#cart', icon: <FaShoppingCart /> },
    { id: 'about', title: 'אודות', path: '#about', icon: <FaInfoCircle /> },
    { id: 'contact', title: 'צור קשר', path: '#contact', icon: <FaPhone /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md' : 'bg-primary/90'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-white font-bold text-xl md:text-2xl hover:text-secondary transition-colors"
              onClick={() => handleLinkClick('home')}
            >
              חנות ספרים דלתא
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  activeLink === link.id
                    ? 'bg-secondary/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="ml-1.5">{link.icon}</span>
                {link.title}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-primary-dark focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">פתח תפריט</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                    activeLink === link.id
                      ? 'bg-secondary/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="ml-2">{link.icon}</span>
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationMenu;