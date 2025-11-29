'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Deteksi Scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Items agar kode lebih bersih
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '/about' }, 
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          
          {/* --- LOGO --- */}
          <Link href="/" className="text-2xl font-bold text-white tracking-wide">
            Arya<span className="text-teal-400">.</span>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Button Khusus */}
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm font-medium shadow-lg shadow-teal-500/10"
            >
              Let's Talk
            </Link>
          </nav>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-transform"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY (Animation) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-gray-300 hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
               href="#contact"
               onClick={() => setIsMenuOpen(false)}
               className="text-2xl font-semibold text-teal-400"
            >
               Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;